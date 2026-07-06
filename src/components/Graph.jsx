import { useState } from "react";
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
  selectedRelation,
  setSelectedRelation,
}) {
  const [hoveredRelation, setHoveredRelation] = useState(null);

  const getAuthor = (id) => authors.find((a) => a.id === id);

  const conceptRelatedAuthors = selectedConcept
    ? new Set(selectedConcept.authors)
    : null;

  const getLineStyle = (r) => {
    const activeAuthor = selectedAuthor?.id;

    const isActive =
      activeAuthor &&
      (r.source === activeAuthor || r.target === activeAuthor);

    const isConceptActive =
      selectedConcept &&
      conceptRelatedAuthors &&
      (conceptRelatedAuthors.has(r.source) ||
        conceptRelatedAuthors.has(r.target));

    const isHighlighted = isActive || isConceptActive;

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

    return {
      color,
      width,
      dash,
      opacity: isHighlighted ? 0.9 : 0.15,
    };
  };

  return (
    <>
      <Toolbar />

      {/* TOOLTIP */}
      {hoveredRelation && (
        <div
          style={{
            position: "absolute",
            top: 90,
            left: 20,
            padding: "10px 14px",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: 8,
            fontSize: 13,
            zIndex: 20,
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
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

            <Clusters />
            <Blends />

            {relations.map((r, i) => {
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

            <Territories />

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
