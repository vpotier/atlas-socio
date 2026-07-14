// Les 3 axes théoriques utilisés pour les filtres à curseur. Chaque
// constellation est positionnée entre 0 et 1 sur chacun des axes.
// Values et labels dérivés du tableau validé + propositions complémentaires
// pour les constellations non couvertes par le tableau d'origine.
export const axes = {
  individuSociete: {
    label: "Individu / Société",
    leftLabel: "Primat de la société",
    rightLabel: "Primat de l'individu",
  },
  methode: {
    label: "Méthode",
    leftLabel: "Explicative (causale)",
    rightLabel: "Compréhensive",
  },
  rationalite: {
    label: "Rationalité de l'acteur",
    leftLabel: "Faible / déterminée",
    rightLabel: "Maximale / stratégique",
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
    individuSociete: { value: 0.15, label: "Primat de la société" },
    methode: { value: 0.15, label: "Explicative (causale)" },
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
