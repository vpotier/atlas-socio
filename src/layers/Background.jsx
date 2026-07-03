export default function Background() {
  return (
    <g>
      {/* Fond */}
      <rect
        x="0"
        y="0"
        width="950"
        height="620"
        fill="#f8f8f5"
      />

      {/* Grille légère */}
      {[...Array(19)].map((_, i) => (
        <line
          key={"v" + i}
          x1={i * 50}
          y1="0"
          x2={i * 50}
          y2="620"
          stroke="#ece9e2"
          strokeWidth="1"
        />
      ))}

      {[...Array(13)].map((_, i) => (
        <line
          key={"h" + i}
          x1="0"
          y1={i * 50}
          x2="950"
          y2={i * 50}
          stroke="#ece9e2"
          strokeWidth="1"
        />
      ))}
    </g>
  );
}
