import * as d3 from "d3";

export const CANVAS_WIDTH = 1800;
export const CANVAS_HEIGHT = 950;

// Calcule les positions des auteurs et des concepts avec un algorithme
// force-directed : les auteurs liés se rapprochent, les nœuds se repoussent
// pour éviter les chevauchements, et chaque constellation est attirée
// vers un centre qui lui est propre (répartis en cercle) pour former
// des zones visuellement cohérentes.
export function computeLayout(authors, concepts, relations) {
  const center = { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2 };

  const constellationIds = [
    ...new Set(authors.map((a) => a.constellation)),
  ];

  const ringRadius =
    Math.min(CANVAS_WIDTH, CANVAS_HEIGHT) / 2 - 160;

  const constellationCenters = {};

  constellationIds.forEach((id, i) => {
    const angle =
      (i / constellationIds.length) * 2 * Math.PI;

    constellationCenters[id] = {
      x: center.x + ringRadius * Math.cos(angle),
      y: center.y + ringRadius * Math.sin(angle),
    };
  });

  const authorNodes = authors.map((a) => ({
    id: a.id,
    kind: "author",
    constellation: a.constellation,
    x: center.x + (Math.random() - 0.5) * 200,
    y: center.y + (Math.random() - 0.5) * 200,
  }));

  const authorConstellation = new Map(
    authors.map((a) => [a.id, a.constellation])
  );

  const conceptNodes = concepts.map((c) => ({
    id: `concept:${c.id}`,
    kind: "concept",
    constellation:
      authorConstellation.get(c.authors[0]) ?? null,
    x: center.x + (Math.random() - 0.5) * 200,
    y: center.y + (Math.random() - 0.5) * 200,
  }));

  const nodes = [...authorNodes, ...conceptNodes];

  const links = [];

  relations.forEach((r) => {
    links.push({
      source: r.source,
      target: r.target,
      kind: "relation",
    });
  });

  concepts.forEach((c) => {
    c.authors.forEach((authorId) => {
      links.push({
        source: `concept:${c.id}`,
        target: authorId,
        kind: "concept-link",
      });
    });
  });

  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink(links)
        .id((d) => d.id)
        .distance((l) =>
          l.kind === "concept-link" ? 70 : 150
        )
        .strength((l) =>
          l.kind === "concept-link" ? 0.9 : 0.25
        )
    )
    .force("charge", d3.forceManyBody().strength(-220))
    .force(
      "collide",
      d3
        .forceCollide()
        .radius((d) => (d.kind === "author" ? 48 : 30))
    )
    .force(
      "clusterX",
      d3
        .forceX((d) => {
          const c = constellationCenters[d.constellation];
          return c ? c.x : center.x;
        })
        .strength(0.15)
    )
    .force(
      "clusterY",
      d3
        .forceY((d) => {
          const c = constellationCenters[d.constellation];
          return c ? c.y : center.y;
        })
        .strength(0.15)
    )
    .stop();

  simulation.tick(400);

  const authorPositions = new Map();
  const conceptPositions = new Map();

  nodes.forEach((n) => {
    if (n.kind === "author") {
      authorPositions.set(n.id, { x: n.x, y: n.y });
    } else {
      conceptPositions.set(n.id.replace("concept:", ""), {
        x: n.x,
        y: n.y,
      });
    }
  });

  return {
    authorPositions,
    conceptPositions,
    constellationCenters,
  };
}
