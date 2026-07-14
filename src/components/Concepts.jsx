export default function Concepts({
  concepts,
  selectedConcept,
  setSelectedItem,
  dimIds,
}) {
  return (
    <>
      {concepts.map((concept) => {
        const isSelected =
          selectedConcept?.id === concept.id;

        const isDimmed =
          dimIds && !dimIds.has(concept.id);

        return (
          <g
            key={concept.id}
            style={{
              cursor: "pointer",
              transition: "all .25s",
            }}
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
              r={isSelected ? 12 : 9}
              fill={isSelected ? "#1b3f66" : "#6b3f2a"}
              opacity={isDimmed ? 0.1 : isSelected ? 1 : 0.55}
              style={{
                transition: "all .25s",
              }}
            />

            <text
              x={concept.x + 14}
              y={concept.y + 4}
              fontSize="12"
              fontFamily="Inter, sans-serif"
              fill={isSelected ? "#1b3f66" : "#2b2620"}
              opacity={isDimmed ? 0.15 : 1}
              style={{
                userSelect: "none",
                pointerEvents: "none",
                transition: "opacity .25s",
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
