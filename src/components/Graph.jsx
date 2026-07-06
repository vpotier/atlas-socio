import { useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Background from "../layers/Background";
import Territories from "./Territories";
import Authors from "./Authors";
import Concepts from "./Concepts";
import Clusters from "./Clusters";
import Blends from "./Blends";
import Toolbar from "./Toolbar";

import { relations } from "../data/relations";
import { authors } from "../data/authors";

export default function Graph({
  selectedAuthor,
  setSelectedAuthor,
  selectedConcept,
  setSelectedConcept,
}) {
  const getAuthor = (id) =>
    authors.find((a) => a.id === id);

  const conceptRelatedAuthors = selectedConcept
    ? new Set(selectedConcept.authors)
    : null;

  const getLineStyle = (r, activeAuthor, activeConcept) => {
    const isActive =
      activeAuthor &&
      (r.source === activeAuthor || r.target === activeAuthor);

    const isConceptActive =
      activeConcept &&
      conceptRelatedAuthors &&
      (conceptRelatedAuthors.has(r.source) ||
        conceptRelatedAuthors.has(r.target));

    let color = "#aaa";
    let width = 1;
    let opacity = 0.12;

    if (isActive || isConceptActive) {
      opacity = 0.7;

      switch (r.type) {
        case "heritage":
          color = "#4CAF50";
          width = 2.5;
          break;
        case "dialogue":
          color = "#f1c232";
          width = 2.5;
          break;
        case "tension":
          color = "#d32f2f";
          width = 2.5;
          break;
      }
    }

    return {
      color,
      width,
      opacity,
      dash: r.type === "tension" ? "6 4" : "",
    };
  };

  return (
    <>
      <Toolbar />

      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={3}
        centerOnInit
      >
        <TransformComponent>
          <svg width="1100" height="700">
            <Background />

            <defs>
              <filter id="shadow">
                <feDropShadow
                  dx="0"
                  dy="2"
                  stdDeviation="2"
                  floodOpacity="0.15"
                />
              </filter>
            </defs>

            {/* CLUSTERS */}
            <Clusters />

            {/* ZONES HYBRIDES */}
            <Blends />

            {/* RELATIONS */}
            {relations.map((r, i) => {
              const a = getAuthor(r.source);
              const b = getAuthor(r.target);
              if (!a || !b) return null;

              const style = getLineStyle(
                r,
                selectedAuthor?.id,
                selectedConcept?.id
              );

              return (
                <line
                  key={i}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke={style.color}
                  strokeWidth={style.width}
                  strokeDasharray={style.dash}
                  opacity={style.opacity}
                />
              );
            })}

            <Territories />

            <Concepts
              selectedConcept={selectedConcept}
              setSelectedConcept={setSelectedConcept}
            />

            <Authors
              selectedAuthor={selectedAuthor}
              setSelectedAuthor={setSelectedAuthor}
              dimByConcept={
                selectedConcept
                  ? conceptRelatedAuthors
                  : null
              }
            />
          </svg>
        </TransformComponent>
      </TransformWrapper>
    </>
  );
}
