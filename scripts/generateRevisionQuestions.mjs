// Génère la banque de questions du "Mode révision" à partir des données
// déjà présentes dans l'atlas (src/data/concepts.js et src/data/authors.js).
//
// Ce script est prévu pour être relancé à chaque fois que l'atlas est
// enrichi (nouveaux auteurs, nouveaux concepts, définitions modifiées) :
// il régénère entièrement src/data/revisionQuestions.js à partir des
// données à jour, sans qu'aucune question n'ait besoin d'être écrite à la
// main.
//
// Chaque question existe en deux versions, explicitement étiquetées via
// `difficulty`. La différence porte avant tout sur la FORMULATION — pas
// seulement sur le choix des mauvaises réponses :
//   - "facile"    : reprend les textes du mode découverte
//                   (`simpleDefinition` / `simple.summary`), écrits en
//                   langage courant pour un public débutant, avec des
//                   mauvaises réponses clairement extérieures au courant
//                   théorique / à l'auteur·ice de rattachement.
//   - "difficile" : reprend les définitions/résumés complets, en langage
//                   académique, avec jusqu'à 2 mauvaises réponses issues
//                   du même courant/auteur·ice — il faut alors connaître
//                   la nuance entre des notions ou des auteur·ices
//                   proches.
//
// Usage : node scripts/generateRevisionQuestions.mjs

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

import { concepts } from "../src/data/concepts.js";
import { authors } from "../src/data/authors.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.join(__dirname, "../src/data/revisionQuestions.js");

// Nombre de mauvaises réponses par question.
const DISTRACTOR_COUNT = 3;

// Nombre maximal de mauvaises réponses piochées dans le même groupe
// (courant théorique / auteur·ice de rattachement) pour une question
// "difficile".
const MAX_SAME_GROUP_DISTRACTORS = 2;

// Longueur maximale d'un texte utilisé comme PROPOSITION DE RÉPONSE dans
// le QCM (pas la question elle-même, qui peut rester longue puisqu'elle
// ne s'affiche qu'une fois). Volontairement court : dans un quiz, 4
// propositions à lire et comparer doivent tenir en un coup d'œil, sans
// quoi la longueur du texte devient elle-même un obstacle, indépendant
// de la difficulté de la notion.
const MAX_CHOICE_LENGTH = 110;

function shorten(text, maxLen) {
  if (text.length <= maxLen) return text;

  let cut = text.slice(0, maxLen);

  // 1) on essaie de couper proprement à la fin d'une phrase.
  const lastPeriod = cut.lastIndexOf(". ");
  if (lastPeriod > maxLen * 0.4) {
    return cut.slice(0, lastPeriod + 1);
  }

  // 2) sinon, on recule jusqu'à la dernière frontière de mot pour ne
  // jamais couper un mot en deux.
  const lastSpace = cut.lastIndexOf(" ");
  if (lastSpace > 0) {
    cut = cut.slice(0, lastSpace);
  }

  return `${cut.replace(/[,;:\s]+$/, "")}…`;
}

// Raccourcit spécifiquement un texte destiné à devenir une proposition de
// réponse (jamais une question/prompt, qui peut rester complète).
function shortenChoice(text) {
  return shorten(text, MAX_CHOICE_LENGTH);
}

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function eligiblePool(pool, correctEntry, excludeFn) {
  return pool.filter(
    (entry) => entry.id !== correctEntry.id && !(excludeFn && excludeFn(entry, correctEntry))
  );
}

// Distracteurs "faciles" : uniquement des entrées extérieures au groupe
// de la bonne réponse (donc a priori faciles à écarter par élimination).
function pickEasyDistractors(pool, correctEntry, sameGroup, excludeFn, count) {
  const eligible = eligiblePool(pool, correctEntry, excludeFn);
  const outsideGroup = shuffle(eligible.filter((entry) => !sameGroup(entry, correctEntry)));

  const chosen = outsideGroup.slice(0, count);

  // Filet de sécurité si le groupe extérieur est trop restreint (cas
  // limite, ex. très peu d'entrées au total).
  if (chosen.length < count) {
    for (const entry of shuffle(eligible)) {
      if (chosen.length >= count) break;
      if (!chosen.includes(entry)) chosen.push(entry);
    }
  }

  return chosen;
}

