import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Background from "../layers/Background";
import Clusters from "./Clusters";
import Authors from "./Authors";
import Concepts from "./Concepts";

import { relations } from "../data/relations";
import { authors } from "../data/authors";

export default function Graph({
  selectedAuthor,
  setSelectedAuthor,
  selectedConcept,
  setSelectedConcept,
  selectedRelation,
  setSelectedRelation,
}) {
  const [hoveredRelation, setHoveredRelation] = useState(null);

  const getAuthor = (id) => authors.find((a) => a.id === id);

  const conceptRelatedAuthors = selectedConcept
    ? new Set(selectedConcept.authors)
    : null;

  const visibleRelations = relations;

  const getLineStyle = (r) => {
    let color = "#aaa";
    let width = 1.5;
    let dash = "";
    let opacity = 0.2;

    if (r.type === "heritage") {
      color = "#4CAF50";
      width = 2.5;
    }

    if (r.type === "dialogue") {
      color = "#F1C232";
      width = 2.5;
    }

    if (r.type === "tension") {
      color = "#D32F2F";
      width = 3;
      dash = "6 4";
    }

    const active = selectedAuthor &&
      (r.source === selectedAuthor.id || r.target === selectedAuthor.id);

    if (active) opacity = 0.9;

    return { color, width, dash, opacity };
  };

  return (
    <>
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
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
            }}
          >
            <Background />

            <Clusters />

            {visibleRelations.map((r, i) => {
              const a = getAuthor(r.source);
              const b = getAuthor(r.target);
              if (!a || !b) return null;

              const style = getLineStyle(r);

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

            <Concepts
              selectedConcept={selectedConcept}
              setSelectedConcept={setSelectedConcept}
            />

            <Authors
              selectedAuthor={selectedAuthor}
              setSelectedAuthor={setSelectedAuthor}
              dimByConcept={conceptRelatedAuthors}
            />
          </svg>
        </TransformComponent>
      </TransformWrapper>
    </>
  );
}
