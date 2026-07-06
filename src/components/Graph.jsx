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
  const getAuthor = (id) => authors.find((a) => a.id === id);

  const conceptRelatedAuthors = selectedConcept
    ? new Set(selectedConcept.authors)
    : null;

  const getLineStyle = (relation) => {
    const activeAuthorId = selectedAuthor?.id;

    const isAuthorActive =
      activeAuthorId &&
      (relation.source === activeAuthorId ||
        relation.target === activeAuthorId);

    const isConceptActive =
      selectedConcept &&
      conceptRelatedAuthors &&
      (conceptRelatedAuthors.has(relation.source) ||
        conceptRelatedAuthors.has(relation.target));

    let color = "#b5b5b5";
    let width = 1.5;
    let opacity = 0.12;
    let dash = "";

    switch (relation.type) {
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
        break;
    }

    if (isAuthorActive || isConceptActive) {
      opacity = 0.85;
    }

    return {
      color,
      width,
      opacity,
      dash,
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

            {relations.map((relation, index) => {
              const source = getAuthor(relation.source);
              const target = getAuthor(relation.target);

              if (!source || !target) return null;

              const style = getLineStyle(relation);

              return (
                <line
                  key={index}
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
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
              dimByConcept={conceptRelatedAuthors}
            />
          </svg>
        </TransformComponent>
      </TransformWrapper>
    </>
  );
}
