import { authors } from "../data/authors";

export default function Authors({ selectedAuthor, setSelectedAuthor }) {
  return (
    <>
      {authors.map((a) => (
        <g
          key={a.id}
          onClick={() => setSelectedAuthor(a)}
          style={{
            cursor: "pointer",
          }}
        >
          <circle
            cx={a.x}
            cy={a.y}
            r={selectedAuthor?.id === a.id ? 28 : 24}
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
