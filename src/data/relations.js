export const relations = [
  {
    source: "bourdieu",
    target: "durkheim",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Bourdieu reprend et prolonge la notion durkheimienne de fait social, notamment via les concepts d'habitus et de champ.",
    sources: ["Fournier, 2007, Émile Durkheim"],
  },
  {
    source: "bourdieu",
    target: "weber",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "Dialogue critique entre l'objectivisme de Bourdieu et la sociologie compréhensive de Weber ; certains commentateurs minimisent cette filiation au profit de l'influence marxiste.",
    sources: ["Corcuff, 2003, Bourdieu autrement"],
  },
  {
    source: "durkheim",
    target: "weber",
    type: "tension",
    strength: 3,
    consensus: "élevé",
    justification:
      "Opposition largement documentée entre holisme méthodologique (Durkheim) et individualisme méthodologique (Weber).",
    sources: ["Aron, 1967, Les Étapes de la pensée sociologique"],
  },
  {
    source: "talcott-parsons",
    target: "robert-k-merton",
    type: "dialogue",
    strength: 5,
    consensus: "élevé",
    justification:
      "Merton a été l'étudiant de Parsons à Harvard, une filiation académique directe qui s'est traduite par un intense compagnonnage intellectuel et institutionnel au sein de la sociologie américaine.",
    sources: ["Ritzer, 2011, Sociological Theory"],
  },
  {
    source: "robert-k-merton",
    target: "talcott-parsons",
    type: "tension",
    strength: 4,
    consensus: "élevé",
    justification:
      "Merton conteste l'approche holiste et l'abstraction architectonique des grands systèmes théoriques de Parsons, leur opposant la nécessité de construire des théories de moyenne portée vérifiables empiriquement.",
    sources: [
      "Boudon & Bourricaud, 1982, Dictionnaire critique de la sociologie",
    ],
  },
  {
    source: "raymond-boudon",
    target: "james-coleman",
    type: "dialogue",
    strength: 4,
    consensus: "élevé",
    justification:
      "Boudon et Coleman partagent une même ambition de fonder la sociologie sur l'analyse de l'action individuelle et ont entretenu des échanges nourris, notamment autour de la sociologie de l'éducation et de la formalisation mathématique.",
    sources: [
      "Cherkaoui, 2006, Le paradoxe des conséquences : l'individualisme méthodologique",
    ],
  },
  {
    source: "raymond-boudon",
    target: "james-coleman",
    type: "tension",
    strength: 3,
    consensus: "moyen",
    justification:
      "Une divergence conceptuelle oppose les deux auteurs concernant les limites de la rationalité : Coleman reste fidèle à l'optimisation économique utilitariste tandis que Boudon rejette ce réductionnisme au profit d'une rationalité cognitive.",
    sources: ["Boudon, 2002, Les méthodes en sociologie"],
  },
  {
    source: "herbert-blumer",
    target: "erving-goffman",
    type: "dialogue",
    strength: 4,
    consensus: "élevé",
    justification:
      "Blumer fut le professeur de Goffman à l'Université de Chicago ; bien que Goffman ait pris ses distances avec l'orthodoxie méthodologique de Blumer pour développer son propre vocabulaire, sa vision d'un ordre de l'interaction dynamique découle directement de cet ancrage.",
    sources: ["Le Breton, 2004, L'interactionnisme symbolique"],
  },
  {
    source: "herbert-blumer",
    target: "becker",
    type: "heritage",
    strength: 5,
    consensus: "élevé",
    justification:
      "Becker revendique explicitement l'héritage de Blumer, dont il a suivi les cours à Chicago, appliquant fidèlement le précepte blumérien d'aller observer directement le monde social en train de se faire.",
    sources: ["Becker, 1998, Les Ficelles du métier"],
  },
  {
    source: "erving-goffman",
    target: "becker",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "Contemporains au sein de la néo-école de Chicago, ils partagent un intérêt pour les marges et la stigmatisation, échangeant régulièrement leurs concepts (Goffman utilise l'étiquetage, Becker s'appuie sur la notion de stigmate) malgré des styles analytiques différents.",
    sources: ["Ansart, 1990, Les sociologies contemporaines"],
  },
  {
    source: "harrison-white",
    target: "mark-granovetter",
    type: "heritage",
    strength: 5,
    consensus: "élevé",
    justification:
      "White a dirigé la thèse de doctorat de Granovetter à Harvard, lui insufflant l'intuition de l'analyse de réseau et l'encadrant lors de la rédaction de son article séminal sur les liens faibles.",
    sources: ["Mercklé, 2011, L'analyse des réseaux sociaux"],
  },
  {
    source: "harrison-white",
    target: "lazega",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Lazega s'appuie explicitement sur la théorie phénoménologique des réseaux de White pour construire sa sociologie néo-structurale, prolongeant l'idée que les réseaux forment le niveau intermédiaire entre l'action et la macro-structure.",
    sources: ["Lazega, 2006, Réseaux sociaux et structures relationnelles"],
  },
  {
    source: "mark-granovetter",
    target: "lazega",
    type: "dialogue",
    strength: 4,
    consensus: "élevé",
    justification:
      "Les deux auteurs animent les débats contemporains de la sociologie économique de réseau, Lazega complétant l'approche de l'encastrement de Granovetter par une modélisation plus poussée des dynamiques de pouvoir et d'organisation.",
    sources: ["Steiner, 1999, La sociologie économique"],
  },
  {
    source: "harold-garfinkel",
    target: "harvey-sacks",
    type: "heritage",
    strength: 5,
    consensus: "élevé",
    justification:
      "Sacks a collaboré étroitement avec Garfinkel au Center for the Scientific Study of Suicide de Los Angeles, s'appropriant la phénoménologie garfinkelienne pour l'appliquer à l'analyse empirique de la parole en interaction.",
    sources: ["Coulon, 1987, L'ethnométhodologie"],
  },
  {
    source: "erving-goffman",
    target: "harvey-sacks",
    type: "dialogue",
    strength: 4,
    consensus: "élevé",
    justification:
      "Sacks a été fortement stimulé par les cours de Goffman à Berkeley sur l'ordre de l'interaction, bien qu'il ait rejeté l'approche dramaturgique au profit d'un enregistrement et d'une transcription littérale et technique des conversations.",
    sources: ["Ritzer, 2011, Sociological Theory"],
  },
  {
    source: "talcott-parsons",
    target: "harold-garfinkel",
    type: "tension",
    strength: 5,
    consensus: "élevé",
    justification:
      "Garfinkel a rédigé sa thèse sous la direction de Parsons, mais il a construit l'ethnométhodologie en opposition frontale avec la conception parsonienne d'un acteur passif ayant intériorisé des normes globales préexistantes.",
    sources: ["Ansart, 1990, Les sociologies contemporaines"],
  },
];
