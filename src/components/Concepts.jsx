export default function Concepts({
  concepts,
  selectedConcept,
  setSelectedItem,
}) {
  return (
    <>
      {concepts.map((concept) => {
        const isSelected =
          selectedConcept?.id === concept.id;

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
              fill={isSelected ? "#111" : "#444"}
              opacity={isSelected ? 1 : 0.65}
              style={{
                transition: "all .25s",
              }}
            />

            <text
              x={concept.x + 14}
              y={concept.y + 4}
              fontSize="12"
              fill={isSelected ? "#111" : "#444"}
              style={{
                userSelect: "none",
                pointerEvents: "none",
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
