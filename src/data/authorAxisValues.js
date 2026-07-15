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
};
