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

    let color = "#aaa";
    let width = 1.5;
    let opacity = 0.15;
    let dash = "";

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

    if (isActive || isConceptActive) {
      opacity = 0.85;
    }

    return { color, width, opacity, dash };
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
          <svg
            width="1100"
            height="700"
            style={{ border: "1px solid #ddd", borderRadius: "10px" }}
          >
            <Background />

            <defs>
              <filter id="shadow">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
              </filter>
            </defs>

            <Clusters />
            <Blends />

            {/* RELATIONS CLICKABLES */}
            {relations.map((r, i) => {
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
                  style={{ cursor: "pointer" }}
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
