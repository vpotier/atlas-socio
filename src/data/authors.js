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

  {
    id: "raymond-boudon",
    name: "Raymond Boudon",
    school: "Individualisme méthodologique",
    period: "1934–2013",
    birthYear: 1934,
    deathYear: 2013,
    x: 200,
    y: 550,
    color: "#8E44AD",

    concepts: ["Effet pervers", "Rationalité cognitive", "Effet d'agrégation"],

    works: [
      "L'Inégalité des chances (1973)",
      "Effets pervers et ordre social (1977)",
      "Dictionnaire critique de la sociologie (1982)",
    ],

    influences: ["Weber", "Simmel", "robert-k-merton"],
    heirs: ["Mohamed Cherkaoui", "Bernard Valade"],

    summary:
      "Chef de file de l'individualisme méthodologique en France, il démontre que les phénomènes collectifs résultent de l'agrégation d'actions individuelles. Il développe le concept d'effet pervers pour expliquer comment des choix rationnels produisent des résultats collectifs non intentionnels et souvent indésirables. Son approche défend une conception élargie de la rationalité, dite cognitive ou axiologique.",

    constellation: "l-individualisme-methodologique",
    consensus: 5,
    classificationNote:
      "Le positionnement de Boudon comme figure de proue francophone de l'individualisme méthodologique fait l'objet d'un consensus absolu dans l'ensemble des manuels universitaires (Dubar, Ansart, Lallement). Bien que certains courants économiques libéraux tentent de réduire son œuvre à la théorie des choix rationnels, l'Atlas maintient sa classification sociologique spécifique basée sur sa critique du réductionnisme utilitariste.",
    sources: [
      "Ansart, 1990, Les sociologies contemporaines",
      "Lallement, 2000, Histoire des idées sociologiques",
    ],
  },

  {
    id: "james-coleman",
    name: "James Coleman",
    school: "Théorie du choix rationnel",
    period: "1926–1995",
    birthYear: 1926,
    deathYear: 1995,
    x: 320,
    y: 610,
    color: "#9B59B6",

    concepts: ["Diagramme de Coleman", "Acteur rationnel"],

    works: [
      "The Asymmetric Society (1982)",
      "Foundations of Social Theory (1990)",
    ],

    influences: ["Weber", "robert-k-merton"],
    heirs: ["Peter Hedström"],

    summary:
      "Sociologue américain majeur, il formalise le passage du niveau micro-sociologique au niveau macro-sociologique à l'aide de sa célèbre « formule du bateau » (diagramme de Coleman). Il utilise la théorie mathématique des choix rationnels pour modéliser le comportement des acteurs au sein des structures sociales. Ses travaux ont directement inspiré la fondation de la sociologie analytique, courant contemporain qui formalise l'étude des mécanismes sociaux.",

    constellation: "l-individualisme-methodologique",
    consensus: 5,
    classificationNote:
      "Coleman est unanimement classé par les manuels internationaux (Ritzer, Collins) comme le principal importateur de la théorie économique de l'action rationnelle en sociologie. L'Atlas le rattache fermement à l'individualisme méthodologique pour sa contribution décisive à l'articulation micro-macro.",
    sources: [
      "Ritzer, 2011, Sociological Theory",
      "Collins, 1994, Four Sociological Traditions",
    ],
  },

  {
    id: "herbert-blumer",
    name: "Herbert Blumer",
    school: "École de Chicago (Deuxième génération)",
    period: "1900–1987",
    birthYear: 1900,
    deathYear: 1987,
    x: 560,
    y: 630,
    color: "#16A085",

    concepts: ["Interactionnisme symbolique", "Processus d'interprétation"],

    works: ["Symbolic Interactionism: Perspective and Method (1969)"],

    influences: ["Mead", "Thomas"],
    heirs: ["erving-goffman", "becker"],

    summary:
      "Sociologue américain et disciple de George Herbert Mead, il forge l'expression « interactionnisme symbolique » en 1937. Il formalise le courant autour de trois postulats : les humains agissent à l'égard des choses en fonction du sens que celles-ci ont pour eux, ce sens dérive de l'interaction sociale, et il est modifié par l'interprétation. Il défend une posture méthodologique inductive et qualitative, opposée au positivisme quantitatif.",

    constellation: "l-interactionnisme-symbolique",
    consensus: 5,
    classificationNote:
      "Blumer est unanimement reconnu par les manuels de référence (Ritzer, Lallement, Le Breton) comme le théoricien en chef et le baptiseur du courant. L'Atlas le retient comme la figure doctrinale de cette constellation, pivot indispensable entre la philosophie pragmatiste et la recherche sociologique empirique.",
    sources: [
      "Lallement, 2000, Histoire des idées sociologiques",
      "Le Breton, 2004, L'interactionnisme symbolique",
    ],
  },

  {
    id: "erving-goffman",
    name: "Erving Goffman",
    school: "Sociologie de la vie quotidienne",
    period: "1922–1982",
    birthYear: 1922,
    deathYear: 1982,
    x: 630,
    y: 680,
    color: "#1ABC9C",

    concepts: ["Approche dramaturgique", "Institution totale", "Façonnage du cadre"],

    works: [
      "La Présentation de soi (1956)",
      "Asiles (1961)",
      "Les Rites d'interaction (1967)",
    ],

    influences: ["Mead", "herbert-blumer", "Hughes"],
    heirs: [],

    summary:
      "Observateur minutieux des rituels de la vie quotidienne, il développe une approche dramaturgique de l'espace social où chaque individu est un acteur gérant l'impression qu'il donne aux autres. Ses travaux sur les « institutions totales » mettent en lumière les mécanismes d'altération de l'identité individuelle par les structures asilaires ou carcérales. Il formalise également la notion de cadre pour expliquer comment les individus structurent leur expérience de la réalité. Ses travaux ont directement influencé les analystes de conversation ainsi que les sociologues des médias contemporains.",

    constellation: "l-interactionnisme-symbolique",
    consensus: 4,
    classificationNote:
      "Si le rattachement de Goffman à l'école de Chicago et à l'interactionnisme est majoritaire (Ansart, Coenen-Huther), certains auteurs préfèrent l'isoler sous l'étiquette de la « microsociologie » ou de la « sociologie dramaturgique » en raison de sa singularité. L'Atlas fait le choix de l'intégrer à l'interactionnisme symbolique car son œuvre repose entièrement sur la négociation du sens en face-à-face.",
    sources: [
      "Coenen-Huther, 2003, Le fonctionnalisme modifié : de la métaphore à l'outil",
      "Ansart, 1990, Les sociologies contemporaines",
    ],
  },

  {
    id: "becker",
    name: "Howard S. Becker",
    school: "Sociologie de la déviance / École de Chicago",
    period: "1928–2023",
    birthYear: 1928,
    deathYear: 2023,
    x: 500,
    y: 690,
    color: "#48C9B0",

    concepts: ["Théorie de l'étiquetage", "Carrière déviante", "Entrepreneur de morale"],

    works: [
      "Outsiders (1963)",
      "Les Mondes de l'art (1982)",
      "Les Ficelles du métier (1998)",
    ],

    influences: ["Hughes", "herbert-blumer"],
    heirs: [],

    summary:
      "Figure centrale de la seconde École de Chicago, il renouvelle la sociologie de la déviance en élaborant la théorie de l'étiquetage, démontrant que la déviance n'est pas une qualité de l'acte mais le produit d'une interaction et d'une qualification sociale. Par ses enquêtes sur les musiciens de jazz et les fumeurs de marijuana, il théorise la notion de « carrière déviante ». Il a également profondément marqué la sociologie de l'art. Son approche a nourri la sociologie des problèmes publics ainsi que le courant ethnométhodologique.",

    constellation: "l-interactionnisme-symbolique",
    consensus: 5,
    classificationNote:
      "Le consensus est total dans les manuels francophones (Dubar, Lallement) et internationaux pour faire de Becker le digne représentant empirique de l'interactionnisme symbolique appliqué à la déviance et aux professions. Sa classification au sein de cette constellation est indiscutable.",
    sources: [
      "Dubar, 2000, La socialisation",
      "Lallement, 2000, Histoire des idées sociologiques",
    ],
  },

  {
    id: "harrison-white",
    name: "Harrison White",
    school: "École de Harvard / Analyse des réseaux",
    period: "1930–2024",
    birthYear: 1930,
    deathYear: 2024,
    x: 1150,
    y: 320,
    color: "#1F618D",

    concepts: ["Réseau social", "Équivalence structurale", "Encastrement"],

    works: [
      "Chains of Opportunity (1970)",
      "Identity and Control: A Structural Theory of Social Action (1992)",
    ],

    influences: ["Lévi-Strauss", "Simmel"],
    heirs: ["mark-granovetter", "lazega", "Barry Wellman"],

    summary:
      "Physicien de formation devenu sociologue, il est le père fondateur de l'analyse structurale moderne et de la sociologie des réseaux. Il rejette les explications fondées sur les attributs psychologiques individuels ou les catégories macro-sociales figées pour se concentrer sur la géométrie des liens sociaux. Son modèle mathématique des blocs et son approche des marchés ont profondément redéfini la micro-macro-sociologie en montrant que les identités émergent des formations de réseaux.",

    constellation: "l-interactionnisme-structural",
    consensus: 5,
    classificationNote:
      "Harrison White est classé sans équivoque par la littérature méthodologique francophone (Mercklé, Grossetti) comme le pivot du structuralisme de réseau. Alors que les manuels américains l'isolent parfois dans la sociologie mathématique pure, l'Atlas l'inscrit dans l'interactionnisme structural pour sa vision dynamique où l'interaction produit la structure, qui en retour façonne l'action.",
    sources: [
      "Mercklé, 2011, L'analyse des réseaux sociaux",
      "Ritzer, 2011, Sociological Theory",
    ],
  },

  {
    id: "mark-granovetter",
    name: "Mark Granovetter",
    school: "Nouvelle sociologie économique",
    period: "1943–présent",
    birthYear: 1943,
    deathYear: null,
    x: 1250,
    y: 260,
    color: "#2E86C1",

    concepts: ["Force des liens faibles", "Encastrement social"],

    works: [
      "The Strength of Weak Ties (1973)",
      "Society and Economy: Framework and Principles (2017)",
    ],

    influences: ["harrison-white"],
    heirs: [],

    summary:
      "Sociologue américain de premier plan, il introduit la célèbre distinction entre « liens forts » et « liens faibles », démontrant la valeur informationnelle cruciale des relations distantes pour l'accès à l'emploi. Il forge également le concept d'encastrement (embeddedness) pour signifier que les actions économiques restent insérées dans des réseaux de relations personnelles concrètes. Ses modèles d'action collective à seuil lient finement choix individuels et dynamiques de réseaux. Ses travaux ont fondé une grande partie de la sociologie économique contemporaine.",

    constellation: "l-interactionnisme-structural",
    consensus: 5,
    classificationNote:
      "Granovetter fait l'objet d'un consensus parfait comme figure de proue de la sociologie des réseaux et de la nouvelle sociologie économique (Boudon, Steiner). Bien qu'il dialogue intensément avec la science économique, l'Atlas le positionne dans l'interactionnisme structural en raison de son ancrage méthodologique dans la morphologie des relations interindividuelles.",
    sources: [
      "Steiner, 1999, La sociologie économique",
      "Mercklé, 2011, L'analyse des réseaux sociaux",
    ],
  },

  {
    id: "lazega",
    name: "Emmanuel Lazega",
    school: "Sociologie néo-structurale",
    period: "1956–présent",
    birthYear: 1956,
    deathYear: null,
    x: 1180,
    y: 420,
    color: "#5499C7",

    concepts: ["Régulation collégiale", "Triade relationnelle"],

    works: [
      "The Collegial Organization and a New Sociology of Professional Behavior (2001)",
      "Réseaux sociaux et structures relationnelles (2006)",
    ],

    influences: ["harrison-white", "coleman", "Bourdieu"],
    heirs: [],

    summary:
      "Sociologue français contemporain, il formalise le programme de la sociologie néo-structurale en combinant l'analyse des réseaux sociaux et l'étude des organisations. À travers ses enquêtes approfondies sur les cabinets d'avocats ou les tribunaux de commerce, il théorise les processus d'action collective, de contrôle social et de régulation par les pairs au sein des structures d'interdépendance. Il montre comment le capital social individuel se convertit en ressources collectives ou en asymétries de pouvoir. Ses travaux irriguent aujourd'hui l'ensemble de la recherche francophone en analyse de réseaux.",

    constellation: "l-interactionnisme-structural",
    consensus: 4,
    classificationNote:
      "Lazega est reconnu en contexte académique francophone (Dubar, Demazière) comme l'importateur et le principal développeur de l'analyse structurale de réseau appliquée aux organisations de professionnels. Certains classements le rangent plutôt en sociologie des organisations, mais l'Atlas retient son positionnement au sein de l'interactionnisme structural pour sa fidélité aux postulats morphologiques de Harrison White.",
    sources: [
      "Lazega, 2006, Réseaux sociaux et structures relationnelles",
      "Dubar, 2000, La socialisation",
    ],
  },

  {
    id: "harold-garfinkel",
    name: "Harold Garfinkel",
    school: "Ethnométhodologie",
    period: "1917–2011",
    birthYear: 1917,
    deathYear: 2011,
    x: 760,
    y: 630,
    color: "#7E5109",

    concepts: ["Indexicalité", "Réflexivité", "Accomplissement pratique"],

    works: ["Studies in Ethnomethodology (1967)", "Seeing Sociologically (2006)"],

    influences: ["Schütz", "talcott-parsons"],
    heirs: ["harvey-sacks", "Aaron Cicourel", "Louis Quéré"],

    summary:
      "Fondateur de l'ethnométhodologie, il rompt radicalement avec le structuralisme pour étudier les méthodes que les acteurs utilisent au quotidien pour rendre leur monde intelligible et ordonné. Il conçoit l'ordre social non comme une structure préexistante, mais comme une réalisation pratique continue. Ses célèbres « expériences de brèche » visaient à briser délibérément les routines quotidiennes pour révéler les attentes implicites qui sous-tendent les interactions sociales.",

    constellation: "l-ethnomethodologie",
    consensus: 5,
    classificationNote:
      "Le consensus est absolu à travers les manuels (Ritzer, Coulon, Lallement) pour désigner Garfinkel comme le père fondateur incontesté de l'ethnométhodologie. Même si ses approches radicales ont suscité de vives controverses académiques en sociologie générale, l'Atlas le retient comme le pivot doctrinal de cette constellation.",
    sources: [
      "Coulon, 1987, L'ethnométhodologie",
      "Ritzer, 2011, Sociological Theory",
    ],
  },

  {
    id: "harvey-sacks",
    name: "Harvey Sacks",
    school: "Analyse de conversation",
    period: "1935–1975",
    birthYear: 1935,
    deathYear: 1975,
    x: 830,
    y: 690,
    color: "#9C640C",

    concepts: ["Analyse de conversation", "Prise de tour", "Paire adjacente"],

    works: ["Lectures on Conversation (1992)"],

    influences: ["harold-garfinkel", "erving-goffman"],
    heirs: ["Emanuel Schegloff", "Deirdre Boden"],

    summary:
      "Disciple de Garfinkel, il applique les principes ethnométhodologiques à l'étude fine du langage oral en devenant le pionnier de l'analyse de conversation. Il démontre que la parole quotidienne est rigoureusement structurée par des règles d'organisation séquentielle et des mécanismes de prise de tour de parole. Ses travaux ont prouvé que les micro-détails de l'interaction verbale constituent un ordre social autonome et hautement ordonné. Son approche continue d'irriguer la sociolinguistique francophone contemporaine.",

    constellation: "l-ethnomethodologie",
    consensus: 5,
    classificationNote:
      "Sacks est universellement classé comme le fondateur de la branche conversationnelle de l'ethnométhodologie (Coulon, Ritzer). Bien que ses successeurs directs aient parfois autonomisé l'Analyse de Conversation (CA) en tant que discipline à part entière à l'interface de la linguistique, l'Atlas maintient Sacks dans cette constellation car son projet initial reste ancré dans la résolution sociologique de l'ordre social.",
    sources: [
      "Coulon, 1987, L'ethnométhodologie",
      "Heritage, 1984, Garfinkel and Ethnomethodology",
    ],
  },
];
