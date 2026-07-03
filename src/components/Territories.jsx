export default function Territories() {
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

  return (
    <>
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
    </>
  );
}
