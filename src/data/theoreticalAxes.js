// Les 3 axes théoriques utilisés pour les filtres à curseur. Chaque
// constellation est positionnée entre 0 et 1 sur chacun des axes.
// Values et labels dérivés du tableau validé + propositions complémentaires
// pour les constellations non couvertes par le tableau d'origine.
export const axes = {
  individuSociete: {
    label: "Individu / Société",
    leftLabel: "Primat de la société",
    rightLabel: "Primat de l'individu",
    description:
      "Qu'est-ce qui explique en dernier ressort les comportements sociaux ? À gauche, des structures qui dépassent et contraignent les individus, largement à leur insu. À droite, les choix et l'action des individus eux-mêmes. Au-delà du pôle « individu », certains courants (théorie de l'acteur-réseau) refusent même l'idée que seuls les humains comptent, et incluent les objets et les techniques, à égalité, dans l'explication.",
  },
  methode: {
    label: "Méthode",
    leftLabel: "Explicative (causale)",
    rightLabel: "Compréhensive",
    description:
      "Comment le sociologue construit-il son savoir ? Les approches « explicatives » cherchent des causes extérieures aux acteurs, un peu comme en sciences naturelles — soit en repérant des enchaînements de causes observables (« causale »), soit en reconstruisant des structures cachées, invisibles pour les acteurs eux-mêmes, comme des lois linguistiques ou économiques (« formalisée/structurale »). À l'inverse, les approches « compréhensives » cherchent à saisir le sens que les acteurs donnent eux-mêmes à leurs actions. « Description » pousse cette logique jusqu'au bout : suivre au plus près ce que font réellement les acteurs sur le terrain, sans grille théorique imposée à l'avance.",
  },
  rationalite: {
    label: "Rationalité de l'acteur",
    leftLabel: "Faible / déterminée",
    rightLabel: "Maximale / stratégique",
    description:
      "Quelle place ce courant accorde-t-il au calcul et à la réflexion des individus dans leurs actions ? À un pôle, le comportement est largement déterminé par des forces extérieures (habitudes, contraintes, inconscient) sans grand calcul conscient. À l'autre, les acteurs sont vus comme des stratèges rationnels, pesant consciemment coûts et bénéfices avant d'agir.",
  },
};

// Crans nommés sur lesquels le curseur s'accroche (au lieu d'une valeur
// continue libre). 5 positions par axe, de 0 à 1.
export const axisSteps = {
  individuSociete: [
    { value: 0, label: "Primat de la société" },
    { value: 0.25, label: "Structures" },
    { value: 0.5, label: "Relation" },
    { value: 0.75, label: "Individu" },
    { value: 1, label: "Au-delà (symétrie humain/non-humain)" },
  ],
  methode: [
    { value: 0, label: "Explicative (causale)" },
    { value: 0.25, label: "Explicative (formalisée/structurale)" },
    { value: 0.5, label: "Mixte" },
    { value: 0.75, label: "Compréhensive" },
    { value: 1, label: "Description (suivre les acteurs)" },
  ],
  rationalite: [
    { value: 0, label: "Faible / déterminée" },
    { value: 0.25, label: "Pratique (non réfléchie)" },
    { value: 0.5, label: "Située / plurielle" },
    { value: 0.75, label: "Raisonnable / réflexive" },
    { value: 1, label: "Maximale / distribuée" },
  ],
};

