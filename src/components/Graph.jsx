import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Background from "../layers/Background";
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
  setSelectedRelation,
}) {
  const [hoveredRelation, setHoveredRelation] = useState(null);

  const getAuthor = (id) => authors.find((a) => a.id === id);

  const conceptRelatedAuthors = selectedConcept
    ? new Set(selectedConcept.authors)
    : null;

  // 🔥 FOCUS LOGIC
  const visibleRelations = relations.filter((r) => {
    if (!selectedAuthor) return true;

    return (
      r.source === selectedAuthor.id ||
      r.target === selectedAuthor.id
    );
  });

  const getLineStyle = (r) => {
    let color;
    let width;
    let dash = "";

    switch (r.type) {
      case "heritage":
        color = "#4CAF50";
        width = 2.5;
        break;

      case "dialogue":
        color = "#F1C232";
        width = 2.5;
        break;

      case "tension":
        color = "#D32F2F";
        width = 3;
        dash = "6 4";
        break;

      default:
        return null;
    }

    const isActive =
      selectedAuthor &&
      (r.source === selectedAuthor.id ||
        r.target === selectedAuthor.id);

    const highlighted = isActive;

    return {
      color,
      width,
      dash,
      opacity: highlighted ? 0.95 : 0.15,
    };
  };

  return (
    <>
      <Toolbar />

      {hoveredRelation && (
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 20,
            background: "#fff",
            border: "1px solid #ddd",
            padding: "10px 12px",
            fontSize: 13,
            zIndex: 10,
          }}
        >
          <strong>{hoveredRelation.type}</strong>
          <div>
            {hoveredRelation.source} → {hoveredRelation.target}
          </div>
        </div>
      )}

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
            <Blends />

            {visibleRelations.map((r, i) => {
              const a = getAuthor(r.source);
              const b = getAuthor(r.target);
              if (!a || !b) return null;

              const style = getLineStyle(r);
              if (!style) return null;

              const isHovered =
                hoveredRelation?.source === r.source &&
                hoveredRelation?.target === r.target;

              return (
                <line
                  key={i}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke={style.color}
                  strokeWidth={isHovered ? style.width + 1 : style.width}
                  strokeDasharray={style.dash}
                  opacity={isHovered ? 1 : style.opacity}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHoveredRelation(r)}
                  onMouseLeave={() => setHoveredRelation(null)}
                  onClick={() => setSelectedRelation?.(r)}
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
