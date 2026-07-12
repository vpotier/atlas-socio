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
  {
    source: "peter-berger",
    target: "thomas-luckmann",
    type: "dialogue",
    strength: 5,
    consensus: "élevé",
    justification:
      "Berger et Luckmann ont co-écrit l'un des livres les plus influents du XXe siècle, unifiant leurs perspectives pour forger le paradigme du constructivisme social dans une complicité intellectuelle totale.",
    sources: ["Ritzer, 2011, Sociological Theory"],
  },
  {
    source: "peter-berger",
    target: "claude-dubar",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Dubar s'approprie explicitement la théorie de la socialisation primaire et secondaire formalisée par Berger et Luckmann, en l'utilisant comme socle conceptuel pour bâtir son modèle de la socialisation professionnelle.",
    sources: ["Dubar, 1991, La Socialisation"],
  },
  {
    source: "max-horkheimer",
    target: "theodor-w-adorno",
    type: "dialogue",
    strength: 5,
    consensus: "élevé",
    justification:
      "Compagnons d'exil et collaborateurs intimes pendant plus de trois décennies, Horkheimer et Adorno ont co-écrit les textes les plus emblématiques de l'École de Francfort, fusionnant leurs pensées au point de rendre leurs contributions souvent indissociables.",
    sources: ["Assoun, 1987, L'École de Francfort"],
  },
  {
    source: "max-horkheimer",
    target: "jürgen-habermas",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Habermas a été l'assistant de formation de Horkheimer à l'Institut de Francfort, héritant de l'ambition de construire une science sociale interdisciplinaire ancrée dans la critique sociale malgré des frictions quant au radicalisme politique du jeune Habermas.",
    sources: ["Ritzer, 2011, Sociological Theory"],
  },
  {
    source: "theodor-w-adorno",
    target: "jürgen-habermas",
    type: "tension",
    strength: 4,
    consensus: "élevé",
    justification:
      "Tout en revendiquant la filiation, Habermas rompt avec le pessimisme radical et l'impasse esthétique d'Adorno concernant la modernité. Il reproche à la première génération de ne pas proposer de fondement normatif positif pour l'émancipation réelle des institutions.",
    sources: [
      "Keucheyan, 2010, Hémisphère gauche : Une cartographie des nouvelles pensées critiques",
    ],
  },
  {
    source: "henri-lefebvre",
    target: "nicos-poulantzas",
    type: "tension",
    strength: 4,
    consensus: "élevé",
    justification:
      "Une opposition épistémologique profonde sépare la sociologie humaniste et existentielle de Lefebvre du structuralisme antihumaniste et rigide incarné par Poulantzas (et Althusser) au cours des années 1960 et 1970.",
    sources: [
      "Keucheyan, 2010, Hémisphère gauche : Une cartographie des nouvelles pensées critiques",
    ],
  },
  {
    source: "bruno-latour",
    target: "michel-callon",
    type: "dialogue",
    strength: 5,
    consensus: "élevé",
    justification:
      "Partenaires de recherche historiques au Centre de sociologie de l'innovation (CSI) de l'École des Mines, Latour et Callon ont co-écrit les textes fondateurs de la théorie de l'acteur-réseau, articulant ensemble la sociologie des sciences.",
    sources: ["Corcuff, 2007, Les nouvelles sociologies"],
  },
  {
    source: "harold-garfinkel",
    target: "bruno-latour",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Latour s'est massivement inspiré de l'ethnométhodologie de Garfinkel pour mener ses premières enquêtes de laboratoire, adoptant une posture d'anthropologue naïf qui refuse d'expliquer les pratiques scientifiques par des structures sociales a priori.",
    sources: ["Ritzer, 2011, Sociological Theory"],
  },
  {
    source: "becker",
    target: "susan-leigh-star",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Formée dans la lignée de la tradition de Chicago, Star applique la méthode ethnographique fine de la sociologie des professions et du travail (proche de Becker) à l'étude technique des ordinateurs et des classifications d'infrastructures.",
    sources: ["Star, 1999, Sorting Things Out"],
  },
  {
    source: "bruno-latour",
    target: "susan-leigh-star",
    type: "dialogue",
    strength: 4,
    consensus: "élevé",
    justification:
      "Tout en partageant l'intérêt de Latour pour les réseaux techniques et la matérialité, Star nuance l'ANT en y réintroduisant l'étude des exclus, des échecs d'alignement et de la souffrance silencieuse causée par les standards rigides.",
    sources: ["Star, 2010, Infrastructure and Ethnography"],
  },
  {
    source: "levi-strauss",
    target: "althusser",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "Le structuralisme lévi-straussien prend une connotation marxiste avec Althusser, qui l'applique à la reproduction des rapports sociaux plutôt qu'aux systèmes de parenté ou aux mythes.",
    sources: ["Lallement, 2017, Histoire des idées sociologiques"],
  },
  {
    source: "althusser",
    target: "nicos-poulantzas",
    type: "heritage",
    strength: 5,
    consensus: "élevé",
    justification:
      "Poulantzas se présente explicitement comme structuraliste marxiste dans la filiation directe d'Althusser, dont il reprend le concept de reproduction des rapports de classe pour l'appliquer à l'analyse de l'État.",
    sources: ["Lallement, 2017, Histoire des idées sociologiques"],
  },
  {
    source: "levi-strauss",
    target: "bourdieu",
    type: "tension",
    strength: 4,
    consensus: "élevé",
    justification:
      "Bourdieu se démarque explicitement de l'anthropologie structurale de Lévi-Strauss en considérant que les représentations mentales des agents ne relèvent pas toutes de systèmes structuraux complexes, mais peuvent s'interpréter comme relevant d'un sens pratique non réfléchi.",
    sources: ["Accardo & Corcuff, 1989, La sociologie de Bourdieu"],
  },
  {
    source: "levi-strauss",
    target: "anthony-giddens",
    type: "tension",
    strength: 3,
    consensus: "moyen",
    justification:
      "Giddens reproche au structuralisme la trop grande passivité qu'il accorde à l'individu, et développe la théorie de la structuration précisément pour dépasser cette limite tout en conservant le concept de structure.",
    sources: ["Giddens, 1987, La Constitution de la société"],
  },
  {
    source: "weber",
    target: "raymond-boudon",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Boudon se revendique explicitement héritier de l'individualisme méthodologique wébérien, qu'il systématise et formalise pour en faire le socle de sa propre sociologie.",
    sources: ["Boudon, 1979, La Logique du social"],
  },
  {
    source: "bourdieu",
    target: "lazega",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "Lazega mobilise la notion de capital social héritée de Bourdieu, tout en la reformulant dans un cadre structural de réseaux plutôt que de champs, ce qui l'éloigne partiellement de la théorie des champs bourdieusienne.",
    sources: ["Lazega, 2006, Réseaux sociaux et structures relationnelles"],
  },
  {
    source: "comte",
    target: "durkheim",
    type: "heritage",
    strength: 5,
    consensus: "élevé",
    justification:
      "Durkheim prolonge et systématise le projet positiviste de Comte, en faisant du fait social l'objet d'une science positive rigoureuse, débarrassée de la visée téléologique et moraliste du comtisme.",
    sources: ["Devinant, 1999, Introduction à la sociologie"],
  },
  {
    source: "marx",
    target: "henri-lefebvre",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Lefebvre développe une lecture humaniste et hétérodoxe du marxisme, prolongeant l'analyse de l'aliénation de Marx tout en la déplaçant vers la vie quotidienne et l'espace urbain.",
    sources: ["Lallement, 2017, Histoire des idées sociologiques"],
  },
  {
    source: "marx",
    target: "nicos-poulantzas",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Poulantzas applique et prolonge l'analyse marxienne des rapports de classe à la théorie structuraliste de l'État, en se réclamant explicitement de l'héritage marxiste.",
    sources: ["Lallement, 2017, Histoire des idées sociologiques"],
  },
  {
    source: "marx",
    target: "althusser",
    type: "heritage",
    strength: 5,
    consensus: "élevé",
    justification:
      "Althusser propose une relecture structuraliste et anti-humaniste de l'œuvre de Marx, dont l'ambition affichée est de revenir à la rigueur scientifique du texte marxien contre ses interprétations humanistes.",
    sources: ["Lallement, 2017, Histoire des idées sociologiques"],
  },
  {
    source: "max-horkheimer",
    target: "erich-fromm",
    type: "dialogue",
    strength: 4,
    consensus: "élevé",
    justification:
      "Fromm est un membre fondateur de l'Institut de recherche sociale dirigé par Horkheimer, avec lequel il élabore le programme freudo-marxiste de l'École de Francfort.",
    sources: ["Delas & Milly, 2015, Histoire des pensées sociologiques"],
  },
  {
    source: "max-horkheimer",
    target: "herbert-marcuse",
    type: "dialogue",
    strength: 4,
    consensus: "élevé",
    justification:
      "Marcuse rejoint l'Institut de recherche sociale dirigé par Horkheimer et participe à l'élaboration du programme freudo-marxiste critiquant la rationalisation de la domination.",
    sources: ["Delas & Milly, 2015, Histoire des pensées sociologiques"],
  },
  {
    source: "ann-oakley",
    target: "judith-butler",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "Butler s'inscrit dans la filiation de la distinction sexe/genre mise en circulation par Oakley, tout en la radicalisant par la thèse de la performativité, qui remet en cause jusqu'à la stabilité du sexe biologique lui-même.",
    sources: ["Jacquemain & Frère, 2008, Épistémologie de la sociologie"],
  },
  {
    source: "bourdieu",
    target: "judith-butler",
    type: "tension",
    strength: 4,
    consensus: "élevé",
    justification:
      "Bourdieu critique la thèse de la performativité du genre de Butler ; celle-ci lui répond que le genre n'est pas un artifice que l'on pourrait assumer ou enlever à volonté, ni l'effet d'un simple choix individuel.",
    sources: ["Jacquemain & Frère, 2008, Épistémologie de la sociologie"],
  },
  {
    source: "erving-goffman",
    target: "judith-butler",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "La théorie de la performativité du genre de Butler prolonge et radicalise l'approche dramaturgique de Goffman, en déplaçant la mise en scène de l'identité du registre de la présentation de soi vers celui de la construction performative du genre lui-même.",
    sources: ["Jacquemain & Frère, 2008, Épistémologie de la sociologie"],
  },
  {
    source: "peter-berger",
    target: "ann-oakley",
    type: "dialogue",
    strength: 2,
    consensus: "moyen",
];
