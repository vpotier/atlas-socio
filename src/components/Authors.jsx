import { authors as authorData } from "../data/authors";

export default function Authors({
  selectedAuthor,
  setSelectedAuthor,
  dimByConcept,
}) {
  return (
    <>
      {authorData.map((a) => {
        const isSelected = selectedAuthor?.id === a.id;
        const isDimmed =
          dimByConcept && !dimByConcept.has(a.id);

        return (
          <g
            key={a.id}
            onClick={() => setSelectedAuthor(a)}
            style={{ cursor: "pointer" }}
          >
            <circle
              cx={a.x}
              cy={a.y}
              r="24"
              fill={a.color}
              opacity={isDimmed ? 0.15 : 1}
              stroke={isSelected ? "#111" : "#fff"}
              strokeWidth="3"
            />

            <text
              x={a.x}
              y={a.y + 40}
              textAnchor="middle"
              fontSize="14"
              fill="#333"
              opacity={isDimmed ? 0.2 : 1}
            >
              {a.name}
            </text>
          </g>
        );
      })}
    </>
  );
}
