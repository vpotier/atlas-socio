export const authors = [
  {
    id: "durkheim",
    name: "Émile Durkheim",
    school: "École durkheimienne",
    period: "1858–1917",
    birthYear: 1858,
    deathYear: 1917,
    x: 165,
    y: 185,
    color: "#2E6DB4",

    concepts: ["Fait social", "Solidarité", "Anomie"],

    works: [
      "De la division du travail social",
      "Les Règles de la méthode sociologique",
      "Le Suicide",
      "Les Formes élémentaires de la vie religieuse",
    ],

    influences: ["Comte", "Saint-Simon"],
    heirs: ["Mauss", "Halbwachs", "Bourdieu"],

    summary:
      "Fondateur de la sociologie française. Il explique les phénomènes sociaux par des faits sociaux extérieurs aux individus.",

    constellation: "durkheimien",
    consensus: 5,
    classificationNote:
      "Unanimement reconnu comme fondateur de l'école française de sociologie ; aucun désaccord significatif relevé dans les classifications consultées.",
    sources: [
      "Coenen-Huther, 2003, Sociologie",
      "Fournier, 2007, Émile Durkheim",
    ],
  },

  {
    id: "weber",
    name: "Max Weber",
    school: "Sociologie compréhensive",
    period: "1864–1920",
    birthYear: 1864,
    deathYear: 1920,
    x: 720,
    y: 180,
    color: "#B53B3B",

    concepts: ["Action sociale", "Domination", "Idéal-type"],

    works: [
      "Économie et société",
      "Le Savant et le Politique",
      "L'Éthique protestante",
    ],

    influences: ["Nietzsche", "Rickert"],
    heirs: ["Aron", "Boudon"],

    summary:
      "Fondateur de la sociologie compréhensive. Il cherche à comprendre le sens que les individus donnent à leurs actions.",

    constellation: "weberien",
    consensus: 4,
    classificationNote:
      "Généralement rattaché à une tradition germanique distincte de la sociologie française ; certains manuels le classent avec les fondateurs de l'individualisme méthodologique plutôt que comme chef d'école à part entière. Pour l'Atlas, nous le retenons comme fondateur autonome en raison de son influence directe et documentée sur plusieurs lignées ultérieures.",
    sources: [
      "Aron, 1967, Les Étapes de la pensée sociologique",
      "Boudon & Bourricaud, 1982, Dictionnaire critique de la sociologie",
    ],
  },

  {
    id: "bourdieu",
    name: "Pierre Bourdieu",
    school: "Structuralisme constructiviste",
    period: "1930–2002",
    birthYear: 1930,
    deathYear: 2002,
    x: 420,
    y: 405,
    color: "#86B53F",

    concepts: ["Habitus", "Champ", "Capital"],

    works: [
      "La Distinction",
      "Le Sens pratique",
      "Les Héritiers",
      "Méditations pascaliennes",
    ],

    influences: ["Durkheim", "Weber", "Marx"],
    heirs: ["Lahire", "Boltanski", "Wacquant"],

    summary:
      "Il articule structures sociales et pratiques individuelles grâce aux notions d'habitus, de champ et de capitaux.",

    constellation: "bourdieusien",
    consensus: 5,
    classificationNote:
      "Dans plusieurs classifications, Bourdieu est rattaché au structuralisme (notion de structure) ou au marxisme (analyse des rapports de domination). Pour l'Atlas, nous le retenons comme fondateur d'un programme théorique autonome, la synthèse habitus/champ/capital n'étant pleinement couverte par aucune de ces étiquettes.",
    sources: [
      "Corcuff, 2003, Bourdieu autrement",
      "Lahire (dir.), 1999, Le travail sociologique de Pierre Bourdieu",
    ],
  },

  {
    id: "bronislaw-malinowski",
    name: "Bronisław Malinowski",
    school: "Fonctionnalisme anthropologique",
    period: "1884–1942",
    birthYear: 1884,
    deathYear: 1942,
    x: 880,
    y: 500,
    color: "#E67E22",

    concepts: ["Besoin fondamental", "Institution"],

    works: [
      "Les Argonautes du Pacifique occidental (1922)",
      "Une théorie scientifique de la culture (1944)",
    ],

    influences: ["Durkheim", "Frazer"],
    heirs: ["Radcliffe-Brown", "talcott-parsons"],

    summary:
      "Anthropologue d'origine polonaise, il pose les bases du fonctionnalisme en postulant que chaque élément d'une culture répond à un besoin biologique ou psychologique humain fondamental. Sa méthode d'observation participante a profondément renouvelé l'analyse des institutions sociales.",

    constellation: "fonctionnalisme",
    consensus: 4,
    classificationNote:
      "Dans la majorité des manuels transdisciplinaires (Ritzer, Cuche), Malinowski est classé comme le père du fonctionnalisme absolu. Bien que certains classements stricts en sciences politiques ou en anthropologie pure l'excluent de la sociologie, l'Atlas choisit de l'intégrer comme point d'ancrage méthodologique et conceptuel de la constellation fonctionnaliste.",
    sources: [
      "Ritzer, 2011, Sociological Theory",
      "Cuche, 2010, La notion de culture dans les sciences sociales",
    ],
  },

  {
    id: "talcott-parsons",
    name: "Talcott Parsons",
    school: "Structuralo-fonctionnalisme",
    period: "1902–1979",
    birthYear: 1902,
    deathYear: 1979,
    x: 980,
    y: 440,
    color: "#D35400",

    concepts: ["Modèle AGIL", "Action sociale"],

    works: [
      "The Structure of Social Action (1937)",
      "The Social System (1951)",
    ],

    influences: ["Durkheim", "Weber", "Pareto"],
    heirs: ["robert-k-merton", "Alexander", "Luhmann"],

    summary:
      "Figure centrale de la sociologie américaine du XXe siècle, il élabore une théorie générale de l'action sociale à visée systémique et universelle. Son modèle AGIL formalise les quatre impératifs fonctionnels indispensables à l'équilibre de tout système social.",

    constellation: "fonctionnalisme",
    consensus: 5,
    classificationNote:
      "Le consensus est total à travers les manuels de référence (Aron, Rocher, Ritzer) pour situer Parsons au sommet du structuralo-fonctionnalisme. Même si le néo-fonctionnalisme porté par Jeffrey Alexander en propose des lectures révisées, l'Atlas maintient Parsons comme l'idéal-type du fonctionnalisme systémique global.",
    sources: [
      "Rocher, 1972, Talcott Parsons et la sociologie américaine",
      "Ritzer, 2011, Sociological Theory",
    ],
  },

  {
    id: "robert-k-merton",
    name: "Robert K. Merton",
    school: "Fonctionnalisme de moyenne portée",
    period: "1910–2003",
    birthYear: 1910,
    deathYear: 2003,
    x: 900,
    y: 610,
    color: "#F39C12",

    concepts: [
      "Fonction manifeste et latente",
      "Théorie de moyenne portée",
      "Équivalent fonctionnel",
    ],

    works: [
      "Social Theory and Social Structure (1949)",
      "Science, Technology and Society in Seventeenth-Century England (1938)",
    ],

    influences: ["Durkheim", "talcott-parsons", "Sorokin"],
    heirs: ["Boudon", "Coleman"],

    summary:
      "Sociologue américain majeur, il assouplit le cadre fonctionnaliste parsonien en rejetant les postulats d'unité et de fonctionnalisme universel. Il introduit la distinction entre fonctions manifestes et latentes, et plaide pour des théories de moyenne portée.",

    constellation: "fonctionnalisme",
    consensus: 5,
    classificationNote:
      "Merton est universellement répertorié comme le théoricien du fonctionnalisme tempéré ou relativisé (Boudon & Bourricaud, Ansart). Si les sociologues de la déviance l'associent parfois à leur propre champ thématique en raison de ses écrits sur l'anomie, l'Atlas valide son inclusion dans la constellation fonctionnaliste pour sa refondation interne du paradigme.",
    sources: [
      "Boudon & Bourricaud, 1982, Dictionnaire critique de la sociologie",
      "Ansart, 1990, Les sociologies contemporaines",
    ],
  },
];
