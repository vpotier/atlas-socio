import { concepts } from "../data/concepts";

export default function Concepts({ selectedConcept, setSelectedConcept }) {
  return (
    <>
      {concepts.map((c) => {
        const isActive = selectedConcept?.id === c.id;

        return (
          <g
            key={c.id}
            onClick={() => setSelectedConcept(c)}
            style={{ cursor: "pointer" }}
          >
            <circle
              cx={c.x}
              cy={c.y}
              r={isActive ? 12 : 9}
              fill={isActive ? "#111" : "#444"}
              opacity={isActive ? 1 : 0.6}
            />

            <text
              x={c.x + 14}
              y={c.y + 4}
              fontSize="12"
              fill={isActive ? "#111" : "#444"}
            >
              {c.label}
            </text>
          </g>
        );
      })}
    </>
  );
}
