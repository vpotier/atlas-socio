import { constellations } from "../engine/constellations";

// Calcule un halo (cercle englobant) par constellation à partir des
// positions réelles de SES AUTEURS *ET* DE SES CONCEPTS, avec une marge
// de confort — sinon un concept positionné plus loin que ses auteurs
// déborde visuellement du halo censé le contenir.
export default function Clusters({ authors, concepts }) {
  const groups = {};

  authors.forEach((author) => {
    if (!groups[author.constellation]) {
      groups[author.constellation] = [];
    }

    groups[author.constellation].push(author);
  });

  concepts.forEach((concept) => {
    if (!concept.constellation) return;

    if (!groups[concept.constellation]) {
      groups[concept.constellation] = [];
    }

    groups[concept.constellation].push(concept);
  });

  return (
    <>
      {Object.entries(groups).map(([constellationId, members]) => {
        const meta = constellations[constellationId];

        if (!meta) return null;

        const cx =
          members.reduce((sum, m) => sum + m.x, 0) /
          members.length;

        const cy =
          members.reduce((sum, m) => sum + m.y, 0) /
          members.length;

        const radius =
          Math.max(
            ...members.map((m) =>
              Math.hypot(m.x - cx, m.y - cy)
            )
          ) + 90;

        return (
          <g key={constellationId}>
            <circle
              cx={cx}
              cy={cy}
              r={radius}
              fill={meta.color}
              opacity="0.08"
            />

            <circle
              cx={cx}
              cy={cy}
              r={radius}
              fill="none"
              stroke={meta.color}
              strokeWidth="1"
              opacity="0.25"
            />

            <text
              x={cx}
              y={cy - radius + 24}
              textAnchor="middle"
              fontSize="16"
              fill={meta.color}
              opacity="0.75"
              style={{
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              {meta.label}
            </text>
          </g>
        );
      })}
    </>
  );
}
