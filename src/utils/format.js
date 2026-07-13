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

export function workSearchUrl(title, authorName) {
  const query = encodeURIComponent(`${title} ${authorName}`);
  return `https://fr.wikipedia.org/w/index.php?search=${query}`;
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
