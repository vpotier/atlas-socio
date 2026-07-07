import { authors } from "../data/authors";

export default function Authors({
  selectedAuthor,
  setSelectedAuthor,
  dimByConcept,
}) {
  return (
    <>
      {authors.map((a) => {
        const isSelected = selectedAuthor?.id === a.id;

        const isDimmed =
          dimByConcept && !dimByConcept.has(a.id);

        const opacity = isDimmed ? 0.15 : 1;

        const radius = isSelected ? 26 : 20;

        return (
          <g
            key={a.id}
            onClick={() => setSelectedAuthor(a)}
            style={{ cursor: "pointer" }}
          >
            <circle
              cx={a.x}
              cy={a.y}
              r={radius}
              fill={a.color}
              opacity={opacity}
              stroke={isSelected ? "#000" : "#fff"}
              strokeWidth="2"
            />

            <text
              x={a.x}
              y={a.y + 36}
              textAnchor="middle"
              fontSize="13"
              fill="#333"
              opacity={opacity}
            >
              {a.name}
            </text>
          </g>
        );
      })}
    </>
  );
}
