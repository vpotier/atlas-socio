import { constellations } from "../engine/constellations";

// Calcule un halo (cercle englobant) par constellation à partir des
// positions réelles de SES AUTEURS *ET* DE SES CONCEPTS. Cliquable
// (sélectionne la constellation), et s'estompe si un filtre actif
// (axe théorique ou thème) ne la concerne pas.
export default function Clusters({
  authors,
  concepts,
  selectedConstellationId,
  setSelectedItem,
  dimConstellationIds,
}) {
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

        const isSelected =
          selectedConstellationId === constellationId;

        const isDimmed =
          dimConstellationIds &&
          !dimConstellationIds.has(constellationId);

        const authorMembers = authors.filter(
          (a) => a.constellation === constellationId
        );

        return (
          <g
            key={constellationId}
            style={{ cursor: "pointer" }}
            onClick={() =>
              setSelectedItem({
                type: "constellation",
                data: {
                  id: constellationId,
                  label: meta.label,
                  color: meta.color,
                  period: meta.period,
                  definition: meta.definition,
                  disciplines: meta.disciplines,
                  members: authorMembers,
                },
              })
            }
          >
            <circle
              cx={cx}
              cy={cy}
              r={radius}
              fill={meta.color}
              opacity={
                isDimmed ? 0.03 : isSelected ? 0.22 : 0.08
              }
              style={{ transition: "opacity .25s" }}
            />

            <circle
              cx={cx}
              cy={cy}
              r={radius}
              fill="none"
              stroke={meta.color}
              strokeWidth={isSelected ? 2.5 : 1}
              opacity={isDimmed ? 0.08 : isSelected ? 0.7 : 0.25}
              style={{ transition: "opacity .25s" }}
            />

            {(() => {
              const labelY = cy - radius + 26;
              const estWidth = meta.label.length * 9.5 + 28;

              return (
                <>
                  <rect
                    x={cx - estWidth / 2}
                    y={labelY - 18}
                    width={estWidth}
                    height={30}
                    rx={15}
                    fill="var(--color-paper)"
                    stroke={meta.color}
                    strokeWidth="1"
                    opacity={isDimmed ? 0.1 : isSelected ? 0.95 : 0.8}
                    style={{ transition: "opacity .25s" }}
                  />

                  <text
                    x={cx}
                    y={labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="17"
                    fontWeight={isSelected ? "bold" : 600}
                    fontFamily="var(--font-display)"
                    fill={meta.color}
                    opacity={isDimmed ? 0.15 : 1}
                    style={{
                      userSelect: "none",
                      pointerEvents: "none",
                      transition: "opacity .25s",
                    }}
                  >
                    {meta.label}
                  </text>
                </>
              );
            })()}
          </g>
        );
      })}
    </>
  );
}
