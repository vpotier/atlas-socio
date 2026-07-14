// Fond en grille tuilée (motif SVG répété), étendu largement au-delà
// du contenu réel pour donner une impression de carte "infinie" quand
// on drag librement au-delà des bords du graphe.
export default function Background({ width, height }) {
  const step = 50;
  const margin = 4000;

  return (
    <g>
      <defs>
        <pattern
          id="grid-pattern"
          width={step}
          height={step}
          patternUnits="userSpaceOnUse"
        >
          <rect width={step} height={step} fill="#ede6d9" />

          <path
            d={`M ${step} 0 L 0 0 0 ${step}`}
            fill="none"
            stroke="#ddd0b8"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect
        x={-margin}
        y={-margin}
        width={width + margin * 2}
        height={height + margin * 2}
        fill="url(#grid-pattern)"
      />
    </g>
  );
}
