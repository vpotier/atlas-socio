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
      minDistance: 900,
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

  // ---------------------------------------------------------------------
  // Cibles personnalisées pour les auteurs-ponts ("constellation" = "pont").
  // Plutôt que de tous les attirer vers un seul centre partagé — ce qui les
  // regroupe artificiellement alors qu'ils relient des courants et des
  // époques très différents — chacun est attiré vers la moyenne pondérée
  // des centres des constellations avec lesquelles IL a des relations
  // réelles dans relations.js. Un pont sans relation cross-constellation
  // repérée retombe sur le centre générique de "pont".
  // ---------------------------------------------------------------------
  const BRIDGE_CONSTELLATION = "pont";

  const bridgeAuthorTargets = {};

  authors
    .filter((a) => a.constellation === BRIDGE_CONSTELLATION)
    .forEach((a) => {
      const linked = relations.filter(
        (r) => r.source === a.id || r.target === a.id
      );

      let sumX = 0;
      let sumY = 0;
      let sumW = 0;

      linked.forEach((r) => {
        const otherId = r.source === a.id ? r.target : r.source;
        const otherConst = authorConstellation.get(otherId);

        if (!otherConst || otherConst === BRIDGE_CONSTELLATION) return;

        const c = constellationCenters[otherConst];
        if (!c) return;

        const w = r.strength || 1;
        sumX += c.x * w;
        sumY += c.y * w;
        sumW += w;
      });

      bridgeAuthorTargets[a.id] =
        sumW > 0
          ? { x: sumX / sumW, y: sumY / sumW }
          : constellationCenters[BRIDGE_CONSTELLATION] ?? center;
    });

  // Sécurité : une cible pondérée peut, par construction, tomber tout
  // près du centre d'UNE des constellations qui l'attirent (voire
  // dedans) — ce qui donnerait l'impression fausse qu'un auteur-pont
  // "appartient" à cette constellation plutôt que de simplement pencher
  // vers elle. On repousse donc chaque cible pour qu'elle reste à une
  // distance minimale de TOUTE constellation non-pont, tout en
  // conservant la direction (donc le sens) donnée par la moyenne
  // pondérée.
  const BRIDGE_SAFE_DISTANCE = 480;

  Object.values(bridgeAuthorTargets).forEach((target) => {
    Object.entries(constellationCenters).forEach(([constId, c]) => {
      if (constId === BRIDGE_CONSTELLATION) return;

      const dx = target.x - c.x;
      const dy = target.y - c.y;
      const dist = Math.hypot(dx, dy) || 1;

      if (dist < BRIDGE_SAFE_DISTANCE) {
        const push = BRIDGE_SAFE_DISTANCE - dist;
        target.x += (dx / dist) * push;
        target.y += (dy / dist) * push;
      }
    });
  });

  // Cible de clustering effective d'un nœud (auteur ou concept) : celle
  // de son auteur-pont personnalisé si applicable, sinon celle de sa
  // constellation.
  const clusterTarget = (d) => {
    const anchorAuthorId =
      d.kind === "author" ? d.id : d.homeAuthorId;

    if (anchorAuthorId && bridgeAuthorTargets[anchorAuthorId]) {
      return bridgeAuthorTargets[anchorAuthorId];
    }

    return constellationCenters[d.constellation] ?? center;
  };


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
      homeAuthorId: c.authors[0],
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
        .forceX((d) => clusterTarget(d).x)
        .strength(0.75)
    )
    .force(
      "clusterY",
      d3
        .forceY((d) => clusterTarget(d).y)
        .strength(0.75)
    )
    .stop();

  simulation.tick(650);

  // Filet de sécurité final, appliqué directement sur les positions
  // réellement simulées (celles qui servent ensuite à l'affichage) —
  // et non sur une étape intermédiaire que d'autres forces pourraient
  // ensuite annuler. Si le centre (calculé sur les AUTEURS seulement,
  // comme le fait le halo visuel dans Clusters.jsx) de « théorie de la
  // structuration » reste trop proche de celui de « sociologie
  // marxiste » malgré tout ce qui précède, on déplace en bloc tous les
  // membres (auteurs ET concepts) de la première pour les écarter,
  // sans toucher à la seconde ni à aucune autre constellation.
  const HARD_SEPARATION_OVERRIDES = [
    {
      fixed: "la-sociologie-marxiste",
      moved: "la-theorie-de-la-structuration",
      minDistance: 650,
    },
  ];

  HARD_SEPARATION_OVERRIDES.forEach(({ fixed, moved, minDistance }) => {
    const fixedAuthors = nodes.filter(
      (n) => n.kind === "author" && n.constellation === fixed
    );
    const movedNodes = nodes.filter(
      (n) => n.constellation === moved
    );
    const movedAuthors = movedNodes.filter((n) => n.kind === "author");

    if (fixedAuthors.length === 0 || movedAuthors.length === 0) return;

    const centroid = (list) => ({
      x: list.reduce((s, n) => s + n.x, 0) / list.length,
      y: list.reduce((s, n) => s + n.y, 0) / list.length,
    });

    const fixedCenter = centroid(fixedAuthors);
    const movedCenter = centroid(movedAuthors);

    const dx = movedCenter.x - fixedCenter.x;
    const dy = movedCenter.y - fixedCenter.y;
    const dist = Math.hypot(dx, dy) || 1;

    if (dist < minDistance) {
      const shortfall = minDistance - dist;
      const ux = dx / dist;
      const uy = dy / dist;

      movedNodes.forEach((n) => {
        n.x += ux * shortfall;
        n.y += uy * shortfall;
      });
    }
  });

  // Filet de sécurité pour les AUTEURS : la simulation (collisions avec
  // des auteurs-ponts désormais mobiles, notamment) peut occasionnellement
  // repousser un auteur loin de sa cible de clustering — au point de le
  // faire sortir visuellement du halo de sa propre constellation. On
  // ramène donc tout auteur dont la distance à sa cible dépasse un
  // maximum raisonnable, en conservant la direction produite par la
  // simulation.
  const MAX_AUTHOR_DRIFT = 420;

  authorNodes.forEach((n) => {
    const target = clusterTarget(n);
    const dx = n.x - target.x;
    const dy = n.y - target.y;
    const dist = Math.hypot(dx, dy) || 1;

    if (dist > MAX_AUTHOR_DRIFT) {
      const ux = dx / dist;
      const uy = dy / dist;
      n.x = target.x + ux * MAX_AUTHOR_DRIFT;
      n.y = target.y + uy * MAX_AUTHOR_DRIFT;
    }
  });

  // Deuxième filet de sécurité, spécifique aux auteurs-ponts : la
  // poussée calculée plus haut (bridgeAuthorTargets) se base sur les
  // centres MACRO des constellations, calculés avant que les auteurs
  // individuels ne se stabilisent. Un auteur ordinaire peut, lui aussi,
  // avoir dérivé par rapport à ce centre macro pendant la simulation —
  // si bien que le centre RÉEL (le centroïde effectif de ses auteurs,
  // une fois tout stabilisé par le clamp ci-dessus) peut être notablement
  // différent, et donc plus proche d'un auteur-pont que prévu. On
  // recalcule ici les centroïdes réels de chaque constellation à partir
  // des positions désormais stabilisées, et on repousse au besoin chaque
  // auteur-pont qui se retrouverait trop près de l'une d'elles — cette
  // fois de façon garantie, puisque basée sur des positions réelles et
  // non plus sur une estimation.
  const BRIDGE_SAFE_DISTANCE_FINAL = 460;

  const centroidGroups = {};
  authorNodes
    .filter((n) => n.constellation !== BRIDGE_CONSTELLATION)
    .forEach((n) => {
      if (!centroidGroups[n.constellation]) {
        centroidGroups[n.constellation] = [];
      }
      centroidGroups[n.constellation].push(n);
    });

  const realCentroids = {};
  Object.entries(centroidGroups).forEach(([id, list]) => {
    realCentroids[id] = {
      x: list.reduce((s, n) => s + n.x, 0) / list.length,
      y: list.reduce((s, n) => s + n.y, 0) / list.length,
    };
  });

  authorNodes
    .filter((n) => n.constellation === BRIDGE_CONSTELLATION)
    .forEach((n) => {
      Object.values(realCentroids).forEach((c) => {
        const dx = n.x - c.x;
        const dy = n.y - c.y;
        const dist = Math.hypot(dx, dy) || 1;

        if (dist < BRIDGE_SAFE_DISTANCE_FINAL) {
          const push = BRIDGE_SAFE_DISTANCE_FINAL - dist;
          n.x += (dx / dist) * push;
          n.y += (dy / dist) * push;
        }
      });
    });

  // Filet de sécurité final pour les CONCEPTS : quel que soit le résultat
  // de la simulation de forces (collisions, liens concurrents, auteurs-
  // ponts déplacés juste au-dessus...), chaque concept est réancré à une
  // distance fixe et courte de son auteur de référence (le premier auteur
  // listé dans concepts.js) — un concept ne peut structurellement plus
  // déborder du halo de son auteur, même dans les cas les plus tendus du
  // graphe.
  //
  // Les concepts d'un même auteur sont en plus répartis à intervalles
  // RÉGULIERS autour de lui (plutôt que de conserver tels quels leurs
  // angles individuels issus de la simulation) : sinon plusieurs concepts
  // d'un même auteur pouvaient rester groupés du même côté et voir leurs
  // étiquettes se chevaucher (c'était le cas des 4 concepts de Simmel).
  // L'angle de départ du groupe reste néanmoins celui, moyen, trouvé par
  // la simulation, pour rester cohérent avec l'espace libre alentour.
  const authorFinalPositions = new Map();
  authorNodes.forEach((n) =>
    authorFinalPositions.set(n.id, { x: n.x, y: n.y })
  );

  const CONCEPT_ANCHOR_DISTANCE = 110;

  const conceptsByAuthor = new Map();
  conceptNodes.forEach((n) => {
    if (!conceptsByAuthor.has(n.homeAuthorId)) {
      conceptsByAuthor.set(n.homeAuthorId, []);
    }
    conceptsByAuthor.get(n.homeAuthorId).push(n);
  });

  conceptsByAuthor.forEach((group, authorId) => {
    const homeAuthor = authorFinalPositions.get(authorId);
    if (!homeAuthor) return;

    const avgDx =
      group.reduce((s, n) => s + (n.x - homeAuthor.x), 0) / group.length;
    const avgDy =
      group.reduce((s, n) => s + (n.y - homeAuthor.y), 0) / group.length;
    const startAngle = Math.atan2(avgDy, avgDx);

    group.forEach((n, i) => {
      const angle = startAngle + (i / group.length) * 2 * Math.PI;
      n.x = homeAuthor.x + Math.cos(angle) * CONCEPT_ANCHOR_DISTANCE;
      n.y = homeAuthor.y + Math.sin(angle) * CONCEPT_ANCHOR_DISTANCE;
    });
  });

  const authorXs = authorNodes.map((n) => n.x);
  const authorYs = authorNodes.map((n) => n.y);

  const authorCen
