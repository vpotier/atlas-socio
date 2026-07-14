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

const SIM_WIDTH = 2600;
const SIM_HEIGHT = 1700;
const PADDING = 140;

// ---------------------------------------------------------------------
// ÉTAGE 1 — méta-layout de type ForceAtlas2, appliqué aux CONSTELLATIONS
// elles-mêmes (pas aux auteurs individuels). On agrège le poids de toutes
// les relations qui traversent deux constellations différentes, et on
// fait tourner une vraie simulation de forces entre elles : deux
// constellations fortement reliées se rapprochent, les autres se
// repoussent — sans aucun centre imposé au départ, la position relative
// émerge uniquement des données.
// ---------------------------------------------------------------------
function computeConstellationCenters(authors, relations) {
  const center = { x: SIM_WIDTH / 2, y: SIM_HEIGHT / 2 };

  const authorConstellation = new Map(
    authors.map((a) => [a.id, a.constellation])
  );

  const constellationIds = [
    ...new Set(authors.map((a) => a.constellation)),
  ];

  const memberCount = {};
  constellationIds.forEach((id) => {
    memberCount[id] = authors.filter(
      (a) => a.constellation === id
    ).length;
  });

  const crossWeights = {};

  relations.forEach((r) => {
    const cA = authorConstellation.get(r.source);
    const cB = authorConstellation.get(r.target);

    if (!cA || !cB || cA === cB) return;

    const key = [cA, cB].sort().join("--");
    crossWeights[key] = (crossWeights[key] || 0) + r.strength;
  });

  const metaNodes = constellationIds.map((id, i) => {
    const angle = (i / constellationIds.length) * 2 * Math.PI;
    const seedRadius = Math.min(SIM_WIDTH, SIM_HEIGHT) / 3;

    return {
      id,
      x: center.x + seedRadius * Math.cos(angle),
      y: center.y + seedRadius * Math.sin(angle),
    };
  });

  const metaLinks = Object.entries(crossWeights).map(
    ([key, weight]) => {
      const [source, target] = key.split("--");
      return { source, target, weight };
    }
  );

  const metaSimulation = d3
    .forceSimulation(metaNodes)
    .force(
      "link",
      d3
        .forceLink(metaLinks)
        .id((d) => d.id)
        // Plus deux constellations sont fortement reliées, plus elles
        // sont attirées l'une vers l'autre.
        .distance((l) => Math.max(280, 700 - l.weight * 20))
        .strength((l) => Math.min(0.8, 0.1 + l.weight * 0.02))
    )
    .force("charge", d3.forceManyBody().strength(-2200))
    .force(
      "collide",
      d3
        .forceCollide()
        .radius((d) => 220 + memberCount[d.id] * 35)
    )
    .force("center", d3.forceCenter(center.x, center.y))
    .stop();

  metaSimulation.tick(500);

  const constellationCenters = {};

  metaNodes.forEach((n) => {
    constellationCenters[n.id] = { x: n.x, y: n.y };
  });

  return constellationCenters;
}

// ---------------------------------------------------------------------
// ÉTAGE 2 — micro-layout : à l'intérieur de ce cadre macro, les auteurs
// et concepts se placent. Le regroupement par constellation est fort
// (chacun reste fermement dans son propre halo) ; les relations entre
// auteurs d'une MÊME constellation les rapprochent normalement ; les
// relations qui traversent deux constellations différentes n'ont plus
// qu'une influence très légère sur la position individuelle (l'essentiel
// de leur effet est déjà capté au niveau macro par l'étage 1).
// ---------------------------------------------------------------------
export function computeLayout(authors, concepts, relations) {
  const constellationCenters = computeConstellationCenters(
    authors,
    relations
  );

  const center = { x: SIM_WIDTH / 2, y: SIM_HEIGHT / 2 };

  const authorConstellation = new Map(
    authors.map((a) => [a.id, a.constellation])
  );

  const authorNodes = authors.map((a) => {
    const c = constellationCenters[a.constellation] ?? center;

    return {
      id: a.id,
      kind: "author",
      constellation: a.constellation,
      x: c.x + (random() - 0.5) * 150,
      y: c.y + (random() - 0.5) * 150,
    };
  });

  const conceptNodes = concepts.map((c) => {
    const authorConst =
      authorConstellation.get(c.authors[0]) ?? null;
    const c2 = constellationCenters[authorConst] ?? center;

    return {
      id: `concept:${c.id}`,
      kind: "concept",
      labelLength: c.label.length,
      constellation: authorConst,
      x: c2.x + (random() - 0.5) * 150,
      y: c2.y + (random() - 0.5) * 150,
    };
  });

  const nodes = [...authorNodes, ...conceptNodes];

  const links = [];

  relations.forEach((r) => {
    const sameConstellation =
      authorConstellation.get(r.source) ===
      authorConstellation.get(r.target);

    links.push({
      source: r.source,
      target: r.target,
      kind: "relation",
      strength: r.strength || 2,
      sameConstellation,
    });
  });

  concepts.forEach((c) => {
    c.authors.forEach((authorId) => {
      links.push({
        source: `concept:${c.id}`,
        target: authorId,
        kind: "concept-link",
        sameConstellation: true,
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
        .distance((l) => {
          if (l.kind === "concept-link") return 95;
          return l.sameConstellation ? 160 : 320;
        })
        .strength((l) => {
          if (l.kind === "concept-link") return 0.9;
          // Relation interne à une constellation : rapproche vraiment,
          // proportionnellement à sa force réelle.
          // Relation entre deux constellations différentes : influence
          // très légère, la proximité macro est déjà gérée à l'étage 1.
          return l.sameConstellation
            ? Math.min(0.6, 0.15 + l.strength * 0.07)
            : 0.04;
        })
    )
    .force("charge", d3.forceManyBody().strength(-380))
    .force(
      "collide",
      d3
        .forceCollide()
        .radius((d) =>
          d.kind === "author"
            ? 75
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
        .strength(0.3)
    )
    .force(
      "clusterY",
      d3
        .forceY((d) => {
          const c = constellationCenters[d.constellation];
          return c ? c.y : center.y;
        })
        .strength(0.3)
    )
    .stop();

  simulation.tick(500);

  const authorXs = authorNodes.map((n) => n.x);
  const authorYs = authorNodes.map((n) => n.y);

  const centroidX =
    authorXs.reduce((sum, x) => sum + x, 0) / authorXs.length;
  const centroidY =
    authorYs.reduce((sum, y) => sum + y, 0) / authorYs.length;

  const xs = nodes.map((n) => n.x);
  const ys = nodes.map((n) => n.y);

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  // On centre le canevas final sur le centroïde réel des auteurs (et non
  // sur le simple centre du rectangle englobant), pour que le centrage
  // automatique de la vue au chargement tombe pile sur le contenu, même
  // si sa répartition est asymétrique.
  const halfWidth =
    Math.max(centroidX - minX, maxX - centroidX) + PADDING;
  const halfHeight =
    Math.max(centroidY - minY, maxY - centroidY) + PADDING;

  const offsetX = centroidX - halfWidth;
  const offsetY = centroidY - halfHeight;

  nodes.forEach((n) => {
    n.x = n.x - offsetX;
    n.y = n.y - offsetY;
  });

  const width = halfWidth * 2;
  const height = halfHeight * 2;

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