// Note méthodologique : la constellation "l-individualisme-methodologique"
// regroupe Boudon et Coleman, que le tableau source distingue pourtant sur
// Méthode et Rationalité (Boudon : raisons individuelles / Coleman : calcul
// coûts-bénéfices formalisé). Faute de filtrage par auteur pour l'instant,
// la valeur retenue est une position mixte, à affiner si l'on bascule un
// jour vers un filtrage auteur par auteur plutôt que par constellation.
export const constellationAxisValues = {
  "la-sociologie-marxiste": {
    individuSociete: {
      value: 0.05,
      label: "Primat des structures économiques (holisme matérialiste)",
    },
    methode: { value: 0.1, label: "Explicative (matérialiste)" },
    rationalite: {
      value: 0.05,
      label: "Faible (déterminée par les rapports de production)",
    },
  },
  fonctionnalisme: {
    individuSociete: {
      value: 0.1,
      label: "Primat de la société (fonctions systémiques)",
    },
    methode: { value: 0.25, label: "Explicative (fonctionnelle)" },
    rationalite: {
      value: 0.15,
      label: "Faible à modérée (adaptation fonctionnelle)",
    },
  },
durkheimien: {
    individuSociete: { value: 0.08, label: "Primat de la société" },
    methode: { value: 0.08, label: "Explicative (causale)" },
    rationalite: {
      value: 0.1,
      label: "Faible (contraintes sociales extérieures)",
    },
  },
  structuralisme: {
    individuSociete: {
      value: 0.25,
      label: "Primat des structures",
    },
    methode: { value: 0.2, label: "Explicative (structurale)" },
    rationalite: {
      value: 0.2,
      label: "Inconsciente (structures symboliques)",
    },
  },
  bourdieusien: {
    individuSociete: {
      value: 0.35,
      label: "Structures incorporées (habitus)",
    },
    methode: { value: 0.45, label: "Mixte" },
  rationalite: {
      value: 0.4,
      label:
        "Pratique ambivalente — programme « ni-ni » : ni calcul rationnel conscient, ni pur automatisme mécanique (Dewerpe, 1996)",
    },
  },
  "la-theorie-critique": {
    individuSociete: {
      value: 0.45,
      label: "Relation (intersubjectivité communicationnelle)",
    },
    methode: {
      value: 0.55,
      label: "Mixte (critique + reconstruction rationnelle)",
    },
    rationalite: {
      value: 0.6,
      label: "Communicationnelle (orientée vers l'entente)",
    },
  },
  "le-constructivisme-social": {
    individuSociete: {
      value: 0.5,
      label: "Relation (dialectique individu-société)",
    },
    methode: { value: 0.7, label: "Compréhensive (phénoménologique)" },
    rationalite: { value: 0.5, label: "Située (interprétative)" },
  },
  "l-interactionnisme-symbolique": {
    individuSociete: {
      value: 0.5,
      label: "Relation (co-construction interactionnelle)",
    },
    methode: { value: 0.75, label: "Compréhensive empirique" },
    rationalite: { value: 0.45, label: "Située (contextuelle)" },
  },
  "l-ethnomethodologie": {
    individuSociete: {
      value: 0.5,
      label: "Relation (ordre local produit en continu)",
    },
    methode: { value: 0.85, label: "Compréhensive radicale" },
    rationalite: {
      value: 0.5,
      label: "Pratique située (accountability)",
    },
  },
  pragmatisme: {
    individuSociete: { value: 0.55, label: "Relation (épreuves situées)" },
    methode: { value: 0.55, label: "Mixte (épreuves)" },
    rationalite: {
      value: 0.55,
      label: "Plurielle (justification situationnelle)",
    },
  },
  "l-interactionnisme-structural": {
    individuSociete: {
      value: 0.55,
      label: "Relation (réseaux d'interdépendance)",
    },
    methode: {
      value: 0.6,
      label: "Explicative relationnelle (structure des réseaux)",
    },
    rationalite: {
      value: 0.6,
      label: "Distribuée (encastrement relationnel)",
    },
  },
  "la-theorie-de-la-structuration": {
    individuSociete: {
      value: 0.6,
      label: "Dualité du structurel (dépassement de l'opposition)",
    },
    methode: { value: 0.5, label: "Mixte (synthèse)" },
    rationalite: {
      value: 0.55,
      label: "Réflexive (conscience pratique/discursive)",
    },
  },
  pont: {
    individuSociete: {
      value: 0.65,
      label: "Acteur (auto-production de la société)",
    },
    methode: {
      value: 0.6,
      label: "Intervention sociologique (compréhensive engagée)",
    },
    rationalite: {
      value: 0.65,
      label: "Historicité (capacité collective d'auto-transformation)",
    },
  },
  weberien: {
    individuSociete: { value: 0.75, label: "Individu (méthodologique)" },
    methode: { value: 0.9, label: "Compréhensive" },
    rationalite: { value: 0.75, label: "Plurielle (sens subjectif)" },
  },
  "l-individualisme-methodologique": {
    individuSociete: { value: 0.85, label: "Individu" },
    methode: {
      value: 0.2,
      label: "Explicative par les raisons à formalisée (mixte Boudon/Coleman)",
    },
    rationalite: {
      value: 0.85,
      label: "Raisonnable à maximale (mixte Boudon/Coleman)",
    },
  },
  "theorie-de-l-acteur-reseau-et-sts": {
    individuSociete: {
      value: 1,
      label: "Symétrie humain/non-humain (hors de l'axe individu/société)",
    },
    methode: { value: 1, label: "Description (suivre les acteurs)" },
    rationalite: {
      value: 0.95,
      label: "Distribuée (effet de réseau, actants humains et non-humains)",
    },
  },
};
