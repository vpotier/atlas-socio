export default function Graph() {
  const zones = [
    {
      name: "Durkheimiens",
      x: 40,
      y: 90,
      width: 240,
      height: 180,
      color: "#dbe9f6",
    },
    {
      name: "Bourdieusiens",
      x: 270,
      y: 250,
      width: 280,
      height: 220,
      color: "#e9f3d2",
    },
    {
      name: "Wébériens",
      x: 560,
      y: 70,
      width: 260,
      height: 180,
      color: "#f8dddd",
    },
  ];

  const nodes = [
    { name: "Durkheim", x: 160, y: 180, color: "#4F81BD" },
    { name: "Bourdieu", x: 410, y: 360, color: "#9BBB59" },
    { name: "Weber", x: 680, y: 160, color: "#C0504D" },
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
      {zones.map((z) => (
        <g key={z.name}>
          <rect
            x={z.x}
            y={z.y}
            width={z.width}
            height={z.height}
            rx="20"
            fill={z.color}
            opacity="0.6"
          />
          <text
            x={z.x + 15}
            y={z.y + 28}
            fontSize="20"
            fontWeight="bold"
            fill="#444"
          >
            {z.name}
          </text>
        </g>
      ))}

      {nodes.map((node) => (
        <g key={node.name}>
          <circle
            cx={node.x}
            cy={node.y}
            r="26"
            fill={node.color}
            stroke="white"
            strokeWidth="3"
          />
          <text
            x={node.x}
            y={node.y + 45}
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
