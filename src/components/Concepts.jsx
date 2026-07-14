import { useState } from "react";

export default function Concepts({
  concepts,
  selectedConcept,
  setSelectedItem,
  dimIds,
}) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      {concepts.map((concept) => {
        const isSelected =
          selectedConcept?.id === concept.id;

        const isHovered = hoveredId === concept.id;

        const isDimmed =
          dimIds && !dimIds.has(concept.id);

        return (
          <g
            key={concept.id}
            style={{
              cursor: "pointer",
              transition: "all .25s",
            }}
            onMouseEnter={() => setHoveredId(concept.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() =>
              setSelectedItem({
                type: "concept",
                data: concept,
              })
            }
          >
            <circle
              cx={concept.x}
              cy={concept.y}
              r={
                isSelected
                  ? 12
                  : isHovered
                  ? 11
                  : 9
              }
              fill={isSelected ? "#1b3f66" : "#6b3f2a"}
              opacity={
                isDimmed
                  ? 0.1
                  : isSelected
                  ? 1
                  : isHovered
                  ? 0.85
                  : 0.55
              }
              style={{
                transition: "all .2s",
              }}
            />

            <text
              x={concept.x + 14}
              y={concept.y + 4}
              fontSize="12"
              fontFamily="Inter, sans-serif"
              fontWeight={isHovered ? 600 : 400}
              fill={isSelected ? "#1b3f66" : "#2b2620"}
              opacity={isDimmed ? 0.15 : 1}
              style={{
                userSelect: "none",
                pointerEvents: "none",
                transition: "opacity .25s, font-weight .2s",
              }}
            >
              {concept.label}
            </text>
          </g>
        );
      })}
    </>
  );
}
