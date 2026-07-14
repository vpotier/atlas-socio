// Exécuter une seule fois depuis la racine du projet :
//   node add-themes.js
// Ajoute le champ `themes: [...]` à chaque auteur de src/data/authors.js.
// Le script est sûr à relancer : si un auteur a déjà un champ `themes`,
// il est ignoré (pas de doublon).

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "src/data/authors.js");
let text = fs.readFileSync(filePath, "utf-8");

const themesMap = {
  durkheim: ["Sociologie de la religion", "Sociologie de l'éducation et de la socialisation"],
  weber: ["Sociologie politique et de l'État", "Sociologie de la religion"],
  bourdieu: ["Sociologie de l'éducation et de la socialisation"],
  "robert-k-merton": ["Sociologie de la déviance"],
  "raymond-boudon": ["Sociologie de l'éducation et de la socialisation"],
  "james-coleman": ["Sociologie de l'éducation et de la socialisation", "Sociologie économique"],
  becker: ["Sociologie de la déviance", "Sociologie du travail et des professions"],
  "harrison-white": ["Sociologie économique"],
  "mark-granovetter": ["Sociologie économique", "Sociologie du travail et des professions"],
  lazega: ["Sociologie du travail et des professions", "Sociologie économique"],
  "peter-berger": ["Sociologie de la religion"],
  "thomas-luckmann": ["Sociologie de la religion"],
  "claude-dubar": ["Sociologie du travail et des professions", "Sociologie de l'éducation et de la socialisation"],
  "max-horkheimer": ["Sociologie des médias et industries culturelles"],
  "theodor-w-adorno": ["Sociologie des médias et industries culturelles"],
  "jürgen-habermas": ["Sociologie politique et de l'État", "Sociologie des médias et industries culturelles"],
  "henri-lefebvre": ["Sociologie urbaine"],
  "nicos-poulantzas": ["Sociologie politique et de l'État"],
  "bruno-latour": ["Sociologie de l'innovation et des techniques (STS)"],
  "michel-callon": ["Sociologie de l'innovation et des techniques (STS)", "Sociologie économique"],
  "susan-leigh-star": ["Sociologie de l'innovation et des techniques (STS)"],
  marx: ["Sociologie économique", "Sociologie politique et de l'État"],
  "herbert-marcuse": ["Sociologie des médias et industries culturelles"],
  "ann-oakley": ["Études de genre", "Sociologie du travail et des professions"],
  "judith-butler": ["Études de genre"],
  "luc-boltanski": ["Sociologie du travail et des professions", "Sociologie économique"],
  "laurent-thevenot": ["Sociologie économique"],
  "alain-touraine": ["Sociologie politique et de l'État"],
  cooley: ["Sociologie de l'éducation et de la socialisation"],
  mead: ["Sociologie de l'éducation et de la socialisation"],
  "robert-park": ["Sociologie urbaine"],
  burgess: ["Sociologie urbaine"],
  lazarsfeld: ["Sociologie des médias et industries culturelles"],
  zelizer: ["Sociologie économique"],
  akrich: ["Sociologie de l'innovation et des techniques (STS)"],
  althusser: ["Sociologie politique et de l'État"],
  "bronislaw-malinowski": [],
  "talcott-parsons": [],
  "herbert-blumer": [],
  "erving-goffman": [],
  "harold-garfinkel": [],
  "harvey-sacks": [],
  "anthony-giddens": [],
  "levi-strauss": [],
  comte: [],
  "erich-fromm": [],
};

let inserted = 0;
let alreadyPresent = 0;
let notFound = [];

for (const [id, themeList] of Object.entries(themesMap)) {
  const idPattern = new RegExp(`id: "${id.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}",`);
  const match = idPattern.exec(text);

  if (!match) {
    notFound.push(id);
    continue;
  }

  const afterId = text.slice(match.index);
  const heirsMatch = /heirs: \[[^\]]*\],\n/.exec(afterId);

  if (!heirsMatch) {
    notFound.push(id + " (heirs introuvable)");
    continue;
  }

  const insertPos = match.index + heirsMatch.index + heirsMatch[0].length;

  const nextChunk = text.slice(insertPos, insertPos + 20);
  if (nextChunk.trimStart().startsWith("themes:")) {
    alreadyPresent++;
    continue;
  }

  const themesStr = themeList.map((t) => `"${t}"`).join(", ");
  const insertion = `    themes: [${themesStr}],\n`;

  text = text.slice(0, insertPos) + insertion + text.slice(insertPos);
  inserted++;
}

fs.writeFileSync(filePath, text, "utf-8");

console.log(`Insérés : ${inserted}`);
console.log(`Déjà présents (ignorés) : ${alreadyPresent}`);
console.log(`Introuvables : ${notFound.length ? notFound.join(", ") : "aucun"}`);
