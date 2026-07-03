export default function Graph() {
  const nodes = [
    { name: "Durkheim", x: 180, y: 220, color: "#4F81BD" },
    { name: "Weber", x: 500, y: 180, color: "#C0504D" },
    { name: "Bourdieu", x: 340, y: 380, color: "#9BBB59" },
  ];

  return (
    <svg
      width="900"
      height="600"
      style={{
        background: "#fafafa",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <text
        x="30"
        y="40"
        fontSize="28"
        fontWeight="bold"
      >
        Atlas de la théorie sociologique
      </text>

      {nodes.map((node) => (
        <g key={node.name}>
          <circle
            cx={node.x}
            cy={node.y}
            r="28"
            fill={node.color}
          />
          <text
            x={node.x}
            y={node.y + 50}
            textAnchor="middle"
            fontSize="16"
          >
            {node.name}
          </text>
        </g>
      ))}
    </svg>
  );
}
