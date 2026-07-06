import { authors } from "../data/authors";

export default function Authors() {
  return (
    <>
      {authors.map((a) => (
        <g key={a.id}>
          <circle
            cx={a.x}
            cy={a.y}
            r="24"
            fill={a.color}
            stroke="white"
            strokeWidth="3"
          />

          <text
            x={a.x}
            y={a.y + 42}
            textAnchor="middle"
            fontSize="16"
            fill="#333"
          >
            {a.name}
          </text>
        </g>
      ))}
    </>
  );
}
