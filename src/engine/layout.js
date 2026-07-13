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

// Espace de travail (large pour laisser aux constellations la place de
// se répartir sans se chevaucher au niveau macro).
const SIM_WIDTH = 2600;
const SIM_HEIGHT = 1700;

// Marge laissée autour du contenu final calculé.
const PADDING = 140;

// ---------------------------------------------------------------------
// ÉTAGE 1 — méta-layout : où placer chaque CONSTELLATION par rapport aux
// autres. Durkheim, Weber et Bourdieu forment le cœur central (les trois
// fondateurs), et toutes les autres constellations sont disposées en
// pétales tout autour, à 360°. Chaque pétale est plus ou moins proche du
// centre selon le poids cumulé de ses relations avec les trois auteurs
// fondateurs : plus une constellation dialogue avec le cœur, plus elle
// est rapprochée ; les autres restent réparties tout autour sans jamais
// s'éloigner au-delà d'un rayon maximal.
// ---------------------------------------------------------------------
const HUB_CONSTELLATIONS = ["durkheimien", "weberien", "bourdieusien"];

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

  function weightBetween(a, b) {
    return crossWeights[[a, b].sort().join("--")] || 0;
  }

  const constellationCenters = {};

  const hubIds = HUB_CONSTELLATIONS.filter((id) =>
    constellationIds.includes(id)
  );

  // Cœur : petit triangle serré au centre du canevas.
  const HUB_RADIUS = 130;

  hubIds.forEach((id, i) => {
    const angle = (i / hubIds.length) * 2 * Math.PI;

    constellationCenters[id] = {
      x: center.x + HUB_RADIUS * Math.cos(angle),
      y: center.y + HUB_RADIUS * Math.sin(angle),
    };
  });

  // Pétales : toutes les autres constellations, réparties à 360° autour
  // du cœur. Le rayon dépend de l'affinité cumulée avec les 3 fondateurs
  // (bornée entre un minimum et un maximum, jamais de dérive à l'infini).
  const petalIds = constellationIds.filter(
    (id) => !hubIds.includes(id)
  );

  const coreAffinity = {};

  petalIds.forEach((id) => {
    coreAffinity[id] = hubIds.reduce(
      (sum, hubId) => sum + weightBetween(id, hubId),
      0
    );
  });

  const sortedPetals = [...petalIds].sort(
    (a, b) => coreAffinity[b] - coreAffinity[a]
  );

  const MIN_RADIUS = 420;
  const MAX_RADIUS = 720;
  const maxAffinity = Math.max(
    1,
    ...sortedPetals.map((id) => coreAffinity[id])
  );

  sortedPetals.forEach((id, i) => {
    const angle = (i / sortedPetals.length) * 2 * Math.PI;
    const affinityRatio = coreAffinity[id] / maxAffinity;
    const radius =
      MAX_RADIUS - affinityRatio * (MAX_RADIUS - MIN_RADIUS);
    const sizeAdjust = memberCount[id] * 10;

    constellationCenters[id] = {
      x: center.x + (radius + sizeAdjust) * Math.cos(angle),
      y: center.y + (radius + sizeAdjust) * Math.sin(angle),
    };
  });

  return constellationCenters;
}

// ---------------------------------------------------------------------
// ÉTAGE 2 — micro-layout : à l'intérieur de ce cadre macro, on place les
// auteurs et concepts. Le regroupement par constellation est fort (les
// auteurs restent fermement dans leur propre halo) ; les relations entre
// auteurs de la MÊME constellation les rapprochent normalement ; les
// relations qui traversent deux constellations différentes n'ont plus
// qu'une influence très légère sur la position individuelle (l'essentiel
// de leur effet passe désormais par le positionnement macro de l'étage 1).
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
    const center2 = constellationCenters[authorConst] ?? center;

    return {
      id: `concept:${c.id}`,
      kind: "concept",
      labelLength: c.label.length,
      constellation: authorConst,
      x: center2.x + (random() - 0.5) * 150,
      y: center2.y + (random() - 0.5) * 150,
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
          // Relation interne à une constellation : rapproche vraiment.
          // Relation entre deux constellations différentes : influence
          // très légère, la proximité macro est déjà gérée à l'étage 1.
          return l.sameConstellation ? 0.35 : 0.04;
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

  // Recadrage : on calcule l'étendue réelle du résultat et on
  // dimensionne le canevas final dessus, pour éliminer le vide
  // et garder tout le monde visible.
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
