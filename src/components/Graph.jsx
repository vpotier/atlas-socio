import { useMemo, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Background from "../layers/Background";
import Clusters from "./Clusters";
import Authors from "./Authors";
import Concepts from "./Concepts";

import { authors } from "../data/authors";
import { concepts } from "../data/concepts";
import { relations } from "../data/relations";

export default function Graph({
  selectedItem,
  setSelectedItem,
}) {
  const [hoveredRelation, setHoveredRelation] = useState(null);

  const selectedAuthor =
    selectedItem?.type === "author"
      ? selectedItem.data
      : null;

  const selectedConcept =
    selectedItem?.type === "concept"
      ? selectedItem.data
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

  const getAuthor = (id) =>
    authors.find((a) => a.id === id);

  const getLineStyle = (relation) => {
    let color = "#999";
    let width = 2;
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

  return (
    <TransformWrapper
      initialScale={1}
      minScale={0.5}
      maxScale={3}
      centerOnInit
    >
      <TransformComponent>
        <svg
          width="1100"
          height="700"
        >
          <Background />

          <Clusters />

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
              <line
                key={i}
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke={style.color}
                strokeWidth={style.width}
                strokeDasharray={style.dash}
                opacity={style.opacity}
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
          />

          <Authors
            authors={authors}
            selectedAuthor={
              selectedAuthor
            }
            setSelectedItem={
              setSelectedItem
            }
            dimIds={
              neighbourIds ||
              conceptAuthors
            }
          />
        </svg>
      </TransformComponent>
    </TransformWrapper>
  );
}
