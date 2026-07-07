export default function Authors({
  authors,
  selectedAuthor,
  setSelectedItem,
  dimIds,
}) {
  return (
    <>
      {authors.map((author) => {
        const isSelected =
          selectedAuthor?.id === author.id;

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
              r={isSelected ? 25 : 20}
              fill={author.color}
              stroke={isSelected ? "#111" : "#fff"}
              strokeWidth={isSelected ? 4 : 2}
              opacity={isDimmed ? 0.18 : 1}
              style={{
                transition: "all .25s",
              }}
            />

            <text
              x={author.x}
              y={author.y + 38}
              textAnchor="middle"
              fontSize="13"
              fill="#333"
              opacity={isDimmed ? 0.25 : 1}
              style={{
                userSelect: "none",
                pointerEvents: "none",
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
