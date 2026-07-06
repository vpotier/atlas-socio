export default function Authors({
  selectedAuthor,
  setSelectedAuthor,
  dimByConcept,
}) {
  const authors = [
    { id: "durkheim", name: "Durkheim", x: 140, y: 200, color: "#7fb3e8", concepts: ["anomie"] },
    { id: "weber", name: "Weber", x: 720, y: 200, color: "#d88b8b", concepts: ["action-sociale"] },
    { id: "bourdieu", name: "Bourdieu", x: 420, y: 420, color: "#b8d87d", concepts: ["habitus", "champ"] },
  ];

  return (
    <>
      {authors.map((a) => {
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
              r={isSelected ? 28 : 22}
              fill={a.color}
              opacity={isDimmed ? 0.15 : 1}
              stroke={isSelected ? "#000" : "#fff"}
              strokeWidth="2"
            />

            <text
              x={a.x}
              y={a.y + 38}
              textAnchor="middle"
              fontSize="13"
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
