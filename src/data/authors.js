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

  {
    id: "peter-berger",
    name: "Peter L. Berger",
    school: "Constructivisme social / Sociologie de la connaissance",
    period: "1929–2017",
    birthYear: 1929,
    deathYear: 2017,
    x: 1000,
    y: 650,
    color: "#C2185B",

    concepts: ["Objectivation", "Institutionnalisation", "Socialisation secondaire"],

    works: [
      "La Construction sociale de la réalité (1966)",
      "Le Rumeur des anges (1969)",
    ],

    influences: ["Schütz", "Weber", "Marx", "Durkheim"],
    heirs: ["Dubar", "Corcuff", "Ian Hacking"],

    summary:
      "Sociologue américain d'origine autrichienne, il co-écrit un ouvrage fondateur qui révolutionne la sociologie de la connaissance en l'orientant vers la vie quotidienne. Avec Thomas Luckmann, il démontre comment la réalité sociale se construit à travers un processus dialectique permanent en trois étapes : l'extériorisation, l'objectivation et l'intériorisation. Ses travaux ultérieurs ont grandement enrichi la sociologie des religions et de la sécularisation.",

    constellation: "le-constructivisme-social",
    consensus: 5,
    classificationNote:
      "Peter Berger est universellement classé avec Luckmann comme le père du constructivisme social phénoménologique (Ritzer, Lallement). Bien que le terme 'constructivisme' englobe aujourd'hui des courants épistémologiques très divers (comme le constructivisme structuraliste de Bourdieu), l'Atlas le maintient au cœur de cette constellation pour sa modélisation précise de la dialectique individu-société.",
    sources: [
      "Lallement, 2000, Histoire des idées sociologiques",
      "Ritzer, 2011, Sociological Theory",
    ],
  },

  {
    id: "thomas-luckmann",
    name: "Thomas Luckmann",
    school: "Constructivisme social / Sociologie phénoménologique",
    period: "1927–2016",
    birthYear: 1927,
    deathYear: 2016,
    x: 1060,
    y: 690,
    color: "#D81B60",

    concepts: ["Univers symbolique", "Intériorisation"],

    works: [
      "La Construction sociale de la réalité (1966)",
      "The Structures of the Life-World (1973)",
    ],

    influences: ["Schütz", "Weber", "durkheim"],
    heirs: ["Knoblauch"],

    summary:
      "Sociologue germano-slovène, il a jeté les bases du constructivisme social en prolongeant l'œuvre phénoménologique d'Alfred Schütz. En collaboration avec Peter Berger, il décrit comment les représentations subjectives des acteurs se cristallisent en structures sociales objectives perçues comme naturelles. Il s'est également illustré par ses analyses fines de la communication, de l'identité et de la recomposition des formes religieuses modernes. Ses travaux continuent d'irriguer la sociologie de la connaissance contemporaine.",

    constellation: "le-constructivisme-social",
    consensus: 5,
    classificationNote:
      "Le consensus intellectuel fusionne presque systématiquement le nom de Luckmann avec celui de Berger dans la genèse du constructivisme social. Les manuels francophones (Ansart, Corcuff) le créditent d'une rigueur phénoménologique accrue issue de sa filiation directe avec Schütz, justifiant sa place indissociable au sein de l'Atlas.",
    sources: [
      "Corcuff, 2007, Les nouvelles sociologies",
      "Ansart, 1990, Les sociologies contemporaines",
    ],
  },

  {
    id: "claude-dubar",
    name: "Claude Dubar",
    school: "Sociologie des identités et du travail",
    period: "1945–2015",
    birthYear: 1945,
    deathYear: 2015,
    x: 950,
    y: 720,
    color: "#EC407A",

    concepts: ["Identité pour soi / pour autrui", "Crise des identités", "Forme identitaire"],

    works: [
      "La Socialisation : Construction des identités sociales et professionnelles (1991)",
      "La Crise des identités (2000)",
    ],

    influences: ["peter-berger", "thomas-luckmann", "Bourdieu", "Hughes"],
    heirs: [],

    summary:
      "Sociologue français majeur, il applique et approfondit la matrice théorique constructiviste au champ du travail, de la formation et des trajectoires professionnelles. Il conceptualise l'identité comme un processus dynamique issu de la dualité entre 'l'identité pour autrui' (les définitions institutionnelles) et 'l'identité pour soi' (l'histoire vécue). Ses travaux articulent magistralement les dimensions biographiques et structurelles du changement social. Son approche a durablement structuré la recherche francophone en sociologie du travail et de l'éducation.",

    constellation: "le-constructivisme-social",
    consensus: 4,
    classificationNote:
      "Dubar est unanimement salué dans le contexte universitaire francophone comme le grand passeur et l'adaptateur de l'œuvre de Berger et Luckmann pour la sociologie de la socialisation. Si certains classements thématiques le cantonnent à la sociologie du travail, l'Atlas choisit de l'inscrire dans le constructivisme social pour la portée transversale et processuelle de sa théorie de l'identité.",
    sources: [
      "Dubar, 1991, La Socialisation",
      "Demazière, 2016, Hommage à Claude Dubar",
    ],
  },

  {
    id: "max-horkheimer",
    name: "Max Horkheimer",
    school: "École de Francfort (Première génération)",
    period: "1895–1973",
    birthYear: 1895,
    deathYear: 1973,
    x: 1450,
    y: 180,
    color: "#4A235A",

    concepts: ["Théorie critique", "Raison instrumentale"],

    works: [
      "Théorie traditionnelle et théorie critique (1937)",
      "La Dialectique de la Raison (1944)",
    ],

    influences: ["Marx", "Hegel", "Freud", "Weber"],
    heirs: ["jürgen-habermas", "Axel Honneth"],

    summary:
      "Philosophe et sociologue allemand, il prend la direction de l'Institut de recherche sociale de Francfort en 1930 et jette les bases théoriques de l'École. Il formalise le projet d'une « théorie critique » en rupture avec la « théorie traditionnelle » positiviste, assignant aux sciences sociales l'objectif de libérer les êtres humains des structures de domination. Ses écrits co-signés avec Adorno dénoncent l'asservissement de la raison par le capitalisme monopolistique sous la forme de l'aliénation culturelle.",

    constellation: "la-theorie-critique",
    consensus: 5,
    classificationNote:
      "Le positionnement de Horkheimer comme le père fondateur et le directeur institutionnel de la première École de Francfort fait l'objet d'un consensus absolu dans l'ensemble des manuels d'histoire de la sociologie (Ritzer, Lallement, Assoun). L'Atlas le retient comme la figure tutélaire de cette constellation.",
    sources: [
      "Lallement, 2000, Histoire des idées sociologiques",
      "Ritzer, 2011, Sociological Theory",
    ],
  },

  {
    id: "theodor-w-adorno",
    name: "Theodor W. Adorno",
    school: "École de Francfort (Première génération)",
    period: "1903–1969",
    birthYear: 1903,
    deathYear: 1969,
    x: 1520,
    y: 140,
    color: "#6C3483",

    concepts: ["Industrie culturelle", "Personnalité autoritaire"],

    works: [
      "La Dialectique de la Raison (1944)",
      "Minima Moralia (1951)",
      "Études sur la personnalité autoritaire (1950)",
    ],

    influences: ["Marx", "Hegel", "Freud", "Weber"],
    heirs: ["jürgen-habermas"],

    summary:
      "Philosophe, sociologue et musicologue allemand, il est l'une des figures de proue de la première génération de l'École de Francfort. À travers une critique radicale de la modernité, il théorise le concept d'industrie culturelle pour démontrer comment la culture de masse standardise les consciences et désamorce tout potentiel de révolte politique. Ses enquêtes empiriques sur la personnalité autoritaire lient psychologie sociale et structures politiques pour expliquer les racines du fascisme. Son analyse critique de la culture continue d'irriguer la sociologie de la culture critique contemporaine.",

    constellation: "la-theorie-critique",
    consensus: 5,
    classificationNote:
      "Adorno est indiscutablement classé comme le cœur analytique et esthétique de la première théorie critique (Aron, Ritzer). Bien que ses travaux ultérieurs soient très philosophiques, son intégration au sein de l'Atlas est indispensable pour sa sociologie de la culture et des médias.",
    sources: [
      "Aron, 1967, Les étapes de la pensée sociologique",
      "Ritzer, 2011, Sociological Theory",
    ],
  },

  {
    id: "jürgen-habermas",
    name: "Jürgen Habermas",
    school: "École de Francfort (Deuxième génération)",
    period: "1929–présent",
    birthYear: 1929,
    deathYear: null,
    x: 1480,
    y: 260,
    color: "#884EA0",

    concepts: ["Agir communicationnel", "Espace public", "Monde vécu / Système"],

    works: [
      "L'Espace public (1962)",
      "Théorie de l'agir communicationnel (1981)",
    ],

    influences: ["max-horkheimer", "theodor-w-adorno", "Weber", "Mead"],
    heirs: ["Axel Honneth", "Nancy Fraser"],

    summary:
      "Chef de file de la deuxième génération de l'École de Francfort, il opère un tournant langagier majeur en substituant à la critique de la raison instrumentale une théorie de l'agir communicationnel. Il modélise la modernité comme une tension dialectique entre le 'système' (régulé par l'argent et le pouvoir administratifs) et le 'monde vécu' (structuré par la communication interconnectée). Il défend le projet inachevé des Lumières à travers le concept d'un espace public démocratique fondé sur l'éthique de la discussion. Son œuvre a directement nourri la sociologie politique délibérative contemporaine.",

    constellation: "la-theorie-critique",
    consensus: 5,
    classificationNote:
      "Habermas fait l'objet d'un consensus parfait à travers la littérature mondiale (Collins, Ansart, Keucheyan) en tant que reconstructeur de la théorie critique. Bien qu'il se détache du pessimisme anthropologique de ses maîtres pour intégrer des éléments de pragmatisme et de fonctionnalisme, l'Atlas le positionne au sommet de cette constellation pour sa refondation émancipatrice de l'école.",
    sources: [
      "Ansart, 1990, Les sociologies contemporaines",
      "Collins, 1994, Four Sociological Traditions",
    ],
  },

  {
    id: "henri-lefebvre",
    name: "Henri Lefebvre",
    school: "Marxisme hétérodoxe / Sociologie urbaine",
    period: "1901–1991",
    birthYear: 1901,
    deathYear: 1991,
    x: 50,
    y: 420,
    color: "#922B21",

    concepts: ["Critique de la vie quotidienne", "Production de l'espace", "Droit à la ville"],

    works: [
      "Critique de la vie quotidienne (1947)",
      "La Production de l'espace (1974)",
      "Le Droit à la ville (1968)",
    ],

    influences: ["Marx", "Hegel", "Nietzsche"],
    heirs: ["David Harvey", "Manuel Castells", "Jean Baudrillard"],

    summary:
      "Intellectuel et sociologue français, il rompt avec l'orthodoxie du Parti communiste pour développer une critique humaniste de la modernité. Pionnier de la sociologie de la vie quotidienne, il analyse comment le capitalisme colonise l'existence ordinaire à travers la marchandisation du temps et de l'espace. Son concept de « droit à la ville » a profondément influencé les mouvements urbains et la géographie critique mondiale en repensant la ville comme œuvre collective.",

    constellation: "la-sociologie-marxiste",
    consensus: 4,
    classificationNote:
      "Dans les manuels d'histoire des idées (Lallement, Ansart), Lefebvre est classé comme une figure majeure du marxisme critique francophone. Bien que certains sociologues anglo-saxons l'associent prioritairement à la géographie radicale ou aux études urbaines, l'Atlas le maintient dans la constellation marxiste pour sa fidélité à la dialectique et à la critique de l'aliénation marchande.",
    sources: [
      "Lallement, 2000, Histoire des idées sociologiques",
      "Ansart, 1990, Les sociologies contemporaines",
    ],
  },

  {
    id: "nicos-poulantzas",
    name: "Nicos Poulantzas",
    school: "Marxisme structuraliste",
    period: "1936–1979",
    birthYear: 1936,
    deathYear: 1979,
    x: 90,
    y: 480,
    color: "#B03A2E",

    concepts: ["Autonomie relative de l'État", "Condensation matérielle"],

    works: [
      "Pouvoir politique et classes sociales (1968)",
      "L'État, le pouvoir, le socialisme (1978)",
    ],

    influences: ["Marx", "Althusser", "Gramsci"],
    heirs: ["Bob Jessop"],

    summary:
      "Sociologue politique d'origine grecque ayant fait l'essentiel de sa carrière en France, il applique le structuralisme marxiste à l'analyse de l'État moderne. Opposé aux visions instrumentalistes, il théorise l'autonomie relative de l'État, qu'il définit non comme un simple outil de la bourgeoisie, mais comme la condensation matérielle d'un rapport de forces entre les classes. Ses débats avec Ralph Miliband ont marqué l'âge d'or de la théorie de l'État. Ses travaux ont durablement structuré les théories contemporaines de l'État.",

    constellation: "la-sociologie-marxiste",
    consensus: 5,
    classificationNote:
      "Poulantzas est universellement répertorié par les manuels de sociologie politique (Ritzer, Collins) comme le théoricien le plus influent du structuralisme marxiste appliqué aux institutions politiques. L'Atlas valide son intégration dans cette constellation en raison de son rôle pivot dans la formalisation macro-sociologique des structures de pouvoir.",
    sources: [
      "Ritzer, 2011, Sociological Theory",
      "Collins, 1994, Four Sociological Traditions",
    ],
  },

  {
    id: "bruno-latour",
    name: "Bruno Latour",
    school: "Théorie de l'acteur-réseau (ANT) / STS",
    period: "1947–2022",
    birthYear: 1947,
    deathYear: 2022,
    x: 1300,
    y: 600,
    color: "#0B5345",

    concepts: ["Actant", "Principe de symétrie généralisée", "Traduction"],

    works: [
      "La Vie de laboratoire (1979)",
      "Nous n'avons jamais été modernes (1991)",
      "Changer de société - Refaire de la sociologie (2005)",
    ],

    influences: ["Serres", "Greimas", "harold-garfinkel", "harrison-white"],
    heirs: ["michel-callon", "susan-leigh-star", "Philippe Descola"],

    summary:
      "Sociologue et anthropologue des sciences français, il est l'un des principaux fondateurs de la théorie de l'acteur-réseau. Il révolutionne les sciences sociales en introduisant le principe de symétrie généralisée, qui accorde une capacité d'action (agency) aux non-humains au même titre qu'aux humains. Ses enquêtes de laboratoire redéfinissent l'activité scientifique non comme une pure découverte de faits objectifs, mais comme une construction de réseaux d'associations de plus en plus vastes. Son approche a directement inspiré le courant de l'écologie politique contemporaine.",

    constellation: "theorie-de-l-acteur-reseau-et-sts",
    consensus: 5,
    classificationNote:
      "Dans les manuels récents (Corcuff, Ritzer, Keucheyan), Latour est classé comme le chef de file du tournant constructiviste radical ou de la sociologie des associations. Si certains manuels classiques l'oublient ou le cantonnent à la sociologie des sciences sectorielle, l'Atlas choisit d'ouvrir une constellation dédiée pour acter sa rupture épistémologique majeure avec le social pur.",
    sources: [
      "Corcuff, 2007, Les nouvelles sociologies",
      "Ritzer, 2011, Sociological Theory",
    ],
  },

  {
    id: "michel-callon",
    name: "Michel Callon",
    school: "École des Mines / STS",
    period: "1945–2025",
    birthYear: 1945,
    deathYear: 2025,
    x: 1370,
    y: 650,
    color: "#117864",

    concepts: ["Performativité de l'économie", "Enrôlement", "Controverse sociotechnique"],

    works: [
      "Éléments pour une sociologie de la traduction (1986)",
      "L'Emprise des marchés (2017)",
    ],

    influences: ["bruno-latour", "harrison-white"],
    heirs: ["Donald MacKenzie"],

    summary:
      "Sociologue et ingénieur français, il co-développe la théorie de l'acteur-réseau en insistant sur les processus de problématisation et d'intéressement à travers lesquels les innovateurs enrôlent des alliés humains et matériels. Ses travaux ultérieurs sur la sociologie des marchés et la performativité de l'économie démontrent que l'économie ne se contente pas de décrire les marchés, mais qu'elle les configure techniquement. Il a également grandement contribué à l'étude des controverses sociotechniques et de la démocratie technique. Ses travaux ont fondé un pan entier de la sociologie économique des agencements marchands.",

    constellation: "theorie-de-l-acteur-reseau-et-sts",
    consensus: 5,
    classificationNote:
      "Callon est indissociable de Latour dans la fondation de l'ANT (Grossetti, Lallement). Bien que parfois capté par la sociologie économique contemporaine pour ses travaux sur les marchés, l'Atlas le maintient dans la constellation ANT/STS en raison de sa conceptualisation fondamentale de la traduction et du réseau hétérogène.",
    sources: [
      "Lallement, 2000, Histoire des idées sociologiques",
      "Grossetti, 2004, Sociologie de l'imprévisibilité",
    ],
  },

  {
    id: "susan-leigh-star",
    name: "Susan Leigh Star",
    school: "Infrastructure Studies / École de San Francisco",
    period: "1954–2010",
    birthYear: 1954,
    deathYear: 2010,
    x: 1330,
    y: 720,
    color: "#45B39D",

    concepts: ["Objet-frontière", "Inversion infrastructurale"],

    works: ["Sorting Things Out: Classification and Its Consequences (1999)"],

    influences: ["Hughes", "becker", "bruno-latour"],
    heirs: ["Geoffrey Bowker", "Paul Dourish"],

    summary:
      "Sociologue américaine s'inscrivant à l'intersection des STS, du pragmatisme et du féminisme, elle est une figure clé des Infrastructure Studies. Elle étudie les structures invisibles, les standards et les classifications qui soutiennent notre monde matériel, révélant la dimension politique et morale logée dans le design technique. Son concept de « objet-frontière » explique comment des groupes hétérogènes parviennent à coopérer sans pour autant partager le même point de vue. Son approche continue d'irriguer aujourd'hui le champ des Design Studies.",

    constellation: "theorie-de-l-acteur-reseau-et-sts",
    consensus: 4,
    classificationNote:
      "Star est souvent classée par la littérature anglophone comme une figure pivot liant l'interactionnisme symbolique de l'école de Chicago (via Becker et Hughes) aux théories des réseaux et des infrastructures matérielles. L'Atlas choisit de l'insérer dans la constellation ANT/STS pour montrer le pont organique qu'elle jette entre la microsociologie du travail et l'analyse de la matérialité.",
    sources: [
      "Ritzer, 2011, Sociological Theory",
      "Star, 2010, Infrastructure and Ethnography",
    ],
  },

  {
    id: "anthony-giddens",
    name: "Anthony Giddens",
    school: "Théorie de la structuration",
    period: "1938–présent",
    birthYear: 1938,
    deathYear: null,
    x: 600,
    y: 350,
    color: "#B7950B",

    concepts: ["Dualité du structurel", "Double herméneutique", "Conscience pratique"],

    works: [
      "La Constitution de la société (1984)",
      "Les Conséquences de la modernité (1990)",
    ],

    influences: ["Durkheim", "Weber", "Marx", "Schütz"],
    heirs: ["Wanda Orlikowski", "Rob Stones"],

    summary:
      "Sociologue britannique incontournable, il formule la théorie de la structuration pour dépasser l'opposition traditionnelle entre objectivisme structural et subjectivisme individuel. Il introduit le concept central de « dualité du structurel », postulant que les structures sociales sont à la fois le moyen et le résultat des pratiques des acteurs. Son œuvre propose également une analyse profonde de la modernité avancée et de la réflexivité institutionnelle. Sa théorie continue de structurer un large pan des sociologies contemporaines de la modernité.",

    constellation: "la-theorie-de-la-structuration",
    consensus: 5,
    classificationNote:
      "Anthony Giddens est reconnu de manière unanime par les manuels de référence (Ritzer, Lallement, Corcuff) comme l'architecte unique et le théoricien exclusif de la théorie de la structuration. L'Atlas le classe comme la figure centrale de cette constellation synthétique.",
    sources: [
      "Lallement, 2000, Histoire des idées sociologiques",
      "Corcuff, 2007, Les nouvelles sociologies",
    ],
  },
];
