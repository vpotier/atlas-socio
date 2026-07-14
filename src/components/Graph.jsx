import { useMemo, useRef, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Background from "../layers/Background";
import Clusters from "./Clusters";
import Authors from "./Authors";
import Concepts from "./Concepts";

import { authors as rawAuthors } from "../data/authors";
import { concepts as rawConcepts } from "../data/concepts";
import { relations } from "../data/relations";
import { computeLayout } from "../engine/layout";
import { constellationAxisValues } from "../data/theoreticalAxes";

// Tolérance (en fraction de l'axe, 0-1) pour qu'une constellation soit
// considérée comme correspondant à la position d'un curseur de filtre.
const AXIS_TOLERANCE = 0.13;

export default function Graph({
  selectedItem,
  setSelectedItem,
  axisFilters,
  themeFilters,
}) {
  const [hoveredRelation, setHoveredRelation] = useState(null);
  const transformRef = useRef(null);

  const layout = useMemo(
    () => computeLayout(rawAuthors, rawConcepts, relations),
    []
  );

  const authors = useMemo(
    () =>
      rawAuthors.map((a) => ({
        ...a,
        ...layout.authorPositions.get(a.id),
      })),
    [layout]
  );

  const concepts = useMemo(
    () =>
      rawConcepts.map((c) => ({
        ...c,
        ...layout.conceptPositions.get(c.id),
        constellation:
          authors.find((a) => a.id === c.authors[0])
            ?.constellation ?? null,
      })),
    [layout, authors]
  );

  const selectedAuthor =
    selectedItem?.type === "author"
      ? selectedItem.data
      : null;

  const selectedConcept =
    selectedItem?.type === "concept"
      ? selectedItem.data
      : null;

  const selectedConstellationId =
    selectedItem?.type === "constellation"
      ? selectedItem.data.id
      : null;

  const neighbourIds = useMemo(() => {
    if (!selectedAuthor) return null;

    const ids = new Set([selectedAuthor.id]);

    relations.forEach((r) => {
      if (r.source === selectedAuthor.id)
        ids.add(r.target);

      if (r.target === selectedAuthor.id)
        ids.add(r.source);
    });

    return ids;
  }, [selectedAuthor]);

  const conceptAuthors = useMemo(() => {
    if (!selectedConcept) return null;

    return new Set(selectedConcept.authors);
  }, [selectedConcept]);

  // --- Filtres théoriques (axes) et thématiques ---
const activeAxisEntries = useMemo(
    () =>
      Object.entries(axisFilters || {})
        .filter(([, f]) => f && f.enabled)
        .map(([axisKey, f]) => [axisKey, f.value]),
    [axisFilters]
  );

  const matchingConstellationIds = useMemo(() => {
    if (activeAxisEntries.length === 0) return null;

    const ids = new Set();

    Object.keys(constellationAxisValues).forEach(
      (constellationId) => {
        const values = constellationAxisValues[constellationId];

        const matches = activeAxisEntries.every(
          ([axisKey, filterValue]) => {
            const axisValue = values[axisKey];
            if (!axisValue) return false;
            return (
              Math.abs(axisValue.value - filterValue) <=
              AXIS_TOLERANCE
            );
          }
        );

        if (matches) ids.add(constellationId);
      }
    );

    return ids;
  }, [activeAxisEntries]);

  const filtersActive =
    activeAxisEntries.length > 0 ||
    (themeFilters && themeFilters.length > 0);

  const filterVisibleAuthorIds = useMemo(() => {
    if (!filtersActive) return null;

    const ids = new Set();

    authors.forEach((a) => {
      const constellationOk =
        !matchingConstellationIds ||
        matchingConstellationIds.has(a.constellation);

      const themeOk =
        !themeFilters ||
        themeFilters.length === 0 ||
        (a.themes || []).some((t) =>
          themeFilters.includes(t)
        );

      if (constellationOk && themeOk) ids.add(a.id);
    });

    return ids;
  }, [authors, matchingConstellationIds, themeFilters, filtersActive]);

  const filterVisibleConceptIds = useMemo(() => {
    if (!filterVisibleAuthorIds) return null;

    const ids = new Set();

    concepts.forEach((c) => {
      if (
        c.authors.some((authorId) =>
          filterVisibleAuthorIds.has(authorId)
        )
      ) {
        ids.add(c.id);
      }
    });

    return ids;
  }, [concepts, filterVisibleAuthorIds]);

  const getAuthor = (id) =>
    authors.find((a) => a.id === id);

  const relationGroups = useMemo(() => {
    const groups = {};

    relations.forEach((relation) => {
      const key = [relation.source, relation.target]
        .sort()
        .join("--");

      if (!groups[key]) groups[key] = [];

      groups[key].push(relation);
    });

    return groups;
  }, []);

  const getPathD = (relation, source, target) => {
    const key = [relation.source, relation.target]
      .sort()
      .join("--");

    const group = relationGroups[key];

    if (group.length === 1) {
      return `M ${source.x} ${source.y} L ${target.x} ${target.y}`;
    }

    const index = group.indexOf(relation);
    const offsetStep = 40;
    const offset =
      (index - (group.length - 1) / 2) * offsetStep;

    const [idA, idB] = [
      relation.source,
      relation.target,
    ].sort();

    const nodeA = getAuthor(idA);
    const nodeB = getAuthor(idB);

    const midX = (nodeA.x + nodeB.x) / 2;
    const midY = (nodeA.y + nodeB.y) / 2;

    const dx = nodeB.x - nodeA.x;
    const dy = nodeB.y - nodeA.y;
    const length = Math.sqrt(dx * dx + dy * dy) || 1;

    const normalX = -dy / length;
    const normalY = dx / length;

    const controlX = midX + normalX * offset;
    const controlY = midY + normalY * offset;

    return `M ${source.x} ${source.y} Q ${controlX} ${controlY}, ${target.x} ${target.y}`;
  };

  const getLineStyle = (relation) => {
    let color = "#999";
    let width = relation.strength
      ? 1 + relation.strength
      : 2;
    let dash = "";
    let opacity = 0.18;

    switch (relation.type) {
      case "heritage":
        color = "#4CAF50";
        break;

      case "dialogue":
        color = "#F1C232";
        break;

      case "tension":
        color = "#D32F2F";
        dash = "6 4";
        break;

      default:
        break;
    }

    if (selectedAuthor) {
      const linked =
        relation.source === selectedAuthor.id ||
        relation.target === selectedAuthor.id;

      opacity = linked ? 1 : 0.05;
      width = linked ? 4 : 1;
    }

    if (selectedConcept) {
      const linked =
        selectedConcept.authors.includes(
          relation.source
        ) ||
        selectedConcept.authors.includes(
          relation.target
        );

      opacity = linked ? 1 : 0.05;
      width = linked ? 4 : 1;
    }

    if (filterVisibleAuthorIds) {
      const linked =
        filterVisibleAuthorIds.has(relation.source) &&
        filterVisibleAuthorIds.has(relation.target);

      opacity = linked ? opacity : 0.03;
    }

    if (
      hoveredRelation &&
      hoveredRelation.source === relation.source &&
      hoveredRelation.target === relation.target
    ) {
      opacity = 1;
      width = 5;
    }

    return {
      color,
      width,
      dash,
      opacity,
    };
  };

  const authorDimIds = filtersActive
    ? filterVisibleAuthorIds
    : neighbourIds || conceptAuthors;

  const conceptDimIds = filtersActive
    ? filterVisibleConceptIds
    : null;

  return (
    <TransformWrapper
      ref={transformRef}
      initialScale={0.55}
      minScale={0.2}
      maxScale={3}
      centerOnInit
      limitToBounds={false}
    >
      <TransformComponent>
        <svg
          width={layout.width}
          height={layout.height}
          style={{ overflow: "visible" }}
        >
          <Background width={layout.width} height={layout.height} />

          <defs>
            <marker
              id="arrow-heritage"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#4CAF50" />
            </marker>

            <marker
              id="arrow-dialogue"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#F1C232" />
            </marker>

            <marker
              id="arrow-tension"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#D32F2F" />
            </marker>
          </defs>

          <Clusters
            authors={authors}
            concepts={concepts}
            selectedConstellationId={selectedConstellationId}
            setSelectedItem={setSelectedItem}
            dimConstellationIds={matchingConstellationIds}
          />

          {relations.map((relation, i) => {
            const source = getAuthor(
              relation.source
            );

            const target = getAuthor(
              relation.target
            );

            if (!source || !target) return null;

            const style =
              getLineStyle(relation);

            return (
              <path
                key={i}
                d={getPathD(relation, source, target)}
                fill="none"
                stroke={style.color}
                strokeWidth={style.width}
                strokeDasharray={style.dash}
                opacity={style.opacity}
                markerEnd={`url(#arrow-${relation.type})`}
                style={{
                  cursor: "pointer",
                  transition: "all .25s",
                }}
                onMouseEnter={() =>
                  setHoveredRelation(
                    relation
                  )
                }
                onMouseLeave={() =>
                  setHoveredRelation(null)
                }
                onClick={() =>
                  setSelectedItem({
                    type: "relation",
                    data: {
                      ...relation,
                      sourceName:
                        source.name,
                      targetName:
                        target.name,
                    },
                  })
                }
              />
            );
          })}

          <Concepts
            concepts={concepts}
            selectedConcept={
              selectedConcept
            }
            setSelectedItem={
              setSelectedItem
            }
            dimIds={conceptDimIds}
          />

          <Authors
            authors={authors}
            selectedAuthor={
              selectedAuthor
            }
            setSelectedItem={
              setSelectedItem
            }
            dimIds={authorDimIds}
          />
        </svg>
      </TransformComponent>
    </TransformWrapper>
  );
}
