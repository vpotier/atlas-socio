// Textes courts, rédigés à la main, pour les PROPOSITIONS DE RÉPONSE
// (choix à cliquer) du mode révision — jamais pour les questions/citations,
// qui peuvent rester longues.
//
// Pourquoi ce fichier existe : les définitions et résumés de l'atlas
// (concepts.js / authors.js) sont écrits comme du texte de lecture continue
// — souvent une seule longue phrase. Aucune troncature mécanique ne peut
// à la fois (a) ne jamais couper une idée en plein milieu et (b) rester
// courte : les deux objectifs sont contradictoires tant que le texte
// source est long. La seule solution qui obtient les deux à la fois est
// de RÉÉCRIRE chaque définition/résumé sous une forme volontairement
// courte et complète, adaptée au niveau (facile = langage courant,
// difficile = registre académique mais toujours bref).
//
// Ce fichier est donc, par nature, du contenu écrit à la main (et non
// dérivé automatiquement des données de l'atlas). Il doit être mis à jour
// manuellement si un concept ou un·e auteur·ice est ajouté·e, renommé·e ou
// si sa définition change significativement. Le script de génération
// (generateRevisionQuestions.mjs) vérifie au moment de la génération
// qu'aucune entrée ne dépasse la longueur maximale autorisée pour un choix
// de quiz — voir HARD_MAX_CHOICE_LENGTH dans ce script.

