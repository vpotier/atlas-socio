// Positionnement théorique par AUTEUR INDIVIDUEL sur les 3 axes, avec
// justification et sources académiques à l'appui de chaque choix. Quand
// un auteur a une entrée ici, elle prend le pas sur la valeur de sa
// constellation (constellationAxisValues) pour l'affichage et pour les
// filtres.
//
// Rempli progressivement, courant par courant, avec double vérification
// systématique — voir le protocole ATS-001. Un auteur absent de ce
// fichier retombe simplement sur la valeur de sa constellation.
export const authorAxisValues = {
  durkheim: {
    individuSociete: {
      value: 0.08,
      label: "Primat de la société",
      justification:
        "Pour Durkheim, ce sont les faits sociaux — extérieurs à l'individu et qui s'imposent à lui — qui expliquent les comportements, pas l'inverse. La société vient avant l'individu, pas après.",
      sources: [
        "Durkheim, 1895, Les Règles de la méthode sociologique",
        "Magni-Berton, 2008, Holisme durkheimien et holisme bourdieusien, L'Année sociologique, 58(2), 299-318",
      ],
    },
    methode: {
      value: 0.08,
      label: "Explicative (causale)",
      justification:
        "Durkheim veut faire de la sociologie une science, sur le modèle des sciences naturelles : trouver des lois et des causes, plutôt que comprendre le sens que les gens donnent à leurs actes.",
      sources: ["Durkheim, 1895, Les Règles de la méthode sociologique"],
    },
    rationalite: {
      value: 0.1,
      label: "Faible (contraintes sociales extérieures)",
      justification:
        "Chez Durkheim, l'individu n'agit pas vraiment par calcul personnel : ses actes s'expliquent surtout par les contraintes sociales qui pèsent sur lui, souvent sans qu'il en ait conscience.",
      sources: [
        "Cottet, Émotions et rationalité dans la sociologie classique : les cas de Weber et Durkheim, OpenEdition",
      ],
    },
  },

  weber: {
    individuSociete: {
      value: 0.75,
      label: "Individu (méthodologique)",
      justification:
        "Weber part de l'individu et du sens qu'il donne à son action, pas de la société comme un tout. C'est lui qui pose les bases de ce qu'on appelle l'individualisme méthodologique, à l'opposé du holisme de Durkheim.",
      sources: ["Aron, 1967, Les Étapes de la pensée sociologique"],
    },
    methode: {
      value: 0.9,
      label: "Compréhensive",
      justification:
        "Pour Weber, comprendre une action sociale, c'est se mettre à la place de l'acteur et saisir le sens qu'il lui donne — pas seulement en observer les causes de l'extérieur.",
      sources: [
        "Colliot-Thélène, 2014, La sociologie de Max Weber, La Découverte, chap. IV",
      ],
    },
    rationalite: {
      value: 0.75,
      label: "Plurielle (typologie des 4 types d'action)",
      justification:
        "Weber distingue quatre types d'action (rationnelle en finalité, rationnelle en valeur, traditionnelle, affective) : pour lui, il n'existe pas une seule façon d'être rationnel.",
      sources: [
        "Colliot-Thélène, 2014, La sociologie de Max Weber, La Découverte",
        "Passeron, 1994, La rationalité et les types de l'action sociale chez Max Weber, Revue européenne des sciences sociales, 32(98), 5-44",
      ],
    },
  },

  bourdieu: {
    individuSociete: {
      value: 0.35,
      label: "Structures incorporées (habitus)",
      justification:
        "Bourdieu pense, comme Durkheim, que la société façonne l'individu — mais autrement : pas par une contrainte extérieure directe, mais via l'habitus, des dispositions intériorisées si profondément qu'on ne les perçoit même plus comme des contraintes.",
      sources: [
        "Magni-Berton, 2008, Holisme durkheimien et holisme bourdieusien, L'Année sociologique, 58(2), 299-318",
      ],
    },
    methode: {
      value: 0.45,
      label: "Mixte",
      justification:
        "Bourdieu combine deux méthodes a priori opposées : la statistique à grande échelle (pour cartographier les positions sociales) et l'enquête de terrain au plus près des gens (pour saisir leur sens pratique).",
      sources: [
        "Lebaron, 2016, L'espace social. Statistique et analyse géométrique des données dans l'œuvre de Pierre Bourdieu, in La méthodologie de Pierre Bourdieu en action, Dunod",
      ],
    },
    rationalite: {
      value: 0.4,
      label:
        "Pratique ambivalente — ni calcul rationnel, ni pur automatisme",
      justification:
        "Pour Bourdieu, l'action n'est ni un pur calcul rationnel, ni un pur automatisme : elle est produite par l'habitus, à mi-chemin entre les deux — ce qu'un commentateur a appelé son programme « ni-ni ».",
      sources: ["Dewerpe, 1996, La « stratégie » chez Pierre Bourdieu, Enquête"],
    },
  },

  comte: {
    individuSociete: {
      value: 0.05,
      label: "Primat radical de la société",
      justification:
        "Comte va encore plus loin que Durkheim : pour lui, l'idée même d'un individu isolé, coupé de la société, n'a aucun sens — ce n'est qu'une abstraction.",
      sources: [
        "Comte, 1830-1842, Cours de philosophie positive",
        "Lallement, 2017, Histoire des idées sociologiques",
      ],
    },
    methode: {
      value: 0.05,
      label: "Explicative (recherche de lois)",
      justification:
        "Comte veut fonder une science de la société sur le modèle des sciences de la nature : chercher des lois stables, pas des causes premières ni du sens vécu par les acteurs.",
      sources: ["Comte, 1830-1842, Cours de philosophie positive"],
    },
    rationalite: {
      value: 0.05,
      label: "Faible (nécessité historique)",
      justification:
        "Pour Comte, l'histoire humaine suit un progrès nécessaire en trois étapes (théologique, métaphysique, positive) — un mouvement inévitable, pas le résultat de choix individuels.",
      sources: [
        "Comte, 1822, Plan des travaux scientifiques nécessaires pour réorganiser la société",
      ],
    },
  },

  lahire: {
    individuSociete: {
      value: 0.45,
      label: "Échelle individuelle, mais toujours déterministe",
      justification:
        "Lahire regarde à l'échelle de l'individu plutôt qu'à celle de la société entière, mais il ne devient pas pour autant individualiste : il explique nos dispositions par nos expériences sociales passées, pas par notre libre arbitre.",
      sources: [
        "Lahire, 2002, Portraits sociologiques. Dispositions et variations individuelles",
        "Lahire, 2013, Dans les plis singuliers du social",
      ],
    },
    methode: {
      value: 0.6,
      label: "Compréhensive, à dominante qualitative",
      justification:
        "Lahire utilise plusieurs méthodes (entretiens, enquêtes, récits de vie), mais toujours pour aller au plus près du cas individuel — bien plus que par la statistique à grande échelle de Bourdieu.",
      sources: [
        "Lahire, 1998, L'Homme pluriel",
        "Lahire, 2002, Portraits sociologiques",
      ],
    },
    rationalite: {
      value: 0.45,
      label: "Dispositions plurielles selon le contexte",
      justification:
        "Chacun de nous porte en lui plusieurs dispositions, parfois contradictoires, héritées de socialisations différentes — et c'est le contexte du moment qui détermine laquelle se manifeste.",
      sources: ["Lahire, 1998, L'Homme pluriel"],
    },
  },

  wacquant: {
    individuSociete: {
      value: 0.35,
      label: "Structures incorporées, au-delà du dualisme agent/structure",
      justification:
        "Wacquant reprend l'idée bourdieusienne d'un corps façonné par la société, mais va plus loin en refusant même la distinction classique entre l'individu (l'agent) et la société (la structure).",
      sources: [
        "Wacquant, 2015, Pour une sociologie de chair et de sang, Terrains & Travaux, 26(1), 239-256",
      ],
    },
    methode: {
      value: 0.85,
      label: "Compréhensive radicale — participation observante incarnée",
      justification:
        "Pour étudier les boxeurs d'un quartier pauvre de Chicago, Wacquant s'est lui-même entraîné à la boxe pendant trois ans : sa méthode pousse l'immersion de terrain jusqu'à faire de son propre corps un outil d'enquête.",
      sources: [
        "Wacquant, 2000, Corps et âme. Carnets ethnographiques d'un apprenti boxeur",
      ],
    },
    rationalite: {
      value: 0.3,
      label: "Pratique, non réfléchie — encore plus que Bourdieu",
      justification:
        "Wacquant insiste sur des savoir-faire et des désirs profondément corporels, presque instinctifs, qu'on ne peut pas ramener à un raisonnement conscient.",
      sources: [
        "Wacquant, 2015, Pour une sociologie de chair et de sang, Terrains & Travaux, 26(1), 239-256",
      ],
    },
  },

  "gerard-mauger": {
    individuSociete: {
      value: 0.35,
      label: "Structures incorporées, comme Bourdieu",
      justification:
        "Mauger applique directement les outils de Bourdieu (habitus, capital, reproduction sociale) à l'étude de la jeunesse des milieux populaires.",
      sources: ["Mauger, 2006, Les Bandes, le milieu et la bohème populaire"],
    },
    methode: {
      value: 0.65,
      label: "Compréhensive, à dominante ethnographique",
      justification:
        "Mauger privilégie l'enquête de terrain et les entretiens en milieu populaire, avec une attention particulière à la relation entre le sociologue et les personnes enquêtées.",
      sources: ["Mauger, 1991, Enquêter en milieu populaire, Genèses, 6, 125-143"],
    },
    rationalite: {
      value: 0.4,
      label: "Comme Bourdieu, ni calcul ni automatisme",
      justification:
        "Mauger reprend le même cadre dispositionnaliste que Bourdieu pour comprendre les pratiques, parfois déviantes, des jeunes des classes populaires.",
      sources: ["Mauger, 2006, Les Bandes, le milieu et la bohème populaire"],
    },
  },

  "muriel-darmon": {
    individuSociete: {
      value: 0.5,
      label: "À la charnière entre structure et interaction",
      justification:
        "Le concept de « carrière » que Darmon emprunte à Becker mêle explicitement une dimension objective (la position sociale, la trajectoire) et une dimension subjective (ce que la personne ressent, l'image qu'elle a d'elle-même).",
      sources: [
        "Darmon, 2008, La notion de carrière : un instrument interactionniste d'objectivation, Sociétés contemporaines, 72(4), 27-46",
      ],
    },
    methode: {
      value: 0.75,
      label: "Compréhensive empirique",
      justification:
        "Son enquête sur les classes préparatoires repose sur une centaine d'entretiens et une centaine d'heures d'observation directe sur le terrain.",
      sources: [
        "Darmon, 2015, Classes préparatoires. La fabrique d'une jeunesse dominante",
      ],
    },
    rationalite: {
      value: 0.5,
      label: "Située, entre disposition et sens vécu",
      justification:
        "La carrière articule à la fois des contraintes sociales profondes (dispositions, habitus) et le sens que la personne donne elle-même à son propre parcours.",
      sources: ["Darmon, 2003, Devenir anorexique. Une approche sociologique"],
    },
  },

  "eva-illouz": {
    individuSociete: {
      value: 0.4,
      label: "Façonnée par les structures culturelles et économiques",
      justification:
        "Pour Illouz, même nos sentiments les plus intimes — l'amour en particulier — sont façonnés par des structures culturelles et économiques (industries culturelles, capitalisme), bien plus que par notre seule intériorité.",
      sources: ["Illouz, 2006, Les Sentiments du capitalisme"],
    },
    methode: {
      value: 0.65,
      label: "Compréhensive, analyse culturelle",
      justification:
        "Illouz analyse des contenus culturels (littérature de développement personnel, cinéma, applications de rencontre) et recueille des témoignages, plutôt que de faire des statistiques.",
      sources: ["Illouz, 2012, Pourquoi l'amour fait mal"],
    },
    rationalite: {
      value: 0.55,
      label: "Rationalisation historique de l'amour",
      justification:
        "Illouz montre que la sphère amoureuse devient progressivement « rationalisée », sur le modèle du marché (comparer les qualités des un·es et des autres pour faire le meilleur choix) — un phénomène historique, pas une nature humaine universelle.",
      sources: ["Illouz, 2012, Pourquoi l'amour fait mal"],
    },
  },

  "talcott-parsons": {
    individuSociete: {
      value: 0.3,
      label: "Entre action individuelle et système social",
      justification:
        "Parsons cherche dès 1937 à concilier l'action individuelle orientée par des valeurs (empruntée à Weber) et l'ordre social (emprunté à Durkheim), avant de déplacer son propre système théorique vers une conception plus systémique où l'acteur devient occupant de rôles au service du système social.",
      sources: [
        "Parsons, 1937, The Structure of Social Action",
        "Encyclopédie Universalis, Biographie de Talcott Parsons",
      ],
    },
    methode: {
      value: 0.25,
      label: "Grande théorie abstraite et déductive",
      justification:
        "Parsons construit un vaste système conceptuel abstrait, très éloigné de l'enquête empirique de terrain dominante à son époque (Chicago, Lazarsfeld) — ce qui lui vaut la critique fameuse de Wright Mills, pour qui sa « grande théorie » n'est que « multiplication de mots ».",
      sources: [
        "Dortier, 2009, Talcott Parsons et la grande théorie, in Molénat (dir.), La Sociologie, Éditions Sciences Humaines",
        "Mills, 1959, L'Imagination sociologique",
      ],
    },
    rationalite: {
      value: 0.55,
      label: "Variables-modèles : typologie plurielle au service du système",
      justification:
        "Ses cinq paires de « variables-modèles » (affectivité/neutralité affective, universalisme/particularisme...) décrivent différentes orientations de l'action, inspirées de Weber, mais réinterprétées comme des impératifs fonctionnels du système plutôt que des choix libres de l'acteur.",
      sources: [
        "Boudon, 1989, La théorie de l'action sociale de Parsons : la conserver, mais la dépasser, Sociologie et sociétés, 21(1), 55-67",
      ],
    },
  },

  "anthony-giddens": {
    individuSociete: {
      value: 0.6,
      label: "Dualité du structurel",
      justification:
        "Pour Giddens, les structures sociales sont à la fois la condition et le résultat de l'action des individus : elles ne préexistent pas à l'action comme une contrainte extérieure (Durkheim), ni ne s'y réduisent (individualisme), mais se reproduisent continuellement à travers elle.",
      sources: ["Giddens, 1987, La Constitution de la société"],
    },
    methode: {
      value: 0.5,
      label: "Théorique et synthétique, peu empirique",
      justification:
        "Comme Parsons, Giddens construit une théorie générale essentiellement conceptuelle ; à la différence de Bourdieu, son œuvre ne repose pas sur des enquêtes de terrain mais sur un travail de synthèse théorique entre sociologies de l'action et sociologies des structures.",
      sources: ["Giddens, 1987, La Constitution de la société"],
    },
    rationalite: {
      value: 0.55,
      label: "Conscience pratique et conscience discursive",
      justification:
        "Giddens distingue deux registres de la compétence des acteurs : la conscience pratique (savoir-faire tacites, non exprimables) et la conscience discursive (ce que l'acteur peut formuler verbalement) — ni pur calcul conscient, ni pur automatisme.",
      sources: ["Giddens, 1987, La Constitution de la société"],
    },
  },

  "jürgen-habermas": {
    individuSociete: {
      value: 0.45,
      label: "Intersubjectivité communicationnelle",
      justification:
        "Habermas décrit la société comme l'articulation entre des « mondes vécus » partagés intersubjectivement par la communication, et des systèmes fonctionnels régis par une rationalité instrumentale — ni pur individu, ni pure société.",
      sources: ["Habermas, 1981, Théorie de l'agir communicationnel"],
    },
    methode: {
      value: 0.55,
      label: "Reconstruction théorique et pragmatique du langage",
      justification:
        "Sa méthode combine une reconstruction conceptuelle du savoir préthéorique des locuteurs, la pragmatique formelle du langage, et un dialogue critique avec les classiques (Weber, Durkheim, Mead) — plus proche d'une synthèse théorique que d'une enquête empirique.",
      sources: ["Habermas, 1981, Théorie de l'agir communicationnel"],
    },
    rationalite: {
      value: 0.6,
      label: "Rationalité communicationnelle, plurielle, orientée vers l'entente",
      justification:
        "Habermas critique la conception wébérienne de la rationalité, trop centrée sur l'agir rationnel en finalité, et lui oppose une rationalité fondée sur la recherche d'un accord mutuel entre locuteurs, par la discussion argumentée.",
      sources: ["Habermas, 1981, Théorie de l'agir communicationnel"],
    },
  },

  "robert-k-merton": {
    individuSociete: {
      value: 0.2,
      label: "Holisme relativisé (fonctionnalisme relatif)",
      justification:
        "Merton parle de « fonctionnalisme relatif », par opposition au « fonctionnalisme absolu » de Malinowski : il introduit la notion d'équivalent fonctionnel (plusieurs institutions différentes peuvent remplir la même fonction), ce qui assouplit le holisme déterministe de ses prédécesseurs.",
      sources: ["Saint-Martin, 2018, La sociologie de Robert K. Merton, La Découverte"],
    },
    methode: {
      value: 0.5,
      label: "Théories de moyenne portée — voie médiane assumée",
      justification:
        "Merton se positionne explicitement à mi-chemin entre la grande théorie abstraite de Parsons et l'empirisme purement statistique de Lazarsfeld — un « fonctionnalisme prudent » reliant théorie et enquête empirique.",
      sources: ["Merton, 1953, Éléments de théorie et de méthode sociologique"],
    },
    rationalite: {
      value: 0.3,
      label: "Structurellement contrainte, mais typologie de réponses individuelles",
      justification:
        "Sa théorie de l'anomie explique la déviance par le décalage entre buts culturels et moyens légitimes disponibles, mais il distingue cinq types de réponses individuelles à cette tension (conformisme, innovation, ritualisme, retraitisme, rébellion) — plus de nuance qu'un pur déterminisme.",
      sources: ["Saint-Martin, 2018, La sociologie de Robert K. Merton, La Découverte"],
    },
  },

  "bronislaw-malinowski": {
    individuSociete: {
      value: 0.08,
      label: "Holisme absolu et déterministe",
      justification:
        "Malinowski défend un « fonctionnalisme absolu » : chaque élément d'une culture remplit une fonction indispensable à la survie du groupe — une thèse plus radicale encore que celle de Durkheim.",
      sources: [
        "Young, 2018, Le Jason de l'anthropologie : vie, œuvre et legs de Bronislaw Malinowski, Encyclopédie Bérose des histoires de l'anthropologie",
      ],
    },
    methode: {
      value: 0.8,
      label: "Compréhensive radicale — malgré une théorie holiste",
      justification:
        "Contraste frappant avec sa théorie : Malinowski est l'inventeur même de l'observation participante, s'immergeant seul plusieurs années chez les Trobriandais, coupé du monde occidental, pour en apprendre la langue et la vie quotidienne.",
      sources: ["Malinowski, 1922, Argonauts of the Western Pacific"],
    },
    rationalite: {
      value: 0.15,
      label: "Instrumentale, au service de besoins biologiques",
      justification:
        "Pour Malinowski, la culture est une réponse instrumentale à des besoins biologiques fondamentaux (la faim, en premier lieu) — l'action collective s'explique par nécessité adaptative, non par un choix rationnel individuel.",
      sources: [
        "Young, 2018, Le Jason de l'anthropologie : vie, œuvre et legs de Bronislaw Malinowski, Encyclopédie Bérose des histoires de l'anthropologie",
      ],
    },
  },

  lazarsfeld: {
    individuSociete: {
      value: 0.5,
      label: "Relation — le petit groupe comme médiation",
      justification:
        "Lazarsfeld refuse explicitement l'analogie entre petit groupe et société : le groupe restreint (famille, collègues, amis) constitue une structure de médiation, avec ses propres normes, entre l'individu et les influences de la société plus large (médias, propagande) — ni pur individu isolé, ni pure détermination sociale directe.",
      sources: [
        "Laurens, 2010, L'œuvre oubliée en psychologie de Paul Lazarsfeld, Bulletin de psychologie, 63(4), 279-287",
      ],
    },
    methode: {
      value: 0.08,
      label: "Explicative quantitative — enquêtes par panel",
      justification:
        "Ses enquêtes reposent sur des entretiens répétés (panel) et des indices statistiques construits (indice de prédisposition politique) pour prédire et expliquer les choix, sans ambition théorique généralisante.",
      sources: [
        "Laurens, 2010, L'œuvre oubliée en psychologie de Paul Lazarsfeld, Bulletin de psychologie, 63(4), 279-287",
      ],
    },
    rationalite: {
      value: 0.2,
      label: "Choix largement prédéterminés par la position sociale",
      justification:
        "Ses enquêtes montrent que les choix de vote sont fortement prédits par des caractéristiques sociales préexistantes ; la campagne électorale a surtout pour effet d'activer des prédispositions latentes plutôt que de susciter une délibération rationnelle nouvelle.",
      sources: [
        "Lazarsfeld, Berelson & Gaudet, 1944, The People's Choice",
        "Laurens, 2010, L'œuvre oubliée en psychologie de Paul Lazarsfeld, Bulletin de psychologie, 63(4), 279-287",
      ],
    },
  },

  mead: {
    individuSociete: {
      value: 0.5,
      label: "Relation — behaviorisme social",
      justification:
        "Il n'y a « ni soi, ni conscience de soi, ni communication en dehors de la société » pour Mead, mais le soi garde une part créative (le « je » face au « moi » intériorisé) — ni pur individu, ni pure détermination sociale.",
      sources: ["Mead, 1934, L'Esprit, le soi et la société"],
    },
    methode: {
      value: 0.6,
      label: "Théorique — réflexion sur la conduite observable",
      justification:
        "Mead rejette l'expérimentation en laboratoire et les calculs de probabilité du behaviorisme classique de Watson ; sa méthode reste philosophique et théorique, centrée sur l'analyse de la conduite observable.",
      sources: [
        "Revue française de sociologie, 1963, Mead George Herbert, L'Esprit, le Soi et la Société",
      ],
    },
    rationalite: {
      value: 0.55,
      label: "Communicationnelle, plurielle",
      justification:
        "Mead conçoit une forme de socialité humaine capable de s'universaliser à travers l'exercice d'une « rationalité communicationnelle » — anticipant Habermas.",
      sources: ["PUF, notice éditoriale, George Herbert Mead"],
    },
  },

  cooley: {
    individuSociete: {
      value: 0.5,
      label: "Relation",
      justification:
        "Cooley rejette autant l'individualisme rigide que les théories sociales mécaniques : le « looking-glass self » montre que l'identité se façonne dans le miroir du regard d'autrui.",
      sources: ["Cooley, 1902, Human Nature and the Social Order"],
    },
    methode: {
      value: 0.75,
      label: "Compréhensive — introspection sympathique",
      justification:
        "Sa méthode d'« introspection sympathique » (se mettre imaginativement à la place du sujet) combinée à l'observation empirique de cas concrets (dont ses propres enfants).",
      sources: ["Cooley, 1902, Human Nature and the Social Order"],
    },
    rationalite: {
      value: 0.5,
      label: "Située, interprétative",
      justification:
        "Le processus du looking-glass self (imaginer, juger, ressentir) relève de l'interprétation imaginative, ni pur calcul ni pur automatisme.",
      sources: ["Cooley, 1902, Human Nature and the Social Order"],
    },
  },

  "herbert-blumer": {
    individuSociete: {
      value: 0.5,
      label: "Relation",
      justification:
        "Blumer identifie la relation individu/société comme l'une des prémisses fondamentales de sa position : l'acteur n'est pas un sujet passif, cible de contraintes externes ou internes qui conditionneraient sa réponse.",
      sources: [
        "Lacaze, 2013, L'interactionnisme symbolique de Blumer revisité, Sociétés, 121, 41-56",
      ],
    },
    methode: {
      value: 0.85,
      label: "Compréhensive — critique explicite de la statistique",
      justification:
        "Blumer préfère des « concepts sensibilisateurs » testés sur des cas concrets, et critique frontalement « l'analyse de variables », qui selon lui « omet le processus d'interprétation » propre à l'interaction.",
      sources: [
        "Lacaze, 2013, L'interactionnisme symbolique de Blumer revisité, Sociétés, 121, 41-56",
      ],
    },
    rationalite: {
      value: 0.5,
      label: "Située, interprétative",
      justification:
        "L'action se fonde sur un sens qui est « manipulé » et « modifié » via un processus interprétatif continu au fil de l'interaction.",
      sources: [
        "Lacaze, 2013, L'interactionnisme symbolique de Blumer revisité, Sociétés, 121, 41-56",
      ],
    },
  },

  "erving-goffman": {
    individuSociete: {
      value: 0.5,
      label: "Relation — « ordre de l'interaction »",
      justification:
        "Goffman théorise un niveau d'analyse autonome, « l'ordre de l'interaction », distinct à la fois de la psychologie individuelle et des structures macrosociales.",
      sources: [
        "Cefaï & Perreau, 2012, Erving Goffman et l'ordre de l'interaction, CURAPP-ESS",
      ],
    },
    methode: {
      value: 0.8,
      label: "Compréhensive — rupture avec le quantitatif",
      justification:
        "Goffman s'écarte rapidement des méthodes quantitatives et statistiques pour privilégier l'observation participante et l'ethnographie du quotidien.",
      sources: [
        "Encyclopédie Universalis, Biographie d'Erving Goffman : l'approche dramaturgique",
      ],
    },
    rationalite: {
      value: 0.5,
      label: "Située — stratégie de contrôle mutuel",
      justification:
        "L'acteur gère stratégiquement les impressions qu'il donne dans un « environnement fait de possibilités mutuelles de contrôle » — ni pur calcul, ni simple automatisme.",
      sources: ["Goffman, 1988, cité in Comment analyser une situation selon le dernier Goffman ?"],
    },
  },

  becker: {
    individuSociete: {
      value: 0.5,
      label: "Relation — théorie de l'étiquetage",
      justification:
        "La déviance n'est pas une propriété inhérente à un acte mais le résultat d'une réaction sociale d'étiquetage — ni pure essence individuelle, ni pur déterminisme social.",
      sources: ["Becker, 1963, Outsiders"],
    },
    methode: {
      value: 0.75,
      label: "Compréhensive — renouveau du travail de terrain",
      justification:
        "Becker contribue à un renouveau d'intérêt pour le travail de terrain, en particulier l'observation in situ, à une époque dominée par les enquêtes par questionnaire.",
      sources: [
        "Cefaï & Perreau, 2012, Erving Goffman et l'ordre de l'interaction, CURAPP-ESS",
      ],
    },
    rationalite: {
      value: 0.5,
      label: "Située, processuelle",
      justification:
        "La « carrière déviante » est un processus par étapes (apprentissage technique, modification de la perception de soi) — ni calcul initial, ni pure détermination.",
      sources: ["Becker, 1963, Outsiders"],
    },
  },

  hughes: {
    individuSociete: {
      value: 0.5,
      label: "Relation — interaction de l'individu et de l'institution",
      justification:
        "Ses travaux sur les professions (licence, mandat) analysent explicitement l'interaction continue entre l'individu et l'institution, notamment la négociation constante du « sale boulot » que chacun cherche à déléguer à autrui.",
      sources: ["Hughes, 1958, Men and Their Work"],
    },
    methode: {
      value: 0.75,
      label: "Compréhensive — pionnier du travail de terrain",
      justification:
        "Hughes joue un rôle déterminant dans le développement du travail de terrain en sociologie américaine, enseignant systématiquement cette méthode dès 1938.",
      sources: [
        "Chapoulie, 1984, Everett C. Hughes et le développement du travail de terrain en sociologie, Revue française de sociologie, 25(4), 582-608",
      ],
    },
    rationalite: {
      value: 0.5,
      label: "Située — négociation continue",
      justification:
        "Le concept de sale boulot décrit un processus continu de négociation en situation, où les individus cherchent activement à déléguer les tâches dévalorisantes pour préserver leur honorabilité.",
      sources: ["Hughes, 1962, Good People and Dirty Work, Social Problems, 10(1)"],
    },
  },

  "robert-park": {
    individuSociete: {
      value: 0.25,
      label: "Structures écologiques — compétition",
      justification:
        "Park fonde l'écologie humaine sur le modèle biologique de la compétition pour l'espace urbain.",
      sources: ["Park & Burgess, 1921, Introduction to the Science of Sociology"],
    },
    methode: {
      value: 0.65,
      label: "Compréhensive — observation directe",
      justification:
        "Park privilégie l'interaction directe avec les communautés étudiées (il fut d'abord journaliste), plutôt que les méthodes sociologiques traditionnelles.",
      sources: ["EBSCO Research Starters, Robert Ezra Park"],
    },
    rationalite: {
      value: 0.5,
      label: "Interprétative — le rôle individuel comme lecture de la convention",
      justification:
        "Dans son article de 1927, Park précise que le comportement individuel, bien que façonné par la coutume et la convention collective, passe par l'interprétation que l'individu fait de son propre rôle — une dimension interprétative en tension avec l'image plus structurelle de son écologie urbaine.",
      sources: [
        "Park, 1927, Human Nature and Collective Behavior, American Journal of Sociology, 32(5), 733-741",
      ],
    },
  },

  burgess: {
    individuSociete: {
      value: 0.25,
      label: "Structures écologiques — compétition économique",
      justification:
        "Son modèle des zones concentriques repose sur une logique de compétition économique régulant la distribution spatiale des groupes sociaux.",
      sources: ["Encyclopédie Universalis, Biographie d'Ernest W. Burgess"],
    },
    methode: {
      value: 0.5,
      label: "Mixte — cartographie et statistiques",
      justification:
        "À la différence de Park, plus orienté vers l'observation directe, Burgess développe les usages scientifiques de la cartographie et améliore les séries statistiques intra-urbaines.",
      sources: ["Encyclopédie Universalis, Biographie d'Ernest W. Burgess"],
    },
    rationalite: {
      value: 0.55,
      label: "Consciente et volontaire — coordination réfléchie des intérêts",
      justification:
        "Dans sa thèse de 1916, Burgess distingue explicitement le contrôle social (coercition) de la socialisation, qu'il définit comme la coordination consciente et volontaire par la personne de ses intérêts avec ceux du groupe — une conception plus réflexive que ne le laisserait supposer son seul modèle écologique ultérieur.",
      sources: [
        "Burgess, 1916, The Volitional Aspect of Socialization, in The Function of Socialization in Social Evolution, University of Chicago",
      ],
    },
  },
};// Positionnement théorique par AUTEUR INDIVIDUEL sur les 3 axes, avec
// justification et sources académiques à l'appui de chaque choix. Quand
// un auteur a une entrée ici, elle prend le pas sur la valeur de sa
// constellation (constellationAxisValues) pour l'affichage et pour les
// filtres.
//
// Rempli progressivement, courant par courant, avec double vérification
// systématique — voir le protocole ATS-001. Un auteur absent de ce
// fichier retombe simplement sur la valeur de sa constellation.
export const authorAxisValues = {
  durkheim: {
    individuSociete: {
      value: 0.08,
      label: "Primat de la société",
      justification:
        "Pour Durkheim, ce sont les faits sociaux — extérieurs à l'individu et qui s'imposent à lui — qui expliquent les comportements, pas l'inverse. La société vient avant l'individu, pas après.",
      sources: [
        "Durkheim, 1895, Les Règles de la méthode sociologique",
        "Magni-Berton, 2008, Holisme durkheimien et holisme bourdieusien, L'Année sociologique, 58(2), 299-318",
      ],
    },
    methode: {
      value: 0.08,
      label: "Explicative (causale)",
      justification:
        "Durkheim veut faire de la sociologie une science, sur le modèle des sciences naturelles : trouver des lois et des causes, plutôt que comprendre le sens que les gens donnent à leurs actes.",
      sources: ["Durkheim, 1895, Les Règles de la méthode sociologique"],
    },
    rationalite: {
      value: 0.1,
      label: "Faible (contraintes sociales extérieures)",
      justification:
        "Chez Durkheim, l'individu n'agit pas vraiment par calcul personnel : ses actes s'expliquent surtout par les contraintes sociales qui pèsent sur lui, souvent sans qu'il en ait conscience.",
      sources: [
        "Cottet, Émotions et rationalité dans la sociologie classique : les cas de Weber et Durkheim, OpenEdition",
      ],
    },
  },

  weber: {
    individuSociete: {
      value: 0.75,
      label: "Individu (méthodologique)",
      justification:
        "Weber part de l'individu et du sens qu'il donne à son action, pas de la société comme un tout. C'est lui qui pose les bases de ce qu'on appelle l'individualisme méthodologique, à l'opposé du holisme de Durkheim.",
      sources: ["Aron, 1967, Les Étapes de la pensée sociologique"],
    },
    methode: {
      value: 0.9,
      label: "Compréhensive",
      justification:
        "Pour Weber, comprendre une action sociale, c'est se mettre à la place de l'acteur et saisir le sens qu'il lui donne — pas seulement en observer les causes de l'extérieur.",
      sources: [
        "Colliot-Thélène, 2014, La sociologie de Max Weber, La Découverte, chap. IV",
      ],
    },
    rationalite: {
      value: 0.75,
      label: "Plurielle (typologie des 4 types d'action)",
      justification:
        "Weber distingue quatre types d'action (rationnelle en finalité, rationnelle en valeur, traditionnelle, affective) : pour lui, il n'existe pas une seule façon d'être rationnel.",
      sources: [
        "Colliot-Thélène, 2014, La sociologie de Max Weber, La Découverte",
        "Passeron, 1994, La rationalité et les types de l'action sociale chez Max Weber, Revue européenne des sciences sociales, 32(98), 5-44",
      ],
    },
  },

  bourdieu: {
    individuSociete: {
      value: 0.35,
      label: "Structures incorporées (habitus)",
      justification:
        "Bourdieu pense, comme Durkheim, que la société façonne l'individu — mais autrement : pas par une contrainte extérieure directe, mais via l'habitus, des dispositions intériorisées si profondément qu'on ne les perçoit même plus comme des contraintes.",
      sources: [
        "Magni-Berton, 2008, Holisme durkheimien et holisme bourdieusien, L'Année sociologique, 58(2), 299-318",
      ],
    },
    methode: {
      value: 0.45,
      label: "Mixte",
      justification:
        "Bourdieu combine deux méthodes a priori opposées : la statistique à grande échelle (pour cartographier les positions sociales) et l'enquête de terrain au plus près des gens (pour saisir leur sens pratique).",
      sources: [
        "Lebaron, 2016, L'espace social. Statistique et analyse géométrique des données dans l'œuvre de Pierre Bourdieu, in La méthodologie de Pierre Bourdieu en action, Dunod",
      ],
    },
    rationalite: {
      value: 0.4,
      label:
        "Pratique ambivalente — ni calcul rationnel, ni pur automatisme",
      justification:
        "Pour Bourdieu, l'action n'est ni un pur calcul rationnel, ni un pur automatisme : elle est produite par l'habitus, à mi-chemin entre les deux — ce qu'un commentateur a appelé son programme « ni-ni ».",
      sources: ["Dewerpe, 1996, La « stratégie » chez Pierre Bourdieu, Enquête"],
    },
  },

  comte: {
    individuSociete: {
      value: 0.05,
      label: "Primat radical de la société",
      justification:
        "Comte va encore plus loin que Durkheim : pour lui, l'idée même d'un individu isolé, coupé de la société, n'a aucun sens — ce n'est qu'une abstraction.",
      sources: [
        "Comte, 1830-1842, Cours de philosophie positive",
        "Lallement, 2017, Histoire des idées sociologiques",
      ],
    },
    methode: {
      value: 0.05,
      label: "Explicative (recherche de lois)",
      justification:
        "Comte veut fonder une science de la société sur le modèle des sciences de la nature : chercher des lois stables, pas des causes premières ni du sens vécu par les acteurs.",
      sources: ["Comte, 1830-1842, Cours de philosophie positive"],
    },
    rationalite: {
      value: 0.05,
      label: "Faible (nécessité historique)",
      justification:
        "Pour Comte, l'histoire humaine suit un progrès nécessaire en trois étapes (théologique, métaphysique, positive) — un mouvement inévitable, pas le résultat de choix individuels.",
      sources: [
        "Comte, 1822, Plan des travaux scientifiques nécessaires pour réorganiser la société",
      ],
    },
  },

  lahire: {
    individuSociete: {
      value: 0.45,
      label: "Échelle individuelle, mais toujours déterministe",
      justification:
        "Lahire regarde à l'échelle de l'individu plutôt qu'à celle de la société entière, mais il ne devient pas pour autant individualiste : il explique nos dispositions par nos expériences sociales passées, pas par notre libre arbitre.",
      sources: [
        "Lahire, 2002, Portraits sociologiques. Dispositions et variations individuelles",
        "Lahire, 2013, Dans les plis singuliers du social",
      ],
    },
    methode: {
      value: 0.6,
      label: "Compréhensive, à dominante qualitative",
      justification:
        "Lahire utilise plusieurs méthodes (entretiens, enquêtes, récits de vie), mais toujours pour aller au plus près du cas individuel — bien plus que par la statistique à grande échelle de Bourdieu.",
      sources: [
        "Lahire, 1998, L'Homme pluriel",
        "Lahire, 2002, Portraits sociologiques",
      ],
    },
    rationalite: {
      value: 0.45,
      label: "Dispositions plurielles selon le contexte",
      justification:
        "Chacun de nous porte en lui plusieurs dispositions, parfois contradictoires, héritées de socialisations différentes — et c'est le contexte du moment qui détermine laquelle se manifeste.",
      sources: ["Lahire, 1998, L'Homme pluriel"],
    },
  },

  wacquant: {
    individuSociete: {
      value: 0.35,
      label: "Structures incorporées, au-delà du dualisme agent/structure",
      justification:
        "Wacquant reprend l'idée bourdieusienne d'un corps façonné par la société, mais va plus loin en refusant même la distinction classique entre l'individu (l'agent) et la société (la structure).",
      sources: [
        "Wacquant, 2015, Pour une sociologie de chair et de sang, Terrains & Travaux, 26(1), 239-256",
      ],
    },
    methode: {
      value: 0.85,
      label: "Compréhensive radicale — participation observante incarnée",
      justification:
        "Pour étudier les boxeurs d'un quartier pauvre de Chicago, Wacquant s'est lui-même entraîné à la boxe pendant trois ans : sa méthode pousse l'immersion de terrain jusqu'à faire de son propre corps un outil d'enquête.",
      sources: [
        "Wacquant, 2000, Corps et âme. Carnets ethnographiques d'un apprenti boxeur",
      ],
    },
    rationalite: {
      value: 0.3,
      label: "Pratique, non réfléchie — encore plus que Bourdieu",
      justification:
        "Wacquant insiste sur des savoir-faire et des désirs profondément corporels, presque instinctifs, qu'on ne peut pas ramener à un raisonnement conscient.",
      sources: [
        "Wacquant, 2015, Pour une sociologie de chair et de sang, Terrains & Travaux, 26(1), 239-256",
      ],
    },
  },

  "gerard-mauger": {
    individuSociete: {
      value: 0.35,
      label: "Structures incorporées, comme Bourdieu",
      justification:
        "Mauger applique directement les outils de Bourdieu (habitus, capital, reproduction sociale) à l'étude de la jeunesse des milieux populaires.",
      sources: ["Mauger, 2006, Les Bandes, le milieu et la bohème populaire"],
    },
    methode: {
      value: 0.65,
      label: "Compréhensive, à dominante ethnographique",
      justification:
        "Mauger privilégie l'enquête de terrain et les entretiens en milieu populaire, avec une attention particulière à la relation entre le sociologue et les personnes enquêtées.",
      sources: ["Mauger, 1991, Enquêter en milieu populaire, Genèses, 6, 125-143"],
    },
    rationalite: {
      value: 0.4,
      label: "Comme Bourdieu, ni calcul ni automatisme",
      justification:
        "Mauger reprend le même cadre dispositionnaliste que Bourdieu pour comprendre les pratiques, parfois déviantes, des jeunes des classes populaires.",
      sources: ["Mauger, 2006, Les Bandes, le milieu et la bohème populaire"],
    },
  },

  "muriel-darmon": {
    individuSociete: {
      value: 0.5,
      label: "À la charnière entre structure et interaction",
      justification:
        "Le concept de « carrière » que Darmon emprunte à Becker mêle explicitement une dimension objective (la position sociale, la trajectoire) et une dimension subjective (ce que la personne ressent, l'image qu'elle a d'elle-même).",
      sources: [
        "Darmon, 2008, La notion de carrière : un instrument interactionniste d'objectivation, Sociétés contemporaines, 72(4), 27-46",
      ],
    },
    methode: {
      value: 0.75,
      label: "Compréhensive empirique",
      justification:
        "Son enquête sur les classes préparatoires repose sur une centaine d'entretiens et une centaine d'heures d'observation directe sur le terrain.",
      sources: [
        "Darmon, 2015, Classes préparatoires. La fabrique d'une jeunesse dominante",
      ],
    },
    rationalite: {
      value: 0.5,
      label: "Située, entre disposition et sens vécu",
      justification:
        "La carrière articule à la fois des contraintes sociales profondes (dispositions, habitus) et le sens que la personne donne elle-même à son propre parcours.",
      sources: ["Darmon, 2003, Devenir anorexique. Une approche sociologique"],
    },
  },

  "eva-illouz": {
    individuSociete: {
      value: 0.4,
      label: "Façonnée par les structures culturelles et économiques",
      justification:
        "Pour Illouz, même nos sentiments les plus intimes — l'amour en particulier — sont façonnés par des structures culturelles et économiques (industries culturelles, capitalisme), bien plus que par notre seule intériorité.",
      sources: ["Illouz, 2006, Les Sentiments du capitalisme"],
    },
    methode: {
      value: 0.65,
      label: "Compréhensive, analyse culturelle",
      justification:
        "Illouz analyse des contenus culturels (littérature de développement personnel, cinéma, applications de rencontre) et recueille des témoignages, plutôt que de faire des statistiques.",
      sources: ["Illouz, 2012, Pourquoi l'amour fait mal"],
    },
    rationalite: {
      value: 0.55,
      label: "Rationalisation historique de l'amour",
      justification:
        "Illouz montre que la sphère amoureuse devient progressivement « rationalisée », sur le modèle du marché (comparer les qualités des un·es et des autres pour faire le meilleur choix) — un phénomène historique, pas une nature humaine universelle.",
      sources: ["Illouz, 2012, Pourquoi l'amour fait mal"],
    },
  },

  "talcott-parsons": {
    individuSociete: {
      value: 0.3,
      label: "Entre action individuelle et système social",
      justification:
        "Parsons cherche dès 1937 à concilier l'action individuelle orientée par des valeurs (empruntée à Weber) et l'ordre social (emprunté à Durkheim), avant de déplacer son propre système théorique vers une conception plus systémique où l'acteur devient occupant de rôles au service du système social.",
      sources: [
        "Parsons, 1937, The Structure of Social Action",
        "Encyclopédie Universalis, Biographie de Talcott Parsons",
      ],
    },
    methode: {
      value: 0.25,
      label: "Grande théorie abstraite et déductive",
      justification:
        "Parsons construit un vaste système conceptuel abstrait, très éloigné de l'enquête empirique de terrain dominante à son époque (Chicago, Lazarsfeld) — ce qui lui vaut la critique fameuse de Wright Mills, pour qui sa « grande théorie » n'est que « multiplication de mots ».",
      sources: [
        "Dortier, 2009, Talcott Parsons et la grande théorie, in Molénat (dir.), La Sociologie, Éditions Sciences Humaines",
        "Mills, 1959, L'Imagination sociologique",
      ],
    },
    rationalite: {
      value: 0.55,
      label: "Variables-modèles : typologie plurielle au service du système",
      justification:
        "Ses cinq paires de « variables-modèles » (affectivité/neutralité affective, universalisme/particularisme...) décrivent différentes orientations de l'action, inspirées de Weber, mais réinterprétées comme des impératifs fonctionnels du système plutôt que des choix libres de l'acteur.",
      sources: [
        "Boudon, 1989, La théorie de l'action sociale de Parsons : la conserver, mais la dépasser, Sociologie et sociétés, 21(1), 55-67",
      ],
    },
  },

  "anthony-giddens": {
    individuSociete: {
      value: 0.6,
      label: "Dualité du structurel",
      justification:
        "Pour Giddens, les structures sociales sont à la fois la condition et le résultat de l'action des individus : elles ne préexistent pas à l'action comme une contrainte extérieure (Durkheim), ni ne s'y réduisent (individualisme), mais se reproduisent continuellement à travers elle.",
      sources: ["Giddens, 1987, La Constitution de la société"],
    },
    methode: {
      value: 0.5,
      label: "Théorique et synthétique, peu empirique",
      justification:
        "Comme Parsons, Giddens construit une théorie générale essentiellement conceptuelle ; à la différence de Bourdieu, son œuvre ne repose pas sur des enquêtes de terrain mais sur un travail de synthèse théorique entre sociologies de l'action et sociologies des structures.",
      sources: ["Giddens, 1987, La Constitution de la société"],
    },
    rationalite: {
      value: 0.55,
      label: "Conscience pratique et conscience discursive",
      justification:
        "Giddens distingue deux registres de la compétence des acteurs : la conscience pratique (savoir-faire tacites, non exprimables) et la conscience discursive (ce que l'acteur peut formuler verbalement) — ni pur calcul conscient, ni pur automatisme.",
      sources: ["Giddens, 1987, La Constitution de la société"],
    },
  },

  "jürgen-habermas": {
    individuSociete: {
      value: 0.45,
      label: "Intersubjectivité communicationnelle",
      justification:
        "Habermas décrit la société comme l'articulation entre des « mondes vécus » partagés intersubjectivement par la communication, et des systèmes fonctionnels régis par une rationalité instrumentale — ni pur individu, ni pure société.",
      sources: ["Habermas, 1981, Théorie de l'agir communicationnel"],
    },
    methode: {
      value: 0.55,
      label: "Reconstruction théorique et pragmatique du langage",
      justification:
        "Sa méthode combine une reconstruction conceptuelle du savoir préthéorique des locuteurs, la pragmatique formelle du langage, et un dialogue critique avec les classiques (Weber, Durkheim, Mead) — plus proche d'une synthèse théorique que d'une enquête empirique.",
      sources: ["Habermas, 1981, Théorie de l'agir communicationnel"],
    },
    rationalite: {
      value: 0.6,
      label: "Rationalité communicationnelle, plurielle, orientée vers l'entente",
      justification:
        "Habermas critique la conception wébérienne de la rationalité, trop centrée sur l'agir rationnel en finalité, et lui oppose une rationalité fondée sur la recherche d'un accord mutuel entre locuteurs, par la discussion argumentée.",
      sources: ["Habermas, 1981, Théorie de l'agir communicationnel"],
    },
  },

  "robert-k-merton": {
    individuSociete: {
      value: 0.2,
      label: "Holisme relativisé (fonctionnalisme relatif)",
      justification:
        "Merton parle de « fonctionnalisme relatif », par opposition au « fonctionnalisme absolu » de Malinowski : il introduit la notion d'équivalent fonctionnel (plusieurs institutions différentes peuvent remplir la même fonction), ce qui assouplit le holisme déterministe de ses prédécesseurs.",
      sources: ["Saint-Martin, 2018, La sociologie de Robert K. Merton, La Découverte"],
    },
    methode: {
      value: 0.5,
      label: "Théories de moyenne portée — voie médiane assumée",
      justification:
        "Merton se positionne explicitement à mi-chemin entre la grande théorie abstraite de Parsons et l'empirisme purement statistique de Lazarsfeld — un « fonctionnalisme prudent » reliant théorie et enquête empirique.",
      sources: ["Merton, 1953, Éléments de théorie et de méthode sociologique"],
    },
    rationalite: {
      value: 0.3,
      label: "Structurellement contrainte, mais typologie de réponses individuelles",
      justification:
        "Sa théorie de l'anomie explique la déviance par le décalage entre buts culturels et moyens légitimes disponibles, mais il distingue cinq types de réponses individuelles à cette tension (conformisme, innovation, ritualisme, retraitisme, rébellion) — plus de nuance qu'un pur déterminisme.",
      sources: ["Saint-Martin, 2018, La sociologie de Robert K. Merton, La Découverte"],
    },
  },

  "bronislaw-malinowski": {
    individuSociete: {
      value: 0.08,
      label: "Holisme absolu et déterministe",
      justification:
        "Malinowski défend un « fonctionnalisme absolu » : chaque élément d'une culture remplit une fonction indispensable à la survie du groupe — une thèse plus radicale encore que celle de Durkheim.",
      sources: [
        "Young, 2018, Le Jason de l'anthropologie : vie, œuvre et legs de Bronislaw Malinowski, Encyclopédie Bérose des histoires de l'anthropologie",
      ],
    },
    methode: {
      value: 0.8,
      label: "Compréhensive radicale — malgré une théorie holiste",
      justification:
        "Contraste frappant avec sa théorie : Malinowski est l'inventeur même de l'observation participante, s'immergeant seul plusieurs années chez les Trobriandais, coupé du monde occidental, pour en apprendre la langue et la vie quotidienne.",
      sources: ["Malinowski, 1922, Argonauts of the Western Pacific"],
    },
    rationalite: {
      value: 0.15,
      label: "Instrumentale, au service de besoins biologiques",
      justification:
        "Pour Malinowski, la culture est une réponse instrumentale à des besoins biologiques fondamentaux (la faim, en premier lieu) — l'action collective s'explique par nécessité adaptative, non par un choix rationnel individuel.",
      sources: [
        "Young, 2018, Le Jason de l'anthropologie : vie, œuvre et legs de Bronislaw Malinowski, Encyclopédie Bérose des histoires de l'anthropologie",
      ],
    },
  },

  lazarsfeld: {
    individuSociete: {
      value: 0.5,
      label: "Relation — le petit groupe comme médiation",
      justification:
        "Lazarsfeld refuse explicitement l'analogie entre petit groupe et société : le groupe restreint (famille, collègues, amis) constitue une structure de médiation, avec ses propres normes, entre l'individu et les influences de la société plus large (médias, propagande) — ni pur individu isolé, ni pure détermination sociale directe.",
      sources: [
        "Laurens, 2010, L'œuvre oubliée en psychologie de Paul Lazarsfeld, Bulletin de psychologie, 63(4), 279-287",
      ],
    },
    methode: {
      value: 0.08,
      label: "Explicative quantitative — enquêtes par panel",
      justification:
        "Ses enquêtes reposent sur des entretiens répétés (panel) et des indices statistiques construits (indice de prédisposition politique) pour prédire et expliquer les choix, sans ambition théorique généralisante.",
      sources: [
        "Laurens, 2010, L'œuvre oubliée en psychologie de Paul Lazarsfeld, Bulletin de psychologie, 63(4), 279-287",
      ],
    },
    rationalite: {
      value: 0.2,
      label: "Choix largement prédéterminés par la position sociale",
      justification:
        "Ses enquêtes montrent que les choix de vote sont fortement prédits par des caractéristiques sociales préexistantes ; la campagne électorale a surtout pour effet d'activer des prédispositions latentes plutôt que de susciter une délibération rationnelle nouvelle.",
      sources: [
        "Lazarsfeld, Berelson & Gaudet, 1944, The People's Choice",
        "Laurens, 2010, L'œuvre oubliée en psychologie de Paul Lazarsfeld, Bulletin de psychologie, 63(4), 279-287",
      ],
    },
  },
};
