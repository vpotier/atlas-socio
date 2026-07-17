import { useState } from "react";

export default function Authors({
  authors,
  selectedAuthor,
  setSelectedItem,
  dimIds,
}) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      {authors.map((author) => {
        const isSelected =
          selectedAuthor?.id === author.id;

        const isHovered = hoveredId === author.id;

        const isDimmed =
          dimIds && !dimIds.has(author.id);

        return (
          <g
            key={author.id}
            id={author.id}
            style={{
              cursor: "pointer",
              transition: "all .25s",
            }}
            onMouseEnter={() => setHoveredId(author.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() =>
              setSelectedItem({
                type: "author",
                data: author,
              })
            }
          >
            <circle
              cx={author.x}
              cy={author.y}
              r={
                (isSelected ? 25 : isHovered ? 22 : 20) +
                Math.min(author.degree ?? 0, 20) * 0.7
              }
              fill={author.color}
              stroke={isSelected ? "#1b3f66" : "#ede6d9"}
              strokeWidth={isSelected ? 4 : 2}
              opacity={isDimmed ? 0.18 : 1}
              style={{
                transition: "all .2s",
                filter: isHovered
                  ? "brightness(1.1)"
                  : "none",
              }}
            />

            <text
              x={author.x}
              y={author.y + 38 + Math.min(author.degree ?? 0, 20) * 0.7}
              textAnchor="middle"
              fontSize="14.5"
              fontFamily="Inter, sans-serif"
              fontWeight={isSelected || isHovered ? 600 : 500}
              fill="#2b2620"
              opacity={isDimmed ? 0.25 : 1}
              style={{
                userSelect: "none",
                pointerEvents: "none",
                transition: "font-weight .2s",
              }}
            >
              {author.name}
            </text>
          </g>
        );
      })}
    </>
  );
}