export const conceptShortTexts = {
  "habitus": {
    facile: "Manières d'agir et de penser acquises inconsciemment dès l'enfance en famille.",
    difficile: "Dispositions durables issues de la socialisation, qui structurent perceptions et pratiques.",
  },
  "champ": {
    facile: "Espace social où des personnes occupent des positions différentes et sont en concurrence.",
    difficile: "Espace social structuré de positions où des agents luttent pour des ressources spécifiques.",
  },
  "anomie": {
    facile: "Affaiblissement des règles communes d'une société, qui laisse les individus sans repères.",
    difficile: "État social où les normes collectives perdent leur pouvoir régulateur sur les individus.",
  },
  "action-sociale": {
    facile: "Acte accompli en tenant compte d'autrui et du sens qu'on lui donne soi-même.",
    difficile: "Comportement auquel l'acteur attribue un sens subjectif, orienté par celui d'autrui.",
  },
  "modele-agil": {
    facile: "Modèle selon lequel toute société doit remplir quatre fonctions pour se maintenir en équilibre.",
    difficile: "Grille systémique selon laquelle toute société remplit quatre fonctions pour se maintenir.",
  },
  "fonction-manifeste-et-latente": {
    facile: "Distinction entre l'effet visible et voulu d'une pratique sociale, et ses effets cachés.",
    difficile: "Distinction entre conséquences objectives voulues (manifestes) et non voulues (latentes).",
  },
  "equivalent-fonctionnel": {
    facile: "Une même fonction sociale peut être remplie par des institutions différentes selon les sociétés.",
    difficile: "Une même fonction sociale peut être remplie par des institutions différentes et interchangeables.",
  },
  "effet-pervers": {
    facile: "Résultat collectif indésirable produit involontairement par des choix individuels rationnels.",
    difficile: "Résultat collectif non intentionnel né de l'agrégation d'actions individuelles rationnelles.",
  },
  "diagramme-de-coleman": {
    facile: "Schéma reliant les effets d'un phénomène collectif sur les individus et leurs actions en retour.",
    difficile: "Modèle expliquant comment le niveau macro-social et les actions individuelles s'influencent.",
  },
  "approche-dramaturgique": {
    facile: "Analyse des interactions sociales comparées à une représentation théâtrale.",
    difficile: "Métaphore assimilant la vie sociale à un théâtre où chacun joue un rôle devant autrui.",
  },
  "institution-totale": {
    facile: "Lieu fermé où les résidents vivent coupés du monde, sous une organisation rigide.",
    difficile: "Lieu de vie et de travail coupé du monde extérieur, réglant tous les aspects de l'existence.",
  },
  "carriere-deviante": {
    facile: "Étapes par lesquelles une personne s'engage progressivement dans un comportement réprouvé.",
    difficile: "Processus séquentiel d'engagement dans des pratiques réprouvées, menant à une identité déviante.",
  },
  "force-des-liens-faibles": {
    facile: "Les relations peu intimes sont souvent plus utiles pour trouver des informations nouvelles.",
    difficile: "Les relations sociales distantes diffusent mieux les informations inédites que les liens proches.",
  },
  "encastrement-social": {
    facile: "L'activité économique reste toujours influencée par les relations sociales concrètes.",
    difficile: "L'action économique demeure insérée dans des réseaux de relations sociales personnelles.",
  },
  "equivalence-structurale": {
    facile: "Deux personnes occupant une position similaire dans un réseau, sans forcément se connaître.",
    difficile: "Deux acteurs d'un réseau ayant le même profil relationnel occupent des positions équivalentes.",
  },
  "indexicalite": {
    facile: "Le sens d'une parole dépend toujours du contexte précis dans lequel elle est prononcée.",
    difficile: "Le sens d'une expression dépend entièrement du contexte dans lequel elle est produite.",
  },
  "reflexivite": {
    facile: "Capacité à rendre ses propres actions compréhensibles au moment même où on les accomplit.",
    difficile: "Les activités quotidiennes décrivent et justifient l'ordre social qu'elles produisent.",
  },
  "analyse-de-conversation": {
    facile: "Étude détaillée des échanges verbaux réels pour comprendre les règles de la prise de parole.",
    difficile: "Approche empirique isolant les règles implicites qui régissent les interactions verbales.",
  },
  "objectivation": {
    facile: "Une pratique créée par les individus finit par leur apparaître comme une réalité extérieure.",
    difficile: "Les productions humaines se détachent de leurs créateurs et deviennent des réalités extérieures.",
  },
  "interiorisation": {
    facile: "Un individu fait sienne une réalité sociale extérieure, qui devient pour lui une évidence.",
    difficile: "La réalité sociale objectivée est assimilée par l'individu au cours de la socialisation.",
  },
  "identite-pour-soi-pour-autrui": {
    facile: "Distinction entre la façon dont on se perçoit et l'identité que les autres nous attribuent.",
    difficile: "Distinction entre identité attribuée par autrui et identité incorporée par le sujet lui-même.",
  },
  "theorie-critique-concept": {
    facile: "Manière de faire de la sociologie qui cherche à dévoiler les dominations pour les transformer.",
    difficile: "Approche visant à dévoiler les structures d'aliénation pour stimuler l'émancipation.",
  },
  "industrie-culturelle": {
    facile: "Production en masse de biens culturels qui standardise les contenus et la passivité du public.",
    difficile: "Production industrielle et standardisée de biens culturels favorisant conformisme et passivité.",
  },
  "agir-communicationnel": {
    facile: "Action orientée vers un accord mutuel obtenu par la discussion plutôt que par la contrainte.",
    difficile: "Action orientée vers l'intercompréhension mutuelle plutôt que vers le succès stratégique.",
  },
  "critique-de-la-vie-quotidienne": {
    facile: "Analyse des gestes et routines du quotidien pour comprendre l'influence du capitalisme.",
    difficile: "Analyse dévoilant comment le capitalisme standardise les aspects ordinaires de l'existence.",
  },
  "production-de-l-espace": {
    facile: "L'espace n'est jamais neutre : il est façonné par des rapports sociaux et économiques.",
    difficile: "L'espace est un produit social et politique façonné par les impératifs du capitalisme.",
  },
  "autonomie-relative-de-l-etat": {
    facile: "L'État dispose d'une marge de manœuvre propre, utile pour maintenir l'ordre social.",
    difficile: "L'État capitaliste garde une marge de manœuvre propre pour gérer les contradictions du système.",
  },
  "actant": {
    facile: "Tout élément, humain ou non, capable d'agir et de produire des effets dans un réseau.",
    difficile: "Toute entité humaine ou non humaine qui produit des effets au sein d'un réseau d'associations.",
  },
  "traduction": {
    facile: "Des acteurs aux intérêts différents en viennent à aligner leurs objectifs autour d'un projet.",
    difficile: "Un acteur traduit les intérêts d'autres entités dans ses propres termes pour les enrôler.",
  },
  "objet-frontiere": {
    facile: "Objet assez souple pour être utilisé différemment par plusieurs groupes tout en les reliant.",
    difficile: "Objet assez souple pour être partagé entre communautés et adapté à leurs besoins locaux.",
  },
  "dualite-du-structurel": {
    facile: "Les structures sociales permettent l'action des individus, qui en retour les reproduisent.",
    difficile: "Les structures sociales agissent à la fois comme contraintes et comme ressources pour l'action.",
  },
  "double-hermeneutique": {
    facile: "Les théories sociologiques diffusées dans la société influencent en retour les comportements.",
    difficile: "Les concepts sociologiques réintègrent le social et modifient les comportements étudiés.",
  },
  "conscience-pratique": {
    facile: "Savoir-faire et routines maîtrisés au quotidien, sans pouvoir les expliquer clairement.",
    difficile: "Savoirs tacites mis en œuvre dans la vie quotidienne sans besoin de les formuler explicitement.",
  },
  "socialisation-primaire-secondaire": {
    facile: "Distinction entre la socialisation en famille durant l'enfance et celle qui vient plus tard.",
    difficile: "Intériorisation des normes sociales, d'abord en famille, puis au contact d'autres institutions.",
  },
  "sale-boulot": {
    facile: "Tâches ingrates qu'une profession valorisée délègue à d'autres pour préserver son image.",
    difficile: "Tâches dégradantes qu'une profession valorisée délègue pour préserver son honorabilité.",
  },
  "rationalite-cognitive": {
    facile: "Un individu agit selon des croyances qui lui paraissent fondées, même si elles sont fausses.",
    difficile: "L'acteur agit selon des croyances qui lui semblent fondées, même objectivement fausses.",
  },
  "double-transaction": {
    facile: "L'identité se construit à partir du sens qu'on donne à son parcours et de l'avis des autres.",
    difficile: "L'identité naît de l'articulation entre transaction biographique et transaction relationnelle.",
  },
  "raison-instrumentale": {
    facile: "Raison réduite à un calcul d'efficacité, sans jamais interroger si le but est souhaitable.",
    difficile: "Raison réduite au calcul des meilleurs moyens, sans interroger la valeur du but poursuivi.",
  },
  "script-technique": {
    facile: "Programme d'action inscrit dans un objet technique, qui autorise ou exclut certains usages.",
    difficile: "Programme d'action inscrit dans un objet technique par ses concepteurs, orientant ses usages.",
  },
  "lecture-symptomale": {
    facile: "Lecture d'un texte qui interroge ses silences pour révéler un problème non formulé.",
    difficile: "Lecture interrogeant les silences et contradictions d'un texte pour révéler un problème latent.",
  },
  "regimes-de-justification": {
    facile: "Principes partagés, comme le mérite ou la solidarité, invoqués pour justifier ses actes.",
    difficile: "Principes de justice partagés auxquels on se réfère pour justifier ses actes en cas de désaccord.",
  },
  "bifurcations-biographiques": {
    facile: "Changement soudain et durable dans le parcours de vie, marqué par une forte imprévisibilité.",
    difficile: "Changement majeur, soudain et irréversible dans une trajectoire de vie, très imprévisible.",
  },
  "intervention-sociologique": {
    facile: "Méthode réunissant des militants pour les amener à s'auto-analyser collectivement.",
    difficile: "Méthode réunissant un groupe militant pour révéler collectivement le sens de son engagement.",
  },
  "imagination-sociologique": {
    facile: "Capacité à relier sa propre vie aux structures sociales et historiques plus larges.",
    difficile: "Capacité à relier les troubles personnels aux enjeux publics qui les dépassent.",
  },
  "travail-emotionnel": {
    facile: "Effort demandé, dans certains métiers, pour ajuster ses émotions aux attentes du poste.",
    difficile: "Effort requis dans les métiers de service pour ajuster émotions ressenties et affichées.",
  },
  "performativite-du-genre": {
    facile: "Le genre n'exprime pas une identité intérieure, il se construit par la répétition d'actes.",
    difficile: "Le genre résulte d'une répétition d'actes normés, et non d'une identité préexistante.",
  },
  "redistribution-reconnaissance": {
    facile: "Deux formes de justice sociale : corriger les inégalités économiques et le mépris social.",
    difficile: "Justice sociale articulant correction des inégalités économiques et du déni de reconnaissance.",
  },
  "transindividuel": {
    facile: "L'individuel et le collectif se construisent en même temps, l'un ne précédant jamais l'autre.",
    difficile: "L'individuel et le collectif s'individuent simultanément, sans priorité de l'un sur l'autre.",
  },
  "sociologie-formelle": {
    facile: "Étude des formes prises par les relations entre personnes, plutôt que de leur contenu précis.",
    difficile: "Approche isolant les formes récurrentes de l'interaction sociale de leur contenu concret.",
  },
  "action-reciproque": {
    facile: "La société se produit dans l'échange constant entre les personnes qui interagissent.",
    difficile: "La vie collective se saisit uniquement dans l'action réciproque entre individus.",
  },
  "dyade-et-triade": {
    facile: "Ajouter une troisième personne à un groupe de deux change complètement les relations.",
    difficile: "Le passage d'un groupe de deux à un groupe de trois transforme la nature des relations.",
  },
  "l-etranger": {
    facile: "L'étranger n'est ni extérieur ni intégré au groupe : il est à la fois proche et distant.",
    difficile: "L'étranger occupe une position paradoxale de proximité et de distance envers le groupe.",
  },
  "lanceur-alerte": {
    facile: "Personne qui alerte la première sur un danger avant qu'il ne soit reconnu par tous.",
    difficile: "Acte par lequel un individu s'efforce de faire reconnaître publiquement un danger précurseur.",
  },
  "controverse": {
    facile: "Dispute publique où l'on continue de débattre sans basculer dans un pur rapport de force.",
    difficile: "Dispute publique argumentée entre acteurs qui se reconnaissent mutuellement le droit de débattre.",
  },
  "valence-differentielle-sexes": {
    facile: "Dans toutes les sociétés connues, la différence entre sexes se transforme en hiérarchie.",
    difficile: "Traduction systématique, dans toutes les sociétés, de la différence des sexes en hiérarchie.",
  },
  "patriarcat-mode-production": {
    facile: "L'oppression des femmes fonctionne comme un système économique fondé sur le travail domestique.",
    difficile: "Mode de production domestique où le travail des femmes est approprié gratuitement par les hommes.",
  },
  "grounded-theory": {
    facile: "Méthode construisant une théorie à partir de ce que l'on observe sur le terrain.",
    difficile: "Méthode qualitative construisant une théorie par comparaisons constantes des données de terrain.",
  },
  "ecologie-juridictions-professionnelles": {
    facile: "Les métiers se disputent en permanence des territoires de compétence, comme des frontières.",
    difficile: "Les professions se définissent par leur compétition permanente pour des juridictions d'expertise.",
  },
  "banalite-du-mal": {
    facile: "On peut commettre des crimes terribles en obéissant aux ordres sans réfléchir.",
    difficile: "Les pires crimes peuvent résulter de l'absence de pensée critique et de l'obéissance routinière.",
  },
};

