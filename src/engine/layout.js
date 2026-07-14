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

// Espace de travail pour la simulation.
const SIM_WIDTH = 2600;
const SIM_HEIGHT = 1700;

// Marge laissée autour du contenu final calculé.
const PADDING = 140;

// ---------------------------------------------------------------------
// Layout de type ForceAtlas2 (comme dans Gephi) : les positions émergent
// du poids réel des relations entre auteurs, sans hypothèse de départ sur
// qui doit être central. Deux auteurs fortement reliés (héritage, dialogue
// ou tension) se rapprochent ; les autres se repoussent naturellement.
//
// Filet de sécurité : entre auteurs d'une même constellation qui n'ont
// PAS de relation explicite entre eux, on ajoute un lien de cohésion très
// faible, pour éviter qu'un courant peu connecté (ex. Actionnisme) ne
// parte à la dérive — mais ce n'est plus le moteur principal du layout,
// juste un correctif léger.
// ---------------------------------------------------------------------
export function computeLayout(authors, concepts, relations) {
  const center = { x: SIM_WIDTH / 2, y: SIM_HEIGHT / 2 };

  const authorNodes = authors.map((a) => ({
    id: a.id,
    kind: "author",
    constellation: a.constellation,
    x: center.x + (random() - 0.5) * SIM_WIDTH * 0.6,
    y: center.y + (random() - 0.5) * SIM_HEIGHT * 0.6,
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
    x: center.x + (random() - 0.5) * SIM_WIDTH * 0.6,
    y: center.y + (random() - 0.5) * SIM_HEIGHT * 0.6,
  }));

  const nodes = [...authorNodes, ...conceptNodes];

  const links = [];

  // Relations réelles entre auteurs : le moteur principal du layout.
  relations.forEach((r) => {
    links.push({
      source: r.source,
      target: r.target,
      kind: "relation",
      strength: r.strength || 2,
    });
  });

  // Concept -> auteur(s).
  concepts.forEach((c) => {
    c.authors.forEach((authorId) => {
      links.push({
        source: `concept:${c.id}`,
        target: authorId,
        kind: "concept-link",
      });
    });
  });

  // Filet de sécurité : cohésion légère par constellation, seulement
  // entre auteurs qui n'ont pas déjà de relation explicite entre eux.
  const explicitPairs = new Set(
    relations.map((r) =>
      [r.source, r.target].sort().join("--")
    )
  );

  const byConstellation = {};

  authors.forEach((a) => {
    if (!byConstellation[a.constellation]) {
      byConstellation[a.constellation] = [];
    }

    byConstellation[a.constellation].push(a.id);
  });

  Object.values(byConstellation).forEach((ids) => {
    for (let i = 0; i < ids.length; i++) {
      for (let j = i + 1; j < ids.length; j++) {
        const key = [ids[i], ids[j]].sort().join("--");

        if (!explicitPairs.has(key)) {
          links.push({
            source: ids[i],
            target: ids[j],
            kind: "cohesion",
          });
        }
      }
    }
  });

  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink(links)
        .id((d) => d.id)
        .distance((l) => {
          if (l.kind === "concept-link") return 90;
          if (l.kind === "cohesion") return 280;
          // Relation réelle : plus la force est grande, plus la
          // distance cible est courte (auteurs très liés = très proches).
          return Math.max(120, 320 - l.strength * 35);
        })
        .strength((l) => {
          if (l.kind === "concept-link") return 0.9;
          if (l.kind === "cohesion") return 0.04;
          return Math.min(0.9, 0.15 + l.strength * 0.09);
        })
    )
    .force("charge", d3.forceManyBody().strength(-460))
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
    .force("center", d3.forceCenter(center.x, center.y))
    .stop();

  simulation.tick(600);

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
