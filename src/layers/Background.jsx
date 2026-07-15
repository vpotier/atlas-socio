// Fond uni (papier clair), étendu largement au-delà du contenu réel
// pour donner une impression de carte "infinie" quand on drag librement
// au-delà des bords du graphe.
export default function Background({ width, height }) {
  const margin = 4000;

  return (
    <rect
      x={-margin}
      y={-margin}
      width={width + margin * 2}
      height={height + margin * 2}
      fill="#FFFDFA"
    />
  );
}
