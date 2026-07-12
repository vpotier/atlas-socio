import * as d3 from "d3";

// Générateur pseudo-aléatoire déterministe (seed fixe) : garantit que le
// layout produit exactement le même résultat à chaque chargement, au
// lieu de dépendre de Math.random() qui change à chaque reload.
function createSeededRandom(seed) {
  let s = seed;

  return function () {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const random = createSeededRandom(42);

export const CANVAS_WIDTH = 1800;
export const CANVAS_HEIGHT = 950;

// Espace de travail utilisé pendant la simulation (large pour laisser
// aux constellations la place de se répartir sans se chevaucher).
const SIM_WIDTH = 2000;
const SIM_HEIGHT = 1300;

// Marge laissée autour du contenu final calculé.
const PADDING = 120;

// Calcule les positions des auteurs et des concepts avec un algorithme
// force-directed : les auteurs liés se rapprochent, les nœuds (et leurs
// labels) se repoussent pour éviter les chevauchements, et chaque
// constellation est attirée vers un centre qui lui est propre (répartis
// en cercle) pour former des zones visuellement cohérentes. Le canevas
// final est dimensionné exactement sur l'étendue réelle du résultat,
// pour éviter à la fois le vide et les débordements.
export function computeLayout(authors, concepts, relations) {
  const center = { x: SIM_WIDTH / 2, y: SIM_HEIGHT / 2 };

  const constellationIds = [
    ...new Set(authors.map((a) => a.constellation)),
  ];

  const ringRadius =
    Math.min(SIM_WIDTH, SIM_HEIGHT) / 2 - 100;

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
    x: center.x + (random() - 0.5) * 300,
    y: center.y + (random() - 0.5) * 300,
  }));

  const authorConstellation = new Map(
    authors.map((a) => [a.id, a.constellation])
  );

  const conceptNodes = concepts.map((c) => ({
    id: `concept:${c.id}`,
    kind: "concept",
    labelLength: c.label.length,
    constellation:
      authorConstellation.get(c.authors[0]) ?? null,
    x: center.x + (random() - 0.5) * 300,
    y: center.y + (random() - 0.5) * 300,
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
          l.kind === "concept-link" ? 95 : 190
        )
        .strength((l) =>
          l.kind === "concept-link" ? 0.9 : 0.35
        )
    )
    .force("charge", d3.forceManyBody().strength(-420))
    .force(
      "collide",
      d3
        .forceCollide()
        .radius((d) =>
          d.kind === "author"
            ? 75
            // Les labels de concepts s'affichent à droite du point ;
            // on approxime leur largeur avec le nombre de caractères.
            : 40 + Math.min(d.labelLength ?? 10, 26) * 3
        )
        .strength(0.9)
    )
    .force(
      "clusterX",
      d3
        .forceX((d) => {
          const c = constellationCenters[d.constellation];
          return c ? c.x : center.x;
        })
        .strength(0.1)
    )
    .force(
      "clusterY",
      d3
        .forceY((d) => {
          const c = constellationCenters[d.constellation];
          return c ? c.y : center.y;
        })
        .strength(0.1)
    )
    .stop();

  simulation.tick(500);

  // Recadrage : on calcule l'étendue réelle du résultat et on
  // dimensionne le canevas final dessus, pour éliminer le vide
  // et garder tout le monde visible sans chevauchement de halo.
  const xs = nodes.map((n) => n.x);
  const ys = nodes.map((n) => n.y);

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  nodes.forEach((n) => {
    n.x = n.x - minX + PADDING;
    n.y = n.y - minY + PADDING;
  });

  const width = maxX - minX + PADDING * 2;
  const height = maxY - minY + PADDING * 2;

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
    width,
    height,
  };
}
