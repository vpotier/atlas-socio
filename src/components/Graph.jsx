import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Background from "../layers/Background";
import Territories from "./Territories";

export default function Graph() {
  const nodes = [
    { name: "Durkheim", x: 165, y: 185, color: "#2E6DB4" },
    { name: "Bourdieu", x: 420, y: 405, color: "#86B53F" },
    { name: "Weber", x: 720, y: 180, color: "#B53B3B" },
  ];

  return (
    <TransformWrapper
      initialScale={1}
      minScale={0.5}
      maxScale={3}
      centerOnInit
    >
      <TransformComponent>
        <svg
          width="950"
          height="620"
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <Background />

          <defs>
            <filter id="shadow">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="2"
                floodOpacity="0.15"
              />
            </filter>
          </defs>

          <Territories />

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
      </TransformComponent>
    </TransformWrapper>
  );
}
