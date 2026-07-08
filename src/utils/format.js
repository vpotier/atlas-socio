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
  const author =
    authors.find((a) => a.id === shortNameOrId) ||
    authors.find((a) => a.name.endsWith(shortNameOrId));

  if (author) {
    return formatWithDates(
      author.name,
      author.birthYear,
      author.deathYear
    );
  }

  const person = people[shortNameOrId];

  if (person) {
    return formatWithDates(
      person.fullName,
      person.birthYear,
      person.deathYear
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
