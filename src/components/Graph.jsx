import Background from "../layers/Background";
export default function Graph() {
  const zones = [
    {
      name: "Durkheimiens",
      color: "#8FBCEB",
      path: "M70 180 C40 120,120 70,210 100 C280 120,300 200,240 250 C170 290,90 270,70 180 Z",
      labelX: 90,
      labelY: 120,
    },
    {
      name: "Bourdieusiens",
      color: "#BDD97A",
      path: "M300 390 C260 320,340 250,470 280 C570 300,600 420,500 500 C420 540,320 500,300 390 Z",
      labelX: 340,
      labelY: 320,
    },
    {
      name: "Wébériens",
      color: "#E6A1A1",
      path: "M620 170 C600 90,700 60,810 110 C860 150,850 240,760 260 C670 270,620 240,620 170 Z",
      labelX: 660,
      labelY: 120,
    },
  ];

  const nodes = [
    { name: "Durkheim", x: 165, y: 185, color: "#2E6DB4" },
    { name: "Bourdieu", x: 420, y: 405, color: "#86B53F" },
    { name: "Weber", x: 720, y: 180, color: "#B53B3B" },
  ];

    return (
      <svg
        width="950"
        height="620"
   style={{
    border: "1px solid #ddd",
    borderRadius: "10px",
  }}
      >
<Background />
      {/* texture légère */}
      <defs>
        <filter id="shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
        </filter>
      </defs>

      {zones.map((z) => (
        <g key={z.name}>
          <path
            d={z.path}
            fill={z.color}
            opacity="0.28"
            stroke={z.color}
            strokeWidth="2"
          />
          <text
            x={z.labelX}
            y={z.labelY}
            fontSize="22"
            fontWeight="600"
            fill="#444"
          >
            {z.name}
          </text>
        </g>
      ))}

      {nodes.map((n) => (
        <g key={n.name} filter="url(#shadow)">
          <circle
            cx={n.x}
            cy={n.y}
            r="24"
            fill={n.color}
            stroke="white"
            strokeWidth="3"
          />
          <text
            x={n.x}
            y={n.y + 42}
            textAnchor="middle"
            fontSize="16"
            fill="#333"
          >
            {n.name}
          </text>
        </g>
      ))}
    </svg>
  );
}
