import { clusters } from "../engine/clusters";

export default function Clusters() {
  return (
    <>
      {Object.values(clusters).map((c) => (
        <g key={c.id}>
          {/* zone visuelle uniquement */}
          <circle
            cx={c.center.x}
            cy={c.center.y}
            r="140"
            fill={c.color}
            opacity="0.08"
          />

          {/* contour léger */}
          <circle
            cx={c.center.x}
            cy={c.center.y}
            r="140"
            fill="none"
            stroke={c.color}
            strokeWidth="1"
            opacity="0.2"
          />

          {/* label */}
          <text
            x={c.center.x}
            y={c.center.y - 150}
            textAnchor="middle"
            fontSize="16"
            fill={c.color}
            opacity="0.7"
          >
            {c.label}
          </text>
        </g>
      ))}
    </>
  );
}
