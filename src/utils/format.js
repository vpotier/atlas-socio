import { authors } from "../data/authors";
import { people } from "../data/people";

function formatWithDates(fullName, birthYear, deathYear) {
  if (!birthYear) return fullName;

  if (!deathYear) {
    return `${fullName} (né en ${birthYear})`;
  }

  return `${fullName} (${birthYear} - ${deathYear})`;
}

export function formatPerson(shortNameOrId) {
  const lower = shortNameOrId.toLowerCase();

  const author =
    authors.find((a) => a.id === shortNameOrId) ||
    authors.find((a) => a.name.toLowerCase().endsWith(lower));

  if (author) {
    return formatWithDates(
      author.name,
      author.birthYear,
      author.deathYear
    );
  }

  const personKey = Object.keys(people).find(
    (key) => key.toLowerCase() === lower
  );

  if (personKey) {
    return formatWithDates(
      people[personKey].fullName,
      people[personKey].birthYear,
      people[personKey].deathYear
    );
  }

  return shortNameOrId;
}

export function formatAuthorById(id) {
  const author = authors.find((a) => a.id === id);

  if (!author) return id;

  return formatWithDates(
    author.name,
    author.birthYear,
    author.deathYear
  );
}

/*
 * NOTE — ancienne fonction `workSearchUrl` retirée.
 *
 * Elle générait une URL de recherche Wikipédia devinée à partir du titre
 * de l'œuvre et du nom de l'auteur, sans jamais vérifier que l'article
 * existait réellement : c'est ce qui produisait des liens morts.
 *
 * Chaque œuvre dans authors.js contient désormais directement :
 *   - `citation` : la référence bibliographique complète (à afficher en italique)
 *   - `sources`  : un tableau de { label, url } vérifiés un par un
 *                  (Wikipédia quand un article dédié existe, sinon Cairn/
 *                  Persée/OpenEdition/La Vie des idées/texte intégral etc.)
 *
 * Le rendu se fait donc directement dans App.jsx en mappant sur
 * `author.works`, sans passer par une fonction de génération d'URL.
 * Voir le composant WorksList fourni à part.
 */