// Distracteurs "difficiles" : jusqu'à MAX_SAME_GROUP_DISTRACTORS entrées
// du même groupe que la bonne réponse, complétées par des entrées
// extérieures si besoin.
function pickHardDistractors(pool, correctEntry, sameGroup, excludeFn, count) {
  const eligible = eligiblePool(pool, correctEntry, excludeFn);
  const inGroup = shuffle(eligible.filter((entry) => sameGroup(entry, correctEntry)));
  const outsideGroup = shuffle(eligible.filter((entry) => !sameGroup(entry, correctEntry)));

  const chosen = inGroup.slice(0, Math.min(MAX_SAME_GROUP_DISTRACTORS, count));

  for (const entry of outsideGroup) {
    if (chosen.length >= count) break;
    chosen.push(entry);
  }

  // Filet de sécurité si, au total, on n'a toujours pas assez d'entrées
  // (groupe très restreint et peu d'entrées hors-groupe disponibles).
  if (chosen.length < count) {
    for (const entry of inGroup) {
      if (chosen.length >= count) break;
      if (!chosen.includes(entry)) chosen.push(entry);
    }
  }

  return chosen.slice(0, count);
}

// Deux entrées qui se citent nommément l'une l'autre (ex. Boltanski et
// Thévenot, co-fondateurs de la sociologie pragmatique) forment un
// distracteur trompeur pour de mauvaises raisons : la question devient un
// jeu de devinette sur la formulation plutôt qu'un vrai test de
// connaissance. On les exclut systématiquement l'une de l'autre, quelle
// que soit la difficulté.
function authorsMentionEachOther(a, b) {
  const surname = (name) => name.trim().split(/\s+/).pop().toLowerCase();
  const aSurname = surname(a.name);
  const bSurname = surname(b.name);

  return (
    a.summary.toLowerCase().includes(bSurname) || b.summary.toLowerCase().includes(aSurname)
  );
}

// Les résumés (surtout `simple.summary`, écrit dans le style du mode
// découverte) commencent quasi systématiquement par le nom de
// l'auteur·ice ("Émile Durkheim pense que..."). Dans une question de type
// "on donne le nom, on fait deviner le résumé", laisser ce nom en tête de
// chaque proposition permet de repérer la bonne réponse par simple
// reconnaissance du nom déjà donné dans la question, sans rien savoir du
// contenu. On neutralise donc ce nom en tête de texte, pour les 4
// propositions de la même manière.
function stripLeadingName(text, author) {
  const tokens = author.name.trim().split(/\s+/);
  const candidates = [...new Set([author.name, tokens[tokens.length - 1], tokens[0]])].sort(
    (a, b) => b.length - a.length
  );

  for (const candidate of candidates) {
    if (text.startsWith(candidate)) {
      const rest = text.slice(candidate.length).replace(/^[,\s]+/, "");
      return `Cette personne ${rest}`;
    }
  }

  return text;
}

// Assemble une liste de noms en français ("A", "A et B", "A, B et C").
function joinNames(names) {
  if (names.length <= 1) return names[0] ?? "";
  if (names.length === 2) return `${names[0]} et ${names[1]}`;
  return `${names.slice(0, -1).join(", ")} et ${names[names.length - 1]}`;
}

// Chaque concept doit explicitement rappeler à quel(s) auteur·ice(s) il
// est rattaché : ça ancre le concept dans son contexte théorique plutôt
// que de le traiter comme une définition hors-sol, et ça renforce le lien
// concept ↔ auteur·ice que l'étudiant·e doit justement mémoriser.
function authorNamesForConcept(concept) {
  const names = concept.authors
    .map((authorId) => authors.find((a) => a.id === authorId))
    .filter(Boolean)
    .map((a) => a.name);

  return joinNames(names);
}

