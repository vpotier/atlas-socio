import { useState } from "react";

// Découpe un libellé de concept en une ou deux lignes. En dessous du
// seuil, ou s'il ne contient qu'un seul mot (rien à équilibrer), le
// libellé reste sur une seule ligne. Au-delà, on cherche la coupure sur
// un espace qui équilibre le mieux les deux lignes en longueur, plutôt
// que de couper au milieu d'un mot.
const WRAP_THRESHOLD = 16;

function splitLabel(label) {
  if (label.length <= WRAP_THRESHOLD) return [label];

  const words = label.split(" ");
  if (words.length <= 1) return [label];

  let bestSplit = 1;
  let bestDiff = Infinity;

  for (let i = 1; i < words.length; i++) {
    const line1 = words.slice(0, i).join(" ");
    const line2 = words.slice(i).join(" ");
    const diff = Math.abs(line1.length - line2.length);

    if (diff < bestDiff) {
      bestDiff = diff;
      bestSplit = i;
    }
  }

  return [
    words.slice(0, bestSplit).join(" "),
    words.slice(bestSplit).join(" "),
  ];
}

const LINE_HEIGHT = 14;

export default function Concepts({
  concepts,
  selectedConcept,
  setSelectedItem,
  dimIds,
}) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      {concepts.map((concept) => {
        const isSelected =
          selectedConcept?.id === concept.id;

        const isHovered = hoveredId === concept.id;

        const isDimmed =
          dimIds && !dimIds.has(concept.id);

        const lines = splitLabel(concept.label);
        const textX = concept.x + 14;
        // Point de départ vertical du bloc de texte : pour une seule
        // ligne, identique au comportement précédent (y + 4). Pour deux
        // lignes, on remonte le point de départ pour que le bloc reste
        // centré verticalement sur le cercle du concept.
        const startY =
          lines.length > 1
            ? concept.y + 4 - LINE_HEIGHT / 2
            : concept.y + 4;

        return (
          <g
            key={concept.id}
            style={{
              cursor: "pointer",
              transition: "all .25s",
            }}
            onMouseEnter={() => setHoveredId(concept.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() =>
              setSelectedItem({
                type: "concept",
                data: concept,
              })
            }
          >
            <circle
              cx={concept.x}
              cy={concept.y}
              r={
                isSelected
                  ? 12
                  : isHovered
                  ? 11
                  : 9
              }
              fill={isSelected ? "#1b3f66" : "#6b3f2a"}
              opacity={
                isDimmed
                  ? 0.1
                  : isSelected
                  ? 1
                  : isHovered
                  ? 0.85
                  : 0.55
              }
              style={{
                transition: "all .2s",
              }}
            />

            <text
              x={textX}
              y={startY}
              fontSize="12.5"
              fontFamily="Inter, sans-serif"
              fontWeight={isHovered ? 600 : 400}
              fill={isSelected ? "#1b3f66" : "#2b2620"}
              opacity={isDimmed ? 0.15 : 1}
              style={{
                userSelect: "none",
                pointerEvents: "none",
                transition: "opacity .25s, font-weight .2s",
              }}
            >
              {lines.map((line, i) => (
                <tspan
                  key={i}
                  x={textX}
                  dy={i === 0 ? 0 : LINE_HEIGHT}
                >
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}
    </>
  );
}
