import { clusters } from "../engine/clusters";

export default function Blends() {
  const list = Object.values(clusters);

  return (
    <>
      {list.map((c) =>
        (c.blend || []).map((targetId) => {
          const target = list.find((v) => v.id === targetId);
          if (!target) return null;

          return (
            <path
              key={`${c.id}-${targetId}`}
              d={`
                M ${c.center.x} ${c.center.y}
                Q ${(c.center.x + target.center.x) / 2} ${(c.center.y + target.center.y) / 2 - 80}
                ${target.center.x} ${target.center.y}
              `}
              stroke="#999"
              strokeWidth="2"
              fill="none"
              opacity="0.15"
              strokeDasharray="6 6"
            />
          );
        })
      )}
    </>
  );
}
