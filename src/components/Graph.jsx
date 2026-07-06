import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Background from "../layers/Background";
import Territories from "./Territories";
import Authors from "./Authors";
import Toolbar from "./Toolbar";
import { relations } from "../data/relations";
import { authors } from "../data/authors";

export default function Graph({
  selectedAuthor,
  setSelectedAuthor,
}) {
  const getAuthor = (id) =>
    authors.find((a) => a.id === id);

  const getStyle = (type) => {
    switch (type) {
      case "heritage":
        return { color: "#6aa84f", width: 2 };
      case "dialogue":
        return { color: "#f1c232", width: 2 };
      case "tension":
        return { color: "#cc0000", width: 2, dash: "6 4" };
      default:
        return { color: "#999", width: 1 };
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

              const style = getStyle(r.type);

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
                  opacity="0.6"
                />
              );
            })}

            <Territories />

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
