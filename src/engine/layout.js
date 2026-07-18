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
        // sont attirées l'une vers l'autre — sensible même à un petit
        // nombre de relations réelles (pas seulement aux courants très
        // densément connectés entre eux).
        .distance((l) => Math.max(280, 620 - l.weight * 35))
        .strength((l) => Math.min(0.85, 0.15 + l.weight * 0.035))
    )
    .force("charge", d3.forceManyBody().strength(-2600))
    .force(
      "collide",
      d3
        .forceCollide()
        .radius((d) => 320 + memberCount[d.id] * 55)
    )
    .force("center", d3.forceCenter(center.x, center.y))
    .stop();

  metaSimulation.tick(500);

  const constellationCenters = {};

  metaNodes.forEach((n) => {
    constellationCenters[n.id] = { x: n.x, y: n.y };
  });

  // Certaines paires de constellations peuvent, selon la dynamique de
  // la simulation, finir trop proches l'une de l'autre malgré la force
  // de collision — notamment quand l'une d'elles est tirée dans
  // plusieurs directions à la fois par de nombreuses relations
  // croisées (ex. Giddens, relié à Marx, Weber, Durkheim et
  // Lévi-Strauss). Plutôt que de retoucher les réglages généraux — ce
  // qui a des répercussions imprévisibles sur toute la carte — on
  // corrige ici, après coup, les cas précis déjà repérés visuellement,
  // en écartant seulement les deux constellations concernées, sans
  // toucher à la position de toutes les autres.
  const MIN_SEPARATION_OVERRIDES = [
    {
      a: "la-sociologie-marxiste",
      b: "la-theorie-de-la-structuration",
      minDistance: 700,
    },
  ];

  MIN_SEPARATION_OVERRIDES.forEach(({ a, b, minDistance }) => {
    const ca = constellationCenters[a];
    const cb = constellationCenters[b];
    if (!ca || !cb) return;

    const dx = cb.x - ca.x;
    const dy = cb.y - ca.y;
    const dist = Math.hypot(dx, dy) || 1;

    if (dist < minDistance) {
      const push = (minDistance - dist) / 2;
      const ux = dx / dist;
      const uy = dy / dist;

      ca.x -= ux * push;
      ca.y -= uy * push;
      cb.x += ux * push;
      cb.y += uy * push;
    }
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

  // Degré de chaque auteur (nombre de relations où il apparaît, en
  // source ou en cible) : sert à la fois à agrandir visuellement les
  // auteurs les plus centraux et à leur donner davantage d'espace de
  // collision, puisqu'ils attirent mécaniquement plus de traits.
  const authorDegree = new Map();
  authors.forEach((a) => authorDegree.set(a.id, 0));
  relations.forEach((r) => {
    if (authorDegree.has(r.source)) {
      authorDegree.set(r.source, authorDegree.get(r.source) + 1);
    }
    if (authorDegree.has(r.target)) {
      authorDegree.set(r.target, authorDegree.get(r.target) + 1);
    }
  });

  const authorNodes = authors.map((a) => {
    const c = constellationCenters[a.constellation] ?? center;

    return {
      id: a.id,
      kind: "author",
      constellation: a.constellation,
      degree: authorDegree.get(a.id) ?? 0,
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
    // Constellation "de référence" du concept, celle de son premier
    // auteur — c'est elle qui détermine où le concept est ancré (voir
    // conceptNodes ci-dessus).
    const homeConstellation = authorConstellation.get(c.authors[0]);

    c.authors.forEach((authorId) => {
      links.push({
        source: `concept:${c.id}`,
        target: authorId,
        kind: "concept-link",
        // Un concept partagé par des auteurs de constellations
        // différentes (ex. « Action sociale » chez Weber ET Parsons)
        // ne doit être fortement attiré que par son auteur de
        // référence : sinon il se retrouve tiraillé entre deux halos
        // et finit par déborder des deux. Le lien vers un auteur
        // « secondaire » d'une autre constellation reste visible sur
        // la carte mais n'exerce plus de force.
        sameConstellation:
          authorConstellation.get(authorId) === homeConstellation,
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
          if (l.kind === "concept-link")
            return l.sameConstellation ? 110 : 260;
          return l.sameConstellation ? 160 : 320;
        })
        .strength((l) => {
          if (l.kind === "concept-link")
            return l.sameConstellation ? 0.9 : 0;
          // Relation interne à une constellation : rapproche vraiment,
          // proportionnellement à sa force réelle.
          // Relation entre deux constellations différentes : AUCUNE
          // influence sur la position individuelle — la proximité entre
          // courants est entièrement décidée à l'étage macro (1). Sans
          // ça, un auteur avec beaucoup de relations sortantes (même
          // individuellement faibles) finit par dériver hors de son
          // propre halo, faute de collègues pour le retenir.
          return l.sameConstellation
            ? Math.min(0.6, 0.15 + l.strength * 0.07)
            : 0;
        })
    )
    .force("charge", d3.forceManyBody().strength(-380))
    .force(
      "collide",
      d3
        .forceCollide()
        .radius((d) =>
          d.kind === "author"
            ? 70 + Math.min(d.degree ?? 0, 26) * 4
            : 55 + Math.min(d.labelLength ?? 10, 30) * 4
        )
        .strength(1)
        .iterations(3)
    )
    .force(
      "clusterX",
      d3
        .forceX((d) => {
          const c = constellationCenters[d.constellation];
          return c ? c.x : center.x;
        })
        .strength(0.75)
    )
    .force(
      "clusterY",
      d3
        .forceY((d) => {
          const c = constellationCenters[d.constellation];
          return c ? c.y : center.y;
        })
        .strength(0.75)
    )
    .stop();

  simulation.tick(650);

  const authorXs = authorNodes.map((n) => n.x);
  const authorYs = authorNodes.map((n) => n.y);

  const authorCentroidX =
    authorXs.reduce((sum, x) => sum + x, 0) / authorXs.length;
  const authorCentroidY =
    authorYs.reduce((sum, y) => sum + y, 0) / authorYs.length;

  const xs = nodes.map((n) => n.x);
  const ys = nodes.map((n) => n.y);

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  // Canevas dimensionné simplement sur l'étendue réelle du contenu (pas
  // de gonflement artificiel). Le centre du contenu (utilisé pour viser
  // la caméra au chargement) est calculé et exposé séparément, sans
  // supposer qu'il tombe pile au centre géométrique du canevas.
  nodes.forEach((n) => {
    n.x = n.x - minX + PADDING;
    n.y = n.y - minY + PADDING;
  });

  const width = maxX - minX + PADDING * 2;
  const height = maxY - minY + PADDING * 2;

  const centerX = authorCentroidX - minX + PADDING;
  const centerY = authorCentroidY - minY + PADDING;

  const authorPositions = new Map();
  const conceptPositions = new Map();

  nodes.forEach((n) => {
    if (n.kind === "author") {
      authorPositions.set(n.id, { x: n.x, y: n.y, degree: n.degree });
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
    centerX,
    centerY,
  };
}