export const authorShortTexts = {
  "durkheim": {
    facile: "Pense que c'est la société dans son ensemble qui explique le comportement des individus.",
    difficile: "Explique les phénomènes sociaux par des faits sociaux extérieurs aux individus.",
  },
  "weber": {
    facile: "Pense qu'il faut comprendre le sens que chaque personne donne elle-même à ses actes.",
    difficile: "Cherche à comprendre le sens que les individus donnent à leurs propres actions.",
  },
  "bourdieu": {
    facile: "Pense que la société façonne les individus profondément, sans qu'ils en aient conscience.",
    difficile: "Articule structures sociales et pratiques individuelles via habitus, champ et capitaux.",
  },
  "bronislaw-malinowski": {
    facile: "Pense que chaque élément d'une culture remplit une fonction indispensable au groupe.",
    difficile: "Pose les bases du fonctionnalisme via l'observation participante en anthropologie de terrain.",
  },
  "talcott-parsons": {
    facile: "Compare la société à un système dont chaque institution remplit une fonction nécessaire.",
    difficile: "Élabore une théorie générale et systémique de l'action sociale, dite fonctionnaliste.",
  },
  "robert-k-merton": {
    facile: "Nuance le fonctionnalisme : une institution peut aussi avoir des effets négatifs imprévus.",
    difficile: "Distingue fonctions manifestes et latentes, et plaide pour des théories de moyenne portée.",
  },
  "raymond-boudon": {
    facile: "Explique les phénomènes sociaux à partir de l'addition des actions individuelles.",
    difficile: "Explique les phénomènes collectifs par l'agrégation d'actions individuelles rationnelles.",
  },
  "james-coleman": {
    facile: "Pense que l'intérêt personnel des individus suffit à expliquer les phénomènes sociaux.",
    difficile: "Formalise mathématiquement le passage du niveau individuel au niveau collectif.",
  },
  "herbert-blumer": {
    facile: "Pense que les individus agissent selon le sens qu'ils donnent aux choses, en interaction.",
    difficile: "Forge l'expression « interactionnisme symbolique » autour du sens construit en interaction.",
  },
  "erving-goffman": {
    facile: "Étudie la vie quotidienne comme une scène de théâtre où chacun joue un rôle.",
    difficile: "Développe une approche dramaturgique où chaque individu gère l'impression qu'il donne.",
  },
  "becker": {
    facile: "Montre que la déviance résulte d'un étiquetage social, non d'une caractéristique propre.",
    difficile: "Élabore la théorie de l'étiquetage : la déviance naît d'une qualification sociale.",
  },
  "harrison-white": {
    facile: "Développe des modèles mathématiques précis pour représenter les réseaux de relations.",
    difficile: "Fonde l'analyse structurale moderne en se concentrant sur la géométrie des liens sociaux.",
  },
  "mark-granovetter": {
    facile: "Montre que les relations peu proches sont souvent les plus utiles pour trouver un emploi.",
    difficile: "Introduit la distinction entre liens forts et liens faibles, et le concept d'encastrement.",
  },
  "lazega": {
    facile: "Étudie les réseaux de relations au sein des organisations, comme entre avocats d'un cabinet.",
    difficile: "Formalise la sociologie néo-structurale en combinant réseaux sociaux et organisations.",
  },
  "harold-garfinkel": {
    facile: "Fonde l'ethnométhodologie, l'étude des méthodes ordinaires qui rendent le monde intelligible.",
    difficile: "Conçoit l'ordre social comme une réalisation pratique continue, non une structure préexistante.",
  },
  "harvey-sacks": {
    facile: "Fonde l'analyse de conversation, l'étude détaillée des règles des échanges verbaux.",
    difficile: "Démontre que la parole quotidienne est structurée par des règles d'organisation séquentielle.",
  },
  "peter-berger": {
    facile: "Montre que la réalité sociale résulte d'un aller-retour constant entre individus et société.",
    difficile: "Décrit un processus dialectique en trois étapes : extériorisation, objectivation, intériorisation.",
  },
  "thomas-luckmann": {
    facile: "Montre que la réalité sociale naît d'un processus constant d'échange entre individus et société.",
    difficile: "Décrit comment les représentations subjectives se cristallisent en structures sociales objectives.",
  },
  "claude-dubar": {
    facile: "Étudie comment se construit l'identité à travers une « double transaction ».",
    difficile: "Conceptualise l'identité comme dualité entre identité pour autrui et identité pour soi.",
  },
  "max-horkheimer": {
    facile: "Pense que la raison moderne s'est réduite à un calcul d'efficacité au service de la domination.",
    difficile: "Formule le projet d'une théorie critique visant à dénoncer l'ordre social existant.",
  },
  "theodor-w-adorno": {
    facile: "Critique l'industrie culturelle, qu'il juge standardisée et propre à la passivité du public.",
    difficile: "Théorise l'industrie culturelle : la culture de masse standardise les consciences.",
  },
  "jürgen-habermas": {
    facile: "Propose une rationalité fondée sur la recherche d'un accord mutuel par la discussion.",
    difficile: "Substitue à la raison instrumentale une théorie de l'agir communicationnel.",
  },
  "henri-lefebvre": {
    facile: "Étudie comment le capitalisme façonne jusqu'à l'espace dans lequel nous vivons.",
    difficile: "Analyse comment le capitalisme colonise l'existence ordinaire par la marchandisation de l'espace.",
  },
  "nicos-poulantzas": {
    facile: "Étudie l'État à partir d'une grille marxiste : il sert d'abord les classes dominantes.",
    difficile: "Théorise l'autonomie relative de l'État comme condensation d'un rapport de forces entre classes.",
  },
  "bruno-latour": {
    facile: "Pense que les objets techniques jouent un rôle actif, au même titre que les humains.",
    difficile: "Fonde la théorie de l'acteur-réseau et le principe de symétrie entre humains et non-humains.",
  },
  "michel-callon": {
    facile: "Montre qu'une innovation technique se construit par un processus de « traduction ».",
    difficile: "Étudie la problématisation et l'intéressement par lesquels les innovateurs enrôlent des alliés.",
  },
  "susan-leigh-star": {
    facile: "Montre que les systèmes de classification ne sont jamais neutres et peuvent exclure certains.",
    difficile: "Étudie comment des groupes hétérogènes coopèrent sans partager le même point de vue.",
  },
  "anthony-giddens": {
    facile: "Refuse de choisir entre les structures sociales et l'action individuelle.",
    difficile: "Théorise la dualité du structurel : les structures sont à la fois moyen et résultat de l'action.",
  },
  "levi-strauss": {
    facile: "Pense que les individus sont façonnés par des structures inconscientes communes à l'humanité.",
    difficile: "Initie le structuralisme en décelant des structures cachées dans la parenté et les mythes.",
  },
  "althusser": {
    facile: "Pense que ce sont les structures qui déterminent les individus, et non l'inverse.",
    difficile: "Développe le concept d'idéologie structurée pour expliquer la reproduction des classes dominées.",
  },
  "comte": {
    facile: "Fondateur du positivisme, pense que l'individu isolé n'existe pas vraiment.",
    difficile: "Affirme la possibilité d'une science positive des faits sociaux.",
  },
  "marx": {
    facile: "Pense que les rapports économiques déterminent la façon de penser et d'agir des individus.",
    difficile: "Fait de la lutte des classes le moteur du changement historique.",
  },
  "erich-fromm": {
    facile: "Combine psychanalyse et marxisme pour comprendre comment la société façonne la psychologie.",
    difficile: "Étudie l'aliénation comme rationalisation de la société dans une synthèse freudo-marxiste.",
  },
  "herbert-marcuse": {
    facile: "Pense que la société détourne nos pulsions à son profit plutôt que de les laisser s'exprimer.",
    difficile: "Théorise la désublimation répressive, qui neutralise le potentiel critique du désir.",
  },
  "ann-oakley": {
    facile: "Étudie le travail domestique des femmes au foyer comme un véritable travail invisible.",
    difficile: "Met en circulation la distinction moderne entre sexe biologique et genre construit.",
  },
  "judith-butler": {
    facile: "Pense que le genre se construit par la répétition d'actes conformes à des normes sociales.",
    difficile: "Soutient le caractère performatif du genre, constitué par la répétition d'actes codifiés.",
  },
  "luc-boltanski": {
    facile: "Étudie comment les personnes justifient leurs actes lors d'un désaccord.",
    difficile: "Initie le paradigme pragmatique centré sur les compétences critiques ordinaires des acteurs.",
  },
  "laurent-thevenot": {
    facile: "Étudie comment les objets et instruments participent aux justifications lors d'un désaccord.",
    difficile: "Prolonge la sociologie pragmatique par une théorie des régimes d'engagement.",
  },
  "alain-touraine": {
    facile: "Pense que ce sont les individus et les mouvements sociaux qui font l'histoire.",
    difficile: "Place les mouvements sociaux au centre de l'analyse comme révélateurs des rapports sociaux.",
  },
  "cooley": {
    facile: "Montre que l'identité se construit dans le regard des autres, comme dans un miroir.",
    difficile: "Développe le concept de looking-glass self, l'identité reflétée par le regard d'autrui.",
  },
  "mead": {
    facile: "Pense que le « soi » se construit progressivement par l'interaction avec les autres.",
    difficile: "Invente le concept d'« autrui généralisé », guide de l'action individuelle.",
  },
  "robert-park": {
    facile: "Compare la ville à un écosystème naturel où les groupes se répartissent l'espace.",
    difficile: "Décrit le système social comme un ensemble de forces à l'image du cosmos.",
  },
  "burgess": {
    facile: "Propose un modèle des zones concentriques pour représenter la répartition urbaine.",
    difficile: "Élabore le modèle des zones concentriques expliquant l'expansion des villes en anneaux.",
  },
  "lazarsfeld": {
    facile: "Développe des méthodes d'enquête rigoureuses fondées sur des questionnaires et statistiques.",
    difficile: "Développe un empirisme quantitativiste centré sur les techniques d'enquête statistique.",
  },
  "zelizer": {
    facile: "Montre que l'argent n'est jamais neutre : il porte des significations morales différentes.",
    difficile: "Démontre que l'argent est socialement et moralement différencié selon les contextes.",
  },
  "akrich": {
    facile: "Étudie comment les objets techniques inscrivent un usage prévu par leurs concepteurs.",
    difficile: "Développe le concept de script, l'usage inscrit dans un objet technique par ses concepteurs.",
  },
  "lahire": {
    facile: "Pense qu'un même individu possède des dispositions parfois contradictoires.",
    difficile: "Soutient que les individus possèdent des dispositions plurielles, non un habitus unifié.",
  },
  "muriel-darmon": {
    facile: "Combine une approche centrée sur les structures sociales avec l'étude des parcours individuels.",
    difficile: "Articule une approche dispositionnaliste avec la tradition interactionniste de Chicago.",
  },
  "wacquant": {
    facile: "Prolonge une approche centrée sur l'habitus en l'appliquant à la marginalité urbaine.",
    difficile: "Prolonge un cadre dispositionnaliste par une microsociologie charnelle de la marginalité urbaine.",
  },
  "gerard-mauger": {
    facile: "Applique un cadre centré sur l'habitus et le capital à l'étude de la jeunesse populaire.",
    difficile: "Applique et prolonge un cadre dispositionnaliste à l'étude de la jeunesse des classes populaires.",
  },
  "hochschild": {
    facile: "Étudie comment certains métiers exigent de gérer et d'afficher des émotions précises.",
    difficile: "Fonde la sociologie des émotions et le concept de travail émotionnel.",
  },
  "eva-illouz": {
    facile: "Étudie comment le capitalisme façonne nos sentiments les plus intimes, comme l'amour.",
    difficile: "Analyse comment le capitalisme contemporain transforme en marchandises nos vies affectives.",
  },
  "nancy-fraser": {
    facile: "Distingue deux formes de justice sociale : la redistribution et la reconnaissance.",
    difficile: "Articule une théorie de la justice sociale mêlant redistribution économique et reconnaissance.",
  },
  "hughes": {
    facile: "Montre que chaque groupe professionnel délègue son « sale boulot » à d'autres.",
    difficile: "Fonde une sociologie du travail attentive aux divisions entre professions et « sale boulot ».",
  },
  "wright-mills": {
    facile: "Appelle à relier les biographies individuelles aux structures historiques et sociales.",
    difficile: "Nomme « imagination sociologique » la capacité à relier troubles personnels et enjeux publics.",
  },
  "degenne": {
    facile: "Pionnier de l'analyse des réseaux sociaux en France, il importe l'approche structurale américaine.",
    difficile: "Théorise en français l'« interactionnisme structural », d'inspiration structurale américaine.",
  },
  "forse": {
    facile: "Coécrit l'ouvrage de référence qui importe l'approche structurale américaine en France.",
    difficile: "Théorise l'« interactionnisme structural » en sociologie française, puis étudie la justice sociale.",
  },
  "bidart": {
    facile: "Étudie comment les réseaux personnels évoluent au fil de la vie, lors de moments de bascule.",
    difficile: "Étudie la dynamique des réseaux personnels au fil des bifurcations biographiques.",
  },
  "grossetti": {
    facile: "Transpose en France une méthode d'enquête sur les réseaux personnels développée aux États-Unis.",
    difficile: "Met au point les narrations quantifiées pour reconstituer des chaînes de relations mobilisées.",
  },
  "claude-fischer": {
    facile: "Mène l'une des premières grandes enquêtes sur les réseaux personnels, en zone urbaine et rurale.",
    difficile: "Conduit une enquête fondatrice sur les réseaux personnels devenue une référence internationale.",
  },
  "simmel": {
    facile: "Pense que la société existe dans les interactions entre les personnes, dès qu'elles se rencontrent.",
    difficile: "Développe une sociologie formelle isolant les formes récurrentes de l'interaction sociale.",
  },
  "ellul": {
    facile: "Pense que la technique est devenue un système autonome échappant au contrôle humain.",
    difficile: "Soutient que la technique est devenue un phénomène autonome échappant au contrôle humain.",
  },
  "simondon": {
    facile: "Pense que l'individu et le collectif se construisent en même temps, sans jamais se précéder.",
    difficile: "Propose de comprendre les objets techniques comme ayant leur propre mode d'existence.",
  },
  "desrosieres": {
    facile: "Montre que les catégories statistiques résultent de conventions établies collectivement.",
    difficile: "Montre que la statistique est un langage construit socialement, non un simple reflet du réel.",
  },
  "francis-chateauraynaud": {
    facile: "Étudie comment une inquiétude se transforme en alerte publique, puis en controverse ou en loi.",
    difficile: "Crée la notion de lanceur d'alerte pour décrire ceux qui font reconnaître un danger précurseur.",
  },
  "cyril-lemieux": {
    facile: "Étudie comment fonctionnent les disputes publiques, les controverses, selon des règles précises.",
    difficile: "Défend une analyse grammaticale de l'action combinant deux grandes traditions sociologiques.",
  },
  "nicolas-dodier": {
    facile: "Étudie comment médecins, ouvriers ou juges portent des jugements en situation complexe.",
    difficile: "Développe une sociologie pragmatique du jugement médical, puis du travail et de la technique.",
  },
  "margaret-mead": {
    facile: "A montré, en Océanie, que le caractère et les rôles de genre varient selon les cultures.",
    difficile: "Montre que les comportements attribués aux sexes varient considérablement selon les cultures.",
  },
  "florence-weber": {
    facile: "Auteure du manuel de référence pour apprendre à enquêter sur le terrain en sociologie.",
    difficile: "Spécialiste de l'économie domestique et de la parenté contemporaine, méthodologue du terrain.",
  },
  "margaret-maruani": {
    facile: "Montre que malgré la hausse de l'emploi féminin, les inégalités au travail persistent.",
    difficile: "Théorise la distinction entre travail et emploi et documente les inégalités de genre.",
  },
  "hannah-arendt": {
    facile: "A inventé l'expression « banalité du mal » lors du procès d'Eichmann.",
    difficile: "Analyse le totalitarisme et invente l'expression « banalité du mal » au procès Eichmann.",
  },
  "francoise-heritier": {
    facile: "Montre que toutes les sociétés connues, même égalitaires en apparence, hiérarchisent les sexes.",
    difficile: "Développe la notion de valence différentielle des sexes, hiérarchie universelle entre les sexes.",
  },
  "christine-delphy": {
    facile: "Pense que la domination des femmes fonctionne comme un système économique à part entière.",
    difficile: "Analyse l'oppression des femmes comme un système économique fondé sur le travail domestique gratuit.",
  },
  "andrew-abbott": {
    facile: "Étudie comment les métiers se disputent des territoires d'expertise, comme des pays leurs frontières.",
    difficile: "Étudie le système des professions en concurrence pour le contrôle de juridictions d'expertise.",
  },
  "anselm-strauss": {
    facile: "Coinvente la grounded theory, méthode pour construire des théories à partir du terrain.",
    difficile: "Cofonde la grounded theory, méthode pour construire des théories à partir des données de terrain.",
  },
};
