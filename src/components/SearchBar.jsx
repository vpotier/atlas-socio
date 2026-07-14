import { authors } from "../data/authors";

export default function SearchBar({ setSelectedAuthor }) {
  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();

    const found = authors.find((a) =>
      a.name.toLowerCase().includes(value)
    );

    if (found) {
      setSelectedAuthor(found);
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        left: 20,
        zIndex: 1000,
      }}
    >
      <input
        type="text"
        placeholder="Rechercher un auteur…"
        onChange={handleChange}
        style={{
          width: "260px",
          padding: "10px 14px",
          borderRadius: "6px",
          border: "1px solid var(--color-taupe)",
          background: "var(--color-paper-dim)",
          color: "var(--color-ink)",
          fontFamily: "var(--font-body)",
          fontSize: "15px",
          boxShadow: "0 1px 3px rgba(43, 38, 32, 0.12)",
        }}
      />
    </div>
  );
}
