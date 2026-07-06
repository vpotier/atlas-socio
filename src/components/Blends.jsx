import { clusters } from "../engine/clusters";

export default function Blends() {
  const list = Object.values(clusters);

  return (
    <>
      {list.map((cluster) =>
        (cluster.blend || []).map((targetId) => {
          const target = list.find((c) => c.id === targetId);

          if (!target) return null;

          return (
            <path
              key={`${cluster.id}-${target.id}`}
              d={`
                M ${cluster.center.x} ${cluster.center.y}
                Q ${(cluster.center.x + target.center.x) / 2}
                  ${(cluster.center.y + target.center.y) / 2 - 80}
                  ${target.center.x}
                  ${target.center.y}
              `}
              stroke="#999"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              opacity="0.15"
            />
          );
        })
      )}
    </>
  );
}