function buildConceptQuestions() {
  const sameAuthor = (a, b) => a.authors.some((authorId) => b.authors.includes(authorId));

  const questions = [];

  for (const concept of concepts) {
    const authorNames = authorNamesForConcept(concept);

    // --- FACILE : formulation "mode découverte", distracteurs éloignés ---
    const easyNameDistractors = pickEasyDistractors(concepts, concept, sameAuthor, null, DISTRACTOR_COUNT);
    questions.push({
      id: `concept-${concept.id}-name-facile`,
      entityType: "concept",
      direction: "defToName",
      difficulty: "facile",
      prompt: `Chez ${authorNames} :\n\n« ${concept.simpleDefinition} »\n\nCette explication correspond au concept de :`,
      correctAnswer: concept.label,
      distractors: easyNameDistractors.map((c) => c.label),
    });

    const easyDefDistractors = pickEasyDistractors(concepts, concept, sameAuthor, null, DISTRACTOR_COUNT);
    questions.push({
      id: `concept-${concept.id}-def-facile`,
      entityType: "concept",
      direction: "nameToDef",
      difficulty: "facile",
      prompt: `Complétez, en langage simple : chez ${authorNames}, le concept de « ${concept.label} » désigne :`,
      correctAnswer: shortenChoice(concept.simpleDefinition),
      distractors: easyDefDistractors.map((c) => shortenChoice(c.simpleDefinition)),
    });

    // --- DIFFICILE : formulation académique complète, distracteurs proches ---
    const hardNameDistractors = pickHardDistractors(concepts, concept, sameAuthor, null, DISTRACTOR_COUNT);
    questions.push({
      id: `concept-${concept.id}-name-difficile`,
      entityType: "concept",
      direction: "defToName",
      difficulty: "difficile",
      prompt: `Chez ${authorNames} :\n\n« ${concept.definition} »\n\nCette définition correspond au concept de :`,
      correctAnswer: concept.label,
      distractors: hardNameDistractors.map((c) => c.label),
    });

    const hardDefDistractors = pickHardDistractors(concepts, concept, sameAuthor, null, DISTRACTOR_COUNT);
    questions.push({
      id: `concept-${concept.id}-def-difficile`,
      entityType: "concept",
      direction: "nameToDef",
      difficulty: "difficile",
      prompt: `Complétez : chez ${authorNames}, le concept de « ${concept.label} » se définit comme :`,
      correctAnswer: shortenChoice(concept.definition),
      distractors: hardDefDistractors.map((c) => shortenChoice(c.definition)),
    });
  }

  return questions;
}

function buildAuthorQuestions() {
  const sameConstellation = (a, b) => a.constellation && a.constellation === b.constellation;

  const questions = [];

  for (const author of authors) {
    // --- FACILE : formulation "mode découverte", distracteurs éloignés ---
    const easyNameDistractors = pickEasyDistractors(
      authors,
      author,
      sameConstellation,
      authorsMentionEachOther,
      DISTRACTOR_COUNT
    );
    questions.push({
      id: `author-${author.id}-name-facile`,
      entityType: "author",
      direction: "defToName",
      difficulty: "facile",
      prompt: `« ${author.simple.summary} »\n\nCette description correspond à :`,
      correctAnswer: author.name,
      distractors: easyNameDistractors.map((a) => a.name),
    });

    const easySummaryDistractors = pickEasyDistractors(
      authors,
      author,
      sameConstellation,
      authorsMentionEachOther,
      DISTRACTOR_COUNT
    );
    questions.push({
      id: `author-${author.id}-summary-facile`,
      entityType: "author",
      direction: "nameToDef",
      difficulty: "facile",
      prompt: `Complétez, en langage simple : à propos de ${author.name}, on peut dire que :`,
      correctAnswer: shortenChoice(stripLeadingName(author.simple.summary, author)),
      distractors: easySummaryDistractors.map((a) =>
        shortenChoice(stripLeadingName(a.simple.summary, a))
      ),
    });

    // --- DIFFICILE : formulation académique complète, distracteurs proches ---
    const hardNameDistractors = pickHardDistractors(
      authors,
      author,
      sameConstellation,
      authorsMentionEachOther,
      DISTRACTOR_COUNT
    );
    questions.push({
      id: `author-${author.id}-name-difficile`,
      entityType: "author",
      direction: "defToName",
      difficulty: "difficile",
      prompt: `« ${author.summary} »\n\nCette description correspond à :`,
      correctAnswer: author.name,
      distractors: hardNameDistractors.map((a) => a.name),
    });

    const hardSummaryDistractors = pickHardDistractors(
      authors,
      author,
      sameConstellation,
      authorsMentionEachOther,
      DISTRACTOR_COUNT
    );
    questions.push({
      id: `author-${author.id}-summary-difficile`,
      entityType: "author",
      direction: "nameToDef",
      difficulty: "difficile",
      prompt: `Complétez : à propos de ${author.name}, on peut dire que :`,
      correctAnswer: shortenChoice(stripLeadingName(author.summary, author)),
      distractors: hardSummaryDistractors.map((a) => shortenChoice(stripLeadingName(a.summary, a))),
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
  const easyCount = questions.filter((q) => q.difficulty === "facile").length;
  const hardCount = questions.filter((q) => q.difficulty === "difficile").length;

  const choiceLengths = questions.flatMap((q) => [q.correctAnswer.length, ...q.distractors.map((d) => d.length)]);
  const maxChoiceLength = Math.max(...choiceLengths);

  console.log(`✓ ${questions.length} questions générées dans ${path.relative(process.cwd(), OUTPUT_PATH)}`);
  console.log(`  (${conceptCount} sur les concepts, ${authorCount} sur les auteur·ices)`);
  console.log(`  (${easyCount} faciles, ${hardCount} difficiles)`);
  console.log(`  (longueur max d'une proposition de réponse : ${maxChoiceLength} caractères)`);
}

main();
