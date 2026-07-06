export default function Authors({
  selectedAuthor,
  setSelectedAuthor,
  dimByConcept,
}) {
  const authors = [
    {
      id: "durkheim",
      name: "Durkheim",
      x: 140,
      y: 200,
      color: "#7fb3e8",
      weight: 3,
    },
    {
      id: "weber",
      name: "Weber",
      x: 720,
      y: 200,
      color: "#d88b8b",
      weight: 3,
    },
    {
      id: "bourdieu",
      name: "Bourdieu",
      x: 420,
      y: 420,
      color: "#b8d87d",
      weight: 4,
    },
  ];

  return (
    <>
      {authors.map((a) => {
        const isSelected = selectedAuthor?.id === a.id;

        const isDimmed =
          selectedAuthor &&
          selectedAuthor.id !== a.id;

        const opacity = isSelected ? 1 : isDimmed ? 0.2 : 1;

        const stroke = isSelected ? "#000" : "#fff";

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
              stroke={stroke}
              strokeWidth="2"
            />

            <text
              x={a.x}
              y={a.y + 38}
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
