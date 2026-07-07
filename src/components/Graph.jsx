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

  const getLineStyle = (relation) => {
    let color = "#999";
    let width = 1.5;
    let dash = "";
    let opacity = 0.18;

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

    const selected =
      selectedRelation &&
      selectedRelation.source === relation.source &&
      selectedRelation.target === relation.target;

    const authorActive =
      selectedAuthor &&
      (relation.source === selectedAuthor.id ||
        relation.target === selectedAuthor.id);

    const hovered =
      hoveredRelation &&
      hoveredRelation.source === relation.source &&
      hoveredRelation.target === relation.target;

    if (selected || authorActive || hovered) {
      opacity = 1;
      width += 1;
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
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <Background />

          <Clusters />

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
                style={{
                  cursor: "pointer",
                  transition: "all .2s",
                }}
                onMouseEnter={() =>
                  setHoveredRelation(relation)
                }
                onMouseLeave={() =>
                  setHoveredRelation(null)
                }
                onClick={() => {
                  setSelectedAuthor(null);

                  setSelectedRelation({
                    ...relation,
                    sourceName: source.name,
                    targetName: target.name,
                  });
                }}
              />
            );
          })}

          <Concepts
            selectedConcept={selectedConcept}
            setSelectedConcept={(concept) => {
              setSelectedRelation(null);
              setSelectedConcept(concept);
            }}
          />

          <Authors
            selectedAuthor={selectedAuthor}
            setSelectedAuthor={(author) => {
              setSelectedRelation(null);
              setSelectedAuthor(author);
            }}
            dimByConcept={conceptRelatedAuthors}
          />
        </svg>
      </TransformComponent>
    </TransformWrapper>
  );
}
