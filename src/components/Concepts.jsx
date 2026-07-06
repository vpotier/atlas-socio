import { concepts } from "../data/concepts";

export default function Concepts() {
  return (
    <>
      {concepts.map((c) => (
        <g key={c.id}>
          <circle
            cx={c.x}
            cy={c.y}
            r="10"
            fill="#333"
            opacity="0.6"
          />

          <text
            x={c.x + 12}
            y={c.y + 4}
            fontSize="12"
            fill="#333"
          >
            {c.label}
          </text>
        </g>
      ))}
    </>
  );
}
