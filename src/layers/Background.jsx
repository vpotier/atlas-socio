export default function Background({ width, height }) {
  const step = 50;
  const vLines = Math.ceil(width / step) + 1;
  const hLines = Math.ceil(height / step) + 1;

  return (
    <g>
      {/* Fond */}
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill="#f8f8f5"
      />

      {/* Grille légère */}
      {[...Array(vLines)].map((_, i) => (
        <line
          key={"v" + i}
          x1={i * step}
          y1="0"
          x2={i * step}
          y2={height}
          stroke="#ece9e2"
          strokeWidth="1"
        />
      ))}

      {[...Array(hLines)].map((_, i) => (
        <line
          key={"h" + i}
          x1="0"
          y1={i * step}
          x2={width}
          y2={i * step}
          stroke="#ece9e2"
          strokeWidth="1"
        />
      ))}
    </g>
  );
}
