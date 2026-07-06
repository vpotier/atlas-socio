import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Background from "../layers/Background";
import Territories from "./Territories";
import Authors from "./Authors";
import Concepts from "./Concepts";
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

  const getLineStyle = (r, activeId) => {
    const isActive =
      activeId &&
      (r.source === activeId || r.target === activeId);

    switch (r.type) {
      case "heritage":
        return {
          color: isActive ? "#4CAF50" : "#9ccc9c",
          width: isActive ? 2.5 : 1.5,
        };
      case "dialogue":
        return {
          color: isActive ? "#f1c232" : "#e6d48a",
          width: isActive ? 2.5 : 1.5,
        };
      case "tension":
        return {
          color: isActive ? "#d32f2f" : "#e0a0a0",
          width: isActive ? 2.5 : 1.5,
          dash: "6 4",
        };
      default:
        return {
          color: "#aaa",
          width: 1,
        };
    }
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

            {/* RELATIONS */}
            {relations.map((r, i) => {
              const a = getAuthor(r.source);
              const b = getAuthor(r.target);
              if (!a || !b) return null;

              const style = getLineStyle(r, selectedAuthor?.id);

              const dim =
                selectedAuthor &&
                !(
                  r.source === selectedAuthor.id ||
                  r.target === selectedAuthor.id
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
                  strokeDasharray={style.dash || ""}
                  opacity={dim ? 0.15 : 0.7}
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
            />
          </svg>
        </TransformComponent>
      </TransformWrapper>
    </>
  );
}
