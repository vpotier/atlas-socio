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
        "Holisme méthodologique : « la cause déterminante d'un fait social doit être recherchée parmi les faits sociaux antécédents, et non parmi les états de conscience individuelle. »",
      sources: [
        "Durkheim, 1895, Les Règles de la méthode sociologique",
        "Magni-Berton, 2008, Holisme durkheimien et holisme bourdieusien, L'Année sociologique, 58(2), 299-318",
      ],
    },
    methode: {
      value: 0.08,
      label: "Explicative (causale)",
      justification:
        "Recherche de lois sociales causales, sur le modèle des sciences naturelles, plutôt qu'une compréhension du sens vécu par les acteurs.",
      sources: ["Durkheim, 1895, Les Règles de la méthode sociologique"],
    },
    rationalite: {
      value: 0.1,
      label: "Faible (contraintes sociales extérieures)",
      justification:
        "L'action « rationnelle en finalité » (utilitaire) est explicitement exclue de l'action sociale normale chez Durkheim, réservée à l'acteur anomique ou désocialisé.",
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
        "Fondateur reconnu de l'individualisme méthodologique en sociologie, en rupture explicite avec le holisme durkheimien.",
      sources: ["Aron, 1967, Les Étapes de la pensée sociologique"],
    },
    methode: {
      value: 0.9,
      label: "Compréhensive",
      justification:
        "Sociologie compréhensive : la sociologie doit comprendre par interprétation le sens subjectif visé par l'acteur, non se limiter à l'expliquer causalement de l'extérieur.",
      sources: [
        "Colliot-Thélène, 2014, La sociologie de Max Weber, La Découverte, chap. IV",
      ],
    },
    rationalite: {
      value: 0.75,
      label: "Plurielle (typologie des 4 types d'action)",
      justification:
        "Typologie des quatre types d'action sociale (rationnelle en finalité, rationnelle en valeur, traditionnelle, affective) : la rationalité y est plurielle, non réductible à un calcul unique.",
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
        "Bourdieu propose un holisme d'un type radicalement différent de celui de Durkheim : la société contraint l'individu non plus directement de l'extérieur, mais via des structures incorporées (habitus) qui orientent la perception et l'action sans être consciemment perçues comme des contraintes.",
      sources: [
        "Magni-Berton, 2008, Holisme durkheimien et holisme bourdieusien, L'Année sociologique, 58(2), 299-318",
      ],
    },
    methode: {
      value: 0.45,
      label: "Mixte",
      justification:
        "Articulation délibérée entre statistique multivariée (analyse des correspondances multiples, utilisée pour construire l'espace des champs) et immersion ethnographique (terrain kabyle, sens pratique).",
      sources: [
        "Lebaron, 2016, L'espace social. Statistique et analyse géométrique des données dans l'œuvre de Pierre Bourdieu, in La méthodologie de Pierre Bourdieu en action, Dunod",
      ],
    },
    rationalite: {
      value: 0.4,
      label:
        "Pratique ambivalente — programme « ni-ni » : ni calcul rationnel conscient, ni pur automatisme mécanique",
      justification:
        "Programme « ni-ni » : ni calcul rationnel conscient, ni pur automatisme mécanique — la stratégie est générée par l'habitus, ambivalente entre les deux pôles.",
      sources: ["Dewerpe, 1996, La « stratégie » chez Pierre Bourdieu, Enquête"],
    },
  },
};
