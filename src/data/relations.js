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
    justification:
      "La distinction opérée par Oakley entre sexe biologique et genre socialement construit s'inscrit dans la filiation du constructivisme social bergerien-luckmannien, bien qu'elle ne s'en revendique pas explicitement.",
    sources: ["Jacquemain & Frère, 2008, Épistémologie de la sociologie"],
  },
  {
    source: "luc-boltanski",
    target: "laurent-thevenot",
    type: "dialogue",
    strength: 5,
    consensus: "élevé",
    justification:
      "Boltanski et Thévenot co-fondent le paradigme pragmatique et co-écrivent De la justification, texte fondateur de la sociologie de la critique et des régimes de justification.",
    sources: ["Jacquemain & Frère, 2008, Épistémologie de la sociologie"],
  },
  {
    source: "bourdieu",
    target: "luc-boltanski",
    type: "tension",
    strength: 4,
    consensus: "élevé",
    justification:
      "Ancien collaborateur de Bourdieu, Boltanski rompt explicitement avec la sociologie critique du dévoilement pour fonder une sociologie pragmatique attentive aux compétences critiques ordinaires des acteurs.",
    sources: ["Jacquemain & Frère, 2008, Épistémologie de la sociologie"],
  },
  {
    source: "alain-touraine",
    target: "weber",
    type: "tension",
    strength: 3,
    consensus: "élevé",
    justification:
      "Touraine juge la sociologie classique de Weber inadaptée à l'étude des sociétés contemporaines, trop corrélée au paradigme industriel, et lui oppose le retour de l'acteur et de l'historicité.",
    sources: ["Touraine, 1984, Le Retour de l'acteur"],
  },
  {
    source: "alain-touraine",
    target: "marx",
    type: "tension",
    strength: 3,
    consensus: "élevé",
    justification:
      "Touraine récuse l'idée marxienne que l'organisation sociale (les rapports de production) préexiste à l'action sociale, inversant la priorité au profit des mouvements sociaux comme producteurs de la société.",
    sources: ["Touraine, 1984, Le Retour de l'acteur"],
  },
  {
    source: "alain-touraine",
    target: "durkheim",
    type: "tension",
    strength: 3,
    consensus: "élevé",
    justification:
      "Touraine juge la sociologie classique de Durkheim inadaptée à l'étude des sociétés contemporaines, trop corrélée au paradigme industriel, et lui oppose le retour de l'acteur et de l'historicité.",
    sources: ["Touraine, 1984, Le Retour de l'acteur"],
  },
  {
    source: "cooley",
    target: "mead",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Mead s'inspire abondamment de l'œuvre de Cooley sur les groupes primaires et le refus de toute hiérarchie entre société et individu pour élaborer sa propre théorie de la socialisation.",
    sources: ["Lallement, 2017, Histoire des idées sociologiques"],
  },
  {
    source: "robert-park",
    target: "burgess",
    type: "dialogue",
    strength: 5,
    consensus: "élevé",
    justification:
      "Park et Burgess co-écrivent les textes fondateurs de l'écologie urbaine de l'école de Chicago, notamment Introduction to the Science of Sociology (1921) et The City (1925).",
    sources: ["Lallement, 2017, Histoire des idées sociologiques"],
  },
  {
    source: "mead",
    target: "herbert-blumer",
    type: "heritage",
    strength: 5,
    consensus: "élevé",
    justification:
      "Blumer, disciple direct de Mead à Chicago, forge le terme d'« interactionnisme symbolique » en 1937 pour désigner et systématiser l'héritage théorique de son maître.",
    sources: ["Lallement, 2017, Histoire des idées sociologiques"],
  },
  {
    source: "robert-k-merton",
    target: "lazarsfeld",
    type: "tension",
    strength: 3,
    consensus: "moyen",
    justification:
      "Merton critique l'empirisme quantitativiste de Lazarsfeld, qu'il juge trop détaché de toute théorisation, defendant à l'inverse une articulation étroite entre théorie et recherche empirique.",
    sources: ["Lallement, 2017, Histoire des idées sociologiques"],
  },
  {
    source: "mark-granovetter",
    target: "zelizer",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "Zelizer partage avec Granovetter le refus d'une conception purement utilitariste de l'action économique, tout en déplaçant l'analyse de l'encastrement structural vers l'encastrement culturel et moral des transactions.",
    sources: ["Steiner, 1999, La sociologie économique"],
  },
  {
    source: "bruno-latour",
    target: "akrich",
    type: "dialogue",
    strength: 4,
    consensus: "élevé",
    justification:
      "Akrich codirige avec Latour et Callon l'ouvrage collectif Sociologie de la traduction, textes fondateurs, et contribue directement au développement du programme de l'acteur-réseau au sein du CSI.",
    sources: [
      "Akrich, Callon & Latour (dir.), 2006, Sociologie de la traduction : textes fondateurs",
    ],
  },
  {
    source: "michel-callon",
    target: "akrich",
    type: "dialogue",
    strength: 4,
    consensus: "élevé",
    justification:
      "Akrich codirige avec Callon et Latour l'ouvrage collectif Sociologie de la traduction, textes fondateurs, et contribue directement au développement du programme de l'acteur-réseau au sein du CSI.",
    sources: [
      "Akrich, Callon & Latour (dir.), 2006, Sociologie de la traduction : textes fondateurs",
    ],
  },
  {
    source: "marx",
    target: "max-horkheimer",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "L'École de Francfort s'inscrit explicitement dans l'héritage marxiste, qu'elle combine avec la psychanalyse freudienne pour analyser les nouvelles formes de domination du capitalisme du XXe siècle.",
    sources: ["Delas & Milly, 2015, Histoire des pensées sociologiques"],
  },
  {
    source: "talcott-parsons",
    target: "jürgen-habermas",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "Habermas intègre des éléments du fonctionnalisme parsonien dans sa distinction entre système et monde vécu, tout en cherchant à en corriger le déterminisme.",
    sources: ["Ansart, 1990, Les sociologies contemporaines"],
  },
  {
    source: "bourdieu",
    target: "raymond-boudon",
    type: "tension",
    strength: 3,
    consensus: "élevé",
    justification:
      "Bourdieu critique l'individualisme méthodologique comme une croyance naïve en la transparence du calcul rationnel, ignorant le poids des dispositions incorporées (habitus) ; Boudon reproche symétriquement à Bourdieu de nier toute marge d'autonomie à l'acteur individuel.",
    sources: ["Corcuff, 2003, Bourdieu autrement"],
  },
  {
    source: "marx",
    target: "bourdieu",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Bourdieu reprend explicitement le concept marxien de capital pour en démultiplier les formes (culturel, social, symbolique), au-delà de sa seule acception économique.",
    sources: ["Corcuff, 2003, Bourdieu autrement"],
  },
  {
    source: "durkheim",
    target: "bronislaw-malinowski",
    type: "heritage",
    strength: 3,
    consensus: "moyen",
    justification:
      "Malinowski s'inspire du holisme durkheimien pour penser la cohérence fonctionnelle des sociétés, tout en déplaçant l'explication vers des besoins biologiques individuels plutôt que vers le seul fait social.",
    sources: ["Ritzer, 2011, Sociological Theory"],
  },
  {
    source: "weber",
    target: "talcott-parsons",
    type: "heritage",
    strength: 5,
    consensus: "élevé",
    justification:
      "Parsons traduit Weber en anglais et fonde sa théorie générale de l'action sociale sur une synthèse explicite de la sociologie compréhensive wébérienne.",
    sources: ["Rocher, 1972, Talcott Parsons et la sociologie américaine"],
  },
  {
    source: "durkheim",
    target: "talcott-parsons",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "The Structure of Social Action de Parsons opère une synthèse explicite de Durkheim, Weber et Pareto pour fonder sa théorie générale de l'action.",
    sources: ["Rocher, 1972, Talcott Parsons et la sociologie américaine"],
  },
  {
    source: "durkheim",
    target: "robert-k-merton",
    type: "heritage",
    strength: 5,
    consensus: "élevé",
    justification:
      "Le concept mertonien d'anomie prolonge directement la notion durkheimienne, en l'appliquant à l'écart entre buts culturels et moyens légitimes disponibles.",
    sources: [
      "Boudon & Bourricaud, 1982, Dictionnaire critique de la sociologie",
    ],
  },
  {
    source: "weber",
    target: "jürgen-habermas",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Habermas reprend et prolonge la théorie wébérienne de la rationalisation pour construire sa distinction entre système et monde vécu.",
    sources: ["Ansart, 1990, Les sociologies contemporaines"],
  },
  {
    source: "weber",
    target: "peter-berger",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "Berger s'inscrit dans la tradition compréhensive wébérienne pour sa sociologie de la religion et sa méthode d'analyse du sens subjectif.",
    sources: ["Lallement, 2000, Histoire des idées sociologiques"],
  },
  {
    source: "durkheim",
    target: "peter-berger",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "Berger reprend la question durkheimienne du fait social objectif pour l'articuler dialectiquement avec la construction subjective de la réalité.",
    sources: ["Lallement, 2000, Histoire des idées sociologiques"],
  },
  {
    source: "durkheim",
    target: "thomas-luckmann",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "Luckmann reprend la question durkheimienne du fait social objectif pour l'articuler dialectiquement avec la construction subjective de la réalité.",
    sources: ["Corcuff, 2007, Les nouvelles sociologies"],
  },
  {
    source: "weber",
    target: "max-horkheimer",
    type: "dialogue",
    strength: 4,
    consensus: "élevé",
    justification:
      "La critique francfortoise de la raison instrumentale prolonge et radicalise l'analyse wébérienne de la rationalisation du monde moderne.",
    sources: ["Delas & Milly, 2015, Histoire des pensées sociologiques"],
  },
  {
    source: "weber",
    target: "theodor-w-adorno",
    type: "dialogue",
    strength: 4,
    consensus: "élevé",
    justification:
      "La critique francfortoise de la raison instrumentale prolonge et radicalise l'analyse wébérienne de la rationalisation du monde moderne.",
    sources: ["Delas & Milly, 2015, Histoire des pensées sociologiques"],
  },
  {
    source: "weber",
    target: "anthony-giddens",
    type: "heritage",
    strength: 3,
    consensus: "moyen",
    justification:
      "Giddens intègre l'attention wébérienne au sens subjectif de l'action dans sa théorie de la structuration, aux côtés de l'héritage durkheimien.",
    sources: ["Lallement, 2017, Histoire des idées sociologiques"],
  },
  {
    source: "durkheim",
    target: "anthony-giddens",
    type: "heritage",
    strength: 3,
    consensus: "moyen",
    justification:
      "Giddens dialogue avec l'héritage durkheimien du fait social pour élaborer sa propre conception de la structure comme à la fois contrainte et ressource.",
    sources: ["Lallement, 2017, Histoire des idées sociologiques"],
  },
  {
    source: "bourdieu",
    target: "muriel-darmon",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Darmon adopte une approche dispositionnaliste explicitement inspirée de Bourdieu pour analyser la fabrication des habitus (classes préparatoires, anorexie).",
    sources: ["Darmon, 2013, Classes préparatoires. La fabrique d'une jeunesse dominante"],
  },
  {
    source: "becker",
    target: "muriel-darmon",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Darmon mobilise explicitement la notion de carrière déviante de Becker (via l'étude Boys in White) pour analyser des processus de socialisation comme l'anorexie.",
    sources: ["Darmon, 2003, Devenir anorexique : une approche sociologique"],
  },
  {
    source: "bourdieu",
    target: "lahire",
    type: "tension",
    strength: 4,
    consensus: "élevé",
    justification:
      "Lahire critique l'unité présupposée de l'habitus bourdieusien et lui oppose une pluralité des dispositions individuelles selon les contextes sociaux traversés par un même acteur.",
    sources: ["Corcuff, 2007, Les nouvelles sociologies"],
  },
  {
    source: "bourdieu",
    target: "wacquant",
    type: "heritage",
    strength: 5,
    consensus: "élevé",
    justification:
      "Wacquant est l'un des plus proches collaborateurs de Bourdieu, avec qui il co-écrit directement un ouvrage de référence sur la méthode réflexive, avant de prolonger ce cadre vers la sociologie urbaine comparée.",
    sources: ["Wacquant, 2006, Parias urbains. Ghetto, banlieues, État"],
  },
  {
    source: "bourdieu",
    target: "gerard-mauger",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Mauger applique et prolonge de façon soutenue le cadre théorique bourdieusien (habitus, capital, classes sociales) à la sociologie de la jeunesse populaire et de la déviance.",
    sources: ["Mauger, 2023, Avec Bourdieu. Un parcours sociologique"],
  },
  {
    source: "erving-goffman",
    target: "hochschild",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Hochschild prolonge l'approche dramaturgique de Goffman (gestion de l'impression donnée à autrui) en l'appliquant à la gestion des émotions elles-mêmes, fondant la sociologie des émotions.",
    sources: ["Hochschild, 1983, The Managed Heart"],
  },
  {
    source: "bourdieu",
    target: "eva-illouz",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Illouz reprend et étend le concept bourdieusien de capital pour analyser la valeur sociale différenciée des émotions et des relations affectives.",
    sources: ["CNRS Le journal, Eva Illouz, une sociologue contre la tyrannie des émotions"],
  },
  {
    source: "weber",
    target: "eva-illouz",
    type: "heritage",
    strength: 3,
    consensus: "moyen",
    justification:
      "Illouz applique la théorie wébérienne de la rationalisation à la sphère amoureuse et affective, montrant comment le choix du partenaire se rationalise sur le modèle du marché.",
    sources: ["CNRS Le journal, Eva Illouz, une sociologue contre la tyrannie des émotions"],
  },
  {
    source: "hochschild",
    target: "eva-illouz",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "Illouz prolonge directement le concept de travail émotionnel de Hochschild en l'articulant à une théorie plus large du capitalisme émotionnel contemporain.",
    sources: ["CNRS Le journal, Eva Illouz, une sociologue contre la tyrannie des émotions"],
  },
  {
    source: "jürgen-habermas",
    target: "nancy-fraser",
    type: "tension",
    strength: 4,
    consensus: "élevé",
    justification:
      "Fraser critique la théorie habermassienne de l'espace public bourgeois pour avoir occulté historiquement les exclusions de genre et de classe qui la structuraient, tout en s'inscrivant dans son sillage critique.",
    sources: ["Fraser, 1989, Unruly Practices"],
  },
  {
    source: "bronislaw-malinowski",
    target: "talcott-parsons",
    type: "dialogue",
    strength: 2,
    consensus: "moyen",
    justification:
      "Parsons engage un dialogue critique avec le fonctionnalisme anthropologique de Malinowski dans l'élaboration de sa propre théorie fonctionnaliste des systèmes sociaux.",
    sources: ["Ritzer, 2011, Sociological Theory"],
  },
  {
    source: "robert-k-merton",
    target: "raymond-boudon",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Boudon se réclame explicitement du programme mertonien des théories de moyenne portée, articulant étroitement théorie et recherche empirique contre les grandes théories systémiques.",
    sources: ["Ansart, 1990, Les sociologies contemporaines"],
  },
  {
    source: "robert-k-merton",
    target: "james-coleman",
    type: "heritage",
    strength: 5,
    consensus: "élevé",
    justification:
      "Coleman a été l'élève direct de Merton (et de Lazarsfeld) à Columbia ; c'est Merton lui-même qui l'initie à la lecture de Durkheim et de Weber.",
    sources: ["Sage Encyclopedia of Social Theory, Coleman, James"],
  },
  {
    source: "weber",
    target: "james-coleman",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "Coleman est initié à la lecture de Weber par Merton lors de sa formation à Columbia, influence qui infuse sa théorie de l'action rationnelle articulée au niveau macrosocial.",
    sources: ["Sage Encyclopedia of Social Theory, Coleman, James"],
  },
  {
    source: "mead",
    target: "erving-goffman",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "Goffman s'inscrit dans la filiation de l'interactionnisme meadien, qu'il prolonge et déplace vers une analyse dramaturgique plus formaliste de l'ordre de l'interaction.",
    sources: ["Lallement, 2017, Histoire des idées sociologiques"],
  },
  {
    source: "levi-strauss",
    target: "harrison-white",
    type: "dialogue",
    strength: 2,
    consensus: "moyen",
    justification:
      "White s'inspire de l'analyse structurale lévi-straussienne des systèmes de parenté comme réseaux de relations pour fonder sa propre analyse structurale des réseaux sociaux.",
    sources: ["Mercklé, 2011, L'analyse des réseaux sociaux"],
  },
  {
    source: "james-coleman",
    target: "lazega",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "Lazega dialogue avec la théorie du choix rationnel et du capital social de Coleman, qu'il articule à une analyse plus fine des structures relationnelles au sein des organisations professionnelles.",
    sources: ["Lazega, 2006, Réseaux sociaux et structures relationnelles"],
  },
  {
    source: "marx",
    target: "peter-berger",
    type: "dialogue",
    strength: 2,
    consensus: "moyen",
    justification:
      "Berger s'inscrit dans la tradition de la sociologie de la connaissance qui doit beaucoup à la critique marxienne de l'idéologie, tout en la déplaçant vers une perspective phénoménologique.",
    sources: ["Lallement, 2000, Histoire des idées sociologiques"],
  },
  {
    source: "weber",
    target: "thomas-luckmann",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "Luckmann s'inscrit dans la tradition compréhensive wébérienne pour son attention au sens subjectif construit par les acteurs dans leur expérience quotidienne.",
    sources: ["Corcuff, 2007, Les nouvelles sociologies"],
  },
  {
    source: "thomas-luckmann",
    target: "claude-dubar",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Dubar s'approprie explicitement la théorie de la socialisation primaire et secondaire formalisée par Luckmann (avec Berger) pour bâtir son modèle de la socialisation professionnelle.",
    sources: ["Dubar, 1991, La Socialisation"],
  },
  {
    source: "bourdieu",
    target: "claude-dubar",
    type: "heritage",
    strength: 3,
    consensus: "moyen",
    justification:
      "Dubar articule la théorie constructiviste de la socialisation avec les outils bourdieusiens de champ et de capital pour analyser les trajectoires professionnelles et identitaires.",
    sources: ["Dubar, 1991, La Socialisation"],
  },
  {
    source: "marx",
    target: "theodor-w-adorno",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Adorno inscrit sa critique de l'industrie culturelle et de la raison instrumentale dans l'héritage marxiste, combiné à la psychanalyse freudienne.",
    sources: ["Delas & Milly, 2015, Histoire des pensées sociologiques"],
  },
  {
    source: "mead",
    target: "jürgen-habermas",
    type: "heritage",
    strength: 3,
    consensus: "moyen",
    justification:
      "Habermas mobilise explicitement la théorie meadienne de l'interaction symbolique et de la formation du soi pour construire sa théorie de l'agir communicationnel.",
    sources: ["Ansart, 1990, Les sociologies contemporaines"],
  },
  {
    source: "harrison-white",
    target: "bruno-latour",
    type: "dialogue",
    strength: 2,
    consensus: "moyen",
    justification:
      "La théorie de l'acteur-réseau de Latour dialogue avec l'analyse structurale des réseaux de White, dont elle prolonge et radicalise l'ontologie relationnelle en y intégrant les non-humains.",
    sources: ["Mercklé, 2011, L'analyse des réseaux sociaux"],
  },
  {
    source: "harrison-white",
    target: "michel-callon",
    type: "dialogue",
    strength: 2,
    consensus: "moyen",
    justification:
      "L'analyse callonienne des marchés comme réseaux sociotechniques dialogue avec l'approche structurale des marchés de White, tout en y intégrant les dispositifs techniques.",
    sources: ["Mercklé, 2011, L'analyse des réseaux sociaux"],
  },
  {
    source: "marx",
    target: "anthony-giddens",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "Giddens consacre une critique approfondie et un dialogue soutenu avec le matérialisme historique marxien, dont il retravaille les concepts dans sa théorie de la structuration.",
    sources: ["Lallement, 2017, Histoire des idées sociologiques"],
  },
  {
    source: "marx",
    target: "erich-fromm",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Fromm fonde son projet freudo-marxiste sur une synthèse explicite entre l'analyse marxienne de l'aliénation économique et la psychanalyse freudienne.",
    sources: ["Delas & Milly, 2015, Histoire des pensées sociologiques"],
  },
  {
    source: "marx",
    target: "herbert-marcuse",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Marcuse fonde sa critique de la société de consommation et de la désublimation répressive sur une lecture explicitement marxiste combinée à la psychanalyse freudienne.",
    sources: ["Delas & Milly, 2015, Histoire des pensées sociologiques"],
  },
  {
    source: "robert-park",
    target: "hughes",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Hughes effectue son doctorat sous la direction de Robert Park à l'université de Chicago, dont il prolonge et transmet l'héritage à la génération suivante.",
    sources: ["Chapoulie, 1996, préface au Regard sociologique. Essais choisis"],
  },
  {
    source: "hughes",
    target: "erving-goffman",
    type: "heritage",
    strength: 5,
    consensus: "élevé",
    justification:
      "Goffman est l'élève direct de Hughes à l'université de Chicago, qui fait de ce dernier le véritable chaînon entre la première et la seconde génération de l'École de Chicago.",
    sources: ["Chapoulie, 1996, préface au Regard sociologique. Essais choisis"],
  },
  {
    source: "hughes",
    target: "becker",
    type: "heritage",
    strength: 5,
    consensus: "élevé",
    justification:
      "Becker est l'élève direct de Hughes à l'université de Chicago, qui fait de ce dernier le véritable chaînon entre la première et la seconde génération de l'École de Chicago.",
    sources: ["Chapoulie, 1996, préface au Regard sociologique. Essais choisis"],
  },
  {
    source: "wright-mills",
    target: "talcott-parsons",
    type: "tension",
    strength: 4,
    consensus: "élevé",
    justification:
      "Mills qualifie la « grande théorie » de Parsons de verbiage abstrait coupé du concret — « 50 % de multiplication de mots, 40 % de platitude sociologique » — et lui oppose l'exigence d'une imagination sociologique reliant biographie individuelle et structures historiques.",
    sources: ["Mills, 1959, L'Imagination sociologique"],
  },
  {
    source: "wright-mills",
    target: "lazarsfeld",
    type: "tension",
    strength: 4,
    consensus: "élevé",
    justification:
      "Mills critique « l'empirisme abstrait » des enquêtes statistiques à la Lazarsfeld, qu'il juge myope : des faits accumulés sans théorie pour leur donner sens.",
    sources: ["Mills, 1959, L'Imagination sociologique"],
  },
  {
    source: "harrison-white",
    target: "degenne",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Degenne reconnaît explicitement sa dette envers l'analyse structurale de White, auquel il consacre un texte le qualifiant de « chaînon manquant de la sociologie », et importe cette approche en France sous le nom d'interactionnisme structural.",
    sources: ["Degenne, 1996, Harrison White ou un chaînon manquant de la sociologie"],
  },
  {
    source: "degenne",
    target: "forse",
    type: "dialogue",
    strength: 5,
    consensus: "élevé",
    justification:
      "Co-auteurs de l'ouvrage de référence qui nomme et théorise l'« interactionnisme structural » en sociologie française, initiant aussi bien aux études empiriques qu'à l'analyse des graphes.",
    sources: ["Degenne & Forsé, 1994, Les réseaux sociaux. Une approche structurale en sociologie"],
  },
  {
    source: "degenne",
    target: "bidart",
    type: "dialogue",
    strength: 4,
    consensus: "élevé",
    justification:
      "Co-auteurs de La vie en réseau, ouvrage fondateur de la sociologie des dynamiques relationnelles, couronné par le prix Simmel de l'International Network for Social Network Analysis en 2020.",
    sources: ["Bidart, Degenne & Grossetti, 2011, La vie en réseau. Dynamique des relations sociales"],
  },
  {
    source: "bidart",
    target: "grossetti",
    type: "dialogue",
    strength: 4,
    consensus: "élevé",
    justification:
      "Co-auteurs de La vie en réseau, ouvrage fondateur de la sociologie des dynamiques relationnelles, couronné par le prix Simmel de l'International Network for Social Network Analysis en 2020.",
    sources: ["Bidart, Degenne & Grossetti, 2011, La vie en réseau. Dynamique des relations sociales"],
  },
  {
    source: "claude-fischer",
    target: "grossetti",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Grossetti transpose directement en France (enquête toulousaine de 2001) la méthode d'enquête sur les réseaux personnels développée par Fischer dans la région de San Francisco à la fin des années 1970, permettant des comparaisons internationales.",
    sources: [
      "Grossetti, 2009, Qu'est-ce qu'une relation sociale ? Un ensemble de médiations dyadiques, Redes, 16(2)",
    ],
  },
  {
    source: "bruno-latour",
    target: "luc-boltanski",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "La théorie de l'acteur-réseau et la sociologie de la justification naissent toutes deux au milieu des années 1980 en réaction au structuralisme bourdieusien, et partagent la notion centrale d'« épreuve », qu'elles définissent toutefois différemment.",
    sources: [
      "Blondeau & Sevin, 2004, Entretien avec Luc Boltanski, une sociologie toujours mise à l'épreuve, ethnographiques.org, 5",
    ],
  },
  {
    source: "michel-callon",
    target: "laurent-thevenot",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "La théorie de l'acteur-réseau et la sociologie de la justification naissent toutes deux au milieu des années 1980 en réaction au structuralisme bourdieusien, et partagent la notion centrale d'« épreuve », qu'elles définissent toutefois différemment.",
    sources: [
      "Blondeau & Sevin, 2004, Entretien avec Luc Boltanski, une sociologie toujours mise à l'épreuve, ethnographiques.org, 5",
    ],
  },
  {
    source: "ellul",
    target: "simondon",
    type: "tension",
    strength: 3,
    consensus: "élevé",
    justification:
      "Simondon réfute explicitement la thèse ellulienne de la technique comme source d'aliénation et force autonome menaçant l'humain : il propose au contraire d'intégrer les objets techniques à la culture, en découvrant « sans préjugés la vraie structure et l'essence réelle de la technicité ».",
    sources: [
      "Simondon, 1958, Du mode d'existence des objets techniques",
      "Ellul, 1954, La Technique ou l'enjeu du siècle",
    ],
  },
  {
    source: "hughes",
    target: "susan-leigh-star",
    type: "heritage",
    strength: 3,
    consensus: "moyen",
    justification:
      "Star inscrit sa sociologie du travail invisible et des infrastructures dans la filiation de la sociologie du travail de Hughes, dont elle reprend l'attention aux tâches invisibilisées et au « sale boulot ».",
    sources: ["Star & Strauss, 1999, Layers of Silence, Arenas of Voice: The Ecology of Visible and Invisible Work, Computer Supported Cooperative Work, 8"],
  },
  {
    source: "hughes",
    target: "muriel-darmon",
    type: "heritage",
    strength: 3,
    consensus: "moyen",
    justification:
      "Darmon mobilise la notion de carrière issue de la sociologie de Hughes (transmise via Becker) pour analyser les processus de socialisation.",
    sources: [
      "Darmon, 2008, La notion de carrière : un instrument interactionniste d'objectivation, Sociétés contemporaines, 72(4), 27-46",
    ],
  },
  {
    source: "degenne",
    target: "grossetti",
    type: "dialogue",
    strength: 4,
    consensus: "élevé",
    justification:
      "Co-auteurs de La vie en réseau, ouvrage fondateur de la sociologie des dynamiques relationnelles, couronné par le prix Simmel de l'International Network for Social Network Analysis en 2020.",
    sources: ["Bidart, Degenne & Grossetti, 2011, La vie en réseau. Dynamique des relations sociales"],
  },
  {
    source: "hughes",
    target: "claude-dubar",
    type: "heritage",
    strength: 3,
    consensus: "moyen",
    justification:
      "Dubar mobilise la sociologie des professions de Hughes (licence, mandat, carrière) pour construire son analyse de la socialisation professionnelle et des identités au travail.",
    sources: ["Dubar, 1991, La Socialisation"],
  },
  {
    source: "laurent-thevenot",
    target: "bruno-latour",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "Un compte rendu académique de L'Action au pluriel rapproche explicitement la démarche de Thévenot de celle de Latour, tous deux œuvrant à la revalorisation des attachements matériels et expérientiels, à rebours de l'opposition moderniste entre autonomie désirable et dépendances aliénantes.",
    sources: [
      "Compte rendu de Thévenot, L'Action au pluriel. Sociologie des régimes d'engagement, Politix, 2007, 4",
    ],
  },
  {
    source: "simondon",
    target: "bruno-latour",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Latour reconnaît explicitement l'influence de Simondon, en particulier de son Mode d'existence des objets techniques, sur sa réflexion sur le rapport entre l'humain et la technique : la théorie de l'acteur-réseau offre une traduction opérationnelle du projet simondonien de dépassement du dualisme humain/technique.",
    sources: [
      "La théorie de l'acteur-réseau entre Latour et Simondon, Symposium, 2018, 22(2), 74-89",
    ],
  },
  {
    source: "simondon",
    target: "akrich",
    type: "dialogue",
    strength: 3,
    consensus: "moyen",
    justification:
      "Akrich est l'une des rares figures de la théorie de l'acteur-réseau à engager un dialogue explicite avec l'œuvre de Simondon, notamment dans son texte de 1993 sur les formes de médiation technique — alors que cette influence reste le plus souvent implicite chez les autres auteurs du courant.",
    sources: ["Akrich, 1993, Les formes de médiation technique, Réseaux, 60"],
  },
  {
    source: "ellul",
    target: "bruno-latour",
    type: "tension",
    strength: 3,
    consensus: "moyen",
    justification:
      "Une critique académique de la sociologie des techniques de Latour mobilise explicitement Ellul (aux côtés d'Illich) pour lui objecter qu'au-delà de certains seuils de puissance, le système technique échappe au type de description symétrique et localisée que propose la théorie de l'acteur-réseau.",
    sources: [
      "Une nouvelle théodicée ? Remarques sur la sociologie des techniques de Bruno Latour, Revue du Mauss permanente, 2019",
    ],
  },
  {
    source: "laurent-thevenot",
    target: "desrosieres",
    type: "heritage",
    strength: 5,
    consensus: "élevé",
    justification:
      "Desrosières est membre fondateur du Groupe de sociologie politique et morale aux côtés de Thévenot, avec qui il co-écrit Les Investissements de forme (1986) et un ouvrage sur les nomenclatures socioprofessionnelles (1988), fondateurs de l'économie des conventions.",
    sources: [
      "Armatte, 2013, Alain Desrosières (1940-2013). La statistique, outil de preuve et de gouvernement, Hermès, La Revue, 66(2), 252-254",
    ],
  },
  {
    source: "bourdieu",
    target: "desrosieres",
    type: "heritage",
    strength: 3,
    consensus: "moyen",
    justification:
      "Ses premiers travaux à l'Insee, notamment les éditions des Données sociales (1984-1987), restent largement inspirés de Bourdieu, avant qu'il ne se rapproche du Groupe de sociologie politique et morale et de l'économie des conventions.",
    sources: [
      "Armatte, 2013, Alain Desrosières (1940-2013). La statistique, outil de preuve et de gouvernement, Hermès, La Revue, 66(2), 252-254",
    ],
  },
  {
    source: "marx",
    target: "thomas-luckmann",
    type: "dialogue",
    strength: 2,
    consensus: "moyen",
    justification:
      "La théorie de Berger et Luckmann s'élabore explicitement à partir de plusieurs références conjointes, dont la perspective dialectique de Marx.",
    sources: [
      "Berger & Luckmann, 1966, The Social Construction of Reality (trad. fr. 1986, La Construction sociale de la réalité, Méridiens Klincksieck)",
    ],
  },
  {
    source: "mead",
    target: "peter-berger",
    type: "heritage",
    strength: 3,
    consensus: "moyen",
    justification:
      "Berger et Luckmann reprennent explicitement les présupposés meadiens sur l'intériorisation de la réalité sociale, issus de l'interactionnisme symbolique.",
    sources: [
      "Berger & Luckmann, 1966, The Social Construction of Reality (trad. fr. 1986, La Construction sociale de la réalité, Méridiens Klincksieck)",
    ],
  },
  {
    source: "mead",
    target: "thomas-luckmann",
    type: "heritage",
    strength: 3,
    consensus: "moyen",
    justification:
      "Berger et Luckmann reprennent explicitement les présupposés meadiens sur l'intériorisation de la réalité sociale, issus de l'interactionnisme symbolique.",
    sources: [
      "Berger & Luckmann, 1966, The Social Construction of Reality (trad. fr. 1986, La Construction sociale de la réalité, Méridiens Klincksieck)",
    ],
  },
  {
    source: "herbert-marcuse",
    target: "erich-fromm",
    type: "tension",
    strength: 3,
    consensus: "élevé",
    justification:
      "Marcuse critique explicitement Fromm dans la postface d'Éros et civilisation, lui reprochant un optimisme « révisionniste » : croire qu'un individu peut s'émanciper par la seule psychanalyse, alors que la société est selon lui objectivement et totalement aliénante.",
    sources: ["Marcuse, 1955, Éros et civilisation, postface"],
  },
  {
    source: "michel-callon",
    target: "susan-leigh-star",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Le concept d'« objet-frontière » (boundary object) que développe Star prolonge explicitement le modèle de l'intéressement élaboré par Callon. Star a par ailleurs effectué un séjour de recherche au Centre de sociologie de l'innovation, où elle a directement collaboré avec Callon et Latour.",
    sources: [
      "Star & Griesemer, 1989, Institutional Ecology, 'Translations' and Boundary Objects, Social Studies of Science, 19(3), 387-420",
    ],
  },
  {
    source: "harrison-white",
    target: "forse",
    type: "heritage",
    strength: 4,
    consensus: "élevé",
    justification:
      "Forsé co-écrit avec Degenne l'ouvrage de référence qui importe et théorise l'analyse structurale de Harrison White en sociologie française sous le nom d'interactionnisme structural.",
    sources: ["Degenne & Forsé, 1994, Les réseaux sociaux. Une approche structurale en sociologie"],
  },
];
