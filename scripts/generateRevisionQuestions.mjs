// Génère la banque de questions du "Mode révision" à partir des données
// déjà présentes dans l'atlas (src/data/concepts.js et src/data/authors.js).
//
// Ce script est prévu pour être relancé à chaque fois que l'atlas est
// enrichi (nouveaux auteurs, nouveaux concepts, définitions modifiées) :
// il régénère entièrement src/data/revisionQuestions.js à partir des
// données à jour, sans qu'aucune question n'ait besoin d'être écrite à la
// main.
//
// Usage : node scripts/generateRevisionQuestions.mjs

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

import { concepts } from "../src/data/concepts.js";
import { authors } from "../src/data/authors.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.join(__dirname, "../src/data/revisionQuestions.js");

// Nombre de distracteurs (mauvaises réponses) par question.
const DISTRACTOR_COUNT = 3;

// Longueur maximale d'un texte utilisé comme réponse dans le QCM. Les
// résumés d'auteur·ices peuvent être longs (jusqu'à ~800 caractères) ; on
// les raccourcit proprement à une frontière de phrase pour que les
// propositions restent lisibles dans le quiz.
const MAX_ANSWER_LENGTH = 220;

function shorten(text, maxLen = MAX_ANSWER_LENGTH) {
  if (text.length <= maxLen) return text;

  const cut = text.slice(0, maxLen);
  const lastPeriod = cut.lastIndexOf(". ");

  if (lastPeriod > maxLen * 0.4) {
    return cut.slice(0, lastPeriod + 1);
  }

  return `${cut.trimEnd()}…`;
}

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Choisit des distracteurs "intelligents" : on essaie de piocher un
// distracteur au sein du même groupe (même courant théorique pour un·e
// auteur·ice, même auteur·ice de rattachement pour un concept), ce qui
// rend la question plus subtile qu'un simple tri au hasard, puis on
// complète avec des choix aléatoires parmi le reste de la banque.
function pickDistractors(pool, correctEntry, sameGroup, count) {
  const others = pool.filter((entry) => entry.id !== correctEntry.id);
  const grouped = shuffle(others.filter((entry) => sameGroup(entry, correctEntry)));
  const rest = shuffle(others.filter((entry) => !sameGroup(entry, correctEntry)));

  const chosen = [];
  const takeFromGroup = Math.min(1, grouped.length, count);

  chosen.push(...grouped.slice(0, takeFromGroup));

  for (const entry of [...grouped.slice(takeFromGroup), ...rest]) {
    if (chosen.length >= count) break;
    if (!chosen.includes(entry)) chosen.push(entry);
  }

  return chosen.slice(0, count);
}

function buildConceptQuestions() {
  const sameAuthor = (a, b) => a.authors.some((authorId) => b.authors.includes(authorId));
  const questions = [];

  for (const concept of concepts) {
    const distractorsForName = pickDistractors(concepts, concept, sameAuthor, DISTRACTOR_COUNT);
    questions.push({
      id: `concept-${concept.id}-name`,
      entityType: "concept",
      direction: "defToName",
      prompt: `« ${concept.definition} »\n\nCette définition correspond au concept de :`,
      correctAnswer: concept.label,
      distractors: distractorsForName.map((c) => c.label),
    });

    const distractorsForDef = pickDistractors(concepts, concept, sameAuthor, DISTRACTOR_COUNT);
    questions.push({
      id: `concept-${concept.id}-def`,
      entityType: "concept",
      direction: "nameToDef",
      prompt: `Complétez : le concept de « ${concept.label} » se définit comme :`,
      correctAnswer: shorten(concept.definition),
      distractors: distractorsForDef.map((c) => shorten(c.definition)),
    });
  }

  return questions;
}

function buildAuthorQuestions() {
  const sameConstellation = (a, b) => a.constellation && a.constellation === b.constellation;
  const questions = [];

  for (const author of authors) {
    const distractorsForName = pickDistractors(authors, author, sameConstellation, DISTRACTOR_COUNT);
    questions.push({
      id: `author-${author.id}-name`,
      entityType: "author",
      direction: "defToName",
      prompt: `« ${author.summary} »\n\nCette description correspond à :`,
      correctAnswer: author.name,
      distractors: distractorsForName.map((a) => a.name),
    });

    const distractorsForSummary = pickDistractors(authors, author, sameConstellation, DISTRACTOR_COUNT);
    questions.push({
      id: `author-${author.id}-summary`,
      entityType: "author",
      direction: "nameToDef",
      prompt: `Complétez : à propos de ${author.name}, on peut dire que :`,
      correctAnswer: shorten(author.summary),
      distractors: distractorsForSummary.map((a) => shorten(a.summary)),
    });
  }

  return questions;
}

async function main() {
  const questions = [...buildConceptQuestions(), ...buildAuthorQuestions()];

  const header = `// Fichier généré automatiquement par scripts/generateRevisionQuestions.mjs
// à partir de src/data/concepts.js et src/data/authors.js.
//
// Ne pas éditer ce fichier à la main : relancer
//   node scripts/generateRevisionQuestions.mjs
// après toute modification des auteur·ices ou des concepts pour le
// régénérer entièrement.

export const revisionQuestions = `;

  const body = `${JSON.stringify(questions, null, 2)};\n`;

  await writeFile(OUTPUT_PATH, header + body, "utf-8");

  const conceptCount = questions.filter((q) => q.entityType === "concept").length;
  const authorCount = questions.filter((q) => q.entityType === "author").length;

  console.log(`✓ ${questions.length} questions générées dans ${path.relative(process.cwd(), OUTPUT_PATH)}`);
  console.log(`  (${conceptCount} sur les concepts, ${authorCount} sur les auteur·ices)`);
}

main();
