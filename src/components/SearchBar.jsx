import { useState } from "react";
import { authors } from "../data/authors";
import { concepts } from "../data/concepts";
import { constellations } from "../engine/constellations";

const MAX_RESULTS_PER_GROUP = 6;

export default function SearchBar({ setSelectedItem }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const q = query.trim().toLowerCase();

  const authorResults =
    q.length > 0
      ? authors
          .filter(
            (a) =>
              a.name.toLowerCase().includes(q) ||
              (a.summary || "").toLowerCase().includes(q) ||
              (a.school || "").toLowerCase().includes(q) ||
              (a.classificationNote || "")
                .toLowerCase()
                .includes(q)
          )
          .slice(0, MAX_RESULTS_PER_GROUP)
      : [];

  const conceptResults =
    q.length > 0
      ? concepts
          .filter(
            (c) =>
              c.label.toLowerCase().includes(q) ||
              (c.definition || "").toLowerCase().includes(q)
          )
          .slice(0, MAX_RESULTS_PER_GROUP)
      : [];

  const constellationResults =
    q.length > 0
      ? Object.entries(constellations)
          .filter(
            ([, meta]) =>
              meta.label.toLowerCase().includes(q) ||
              (meta.definition || "").toLowerCase().includes(q)
          )
          .slice(0, 4)
      : [];

  const hasResults =
    authorResults.length > 0 ||
    conceptResults.length > 0 ||
    constellationResults.length > 0;

  const closeAndReset = () => {
    setQuery("");
    setOpen(false);
  };

  const selectAuthor = (author) => {
    setSelectedItem({ type: "author", data: author });
    closeAndReset();
  };

  const selectConcept = (concept) => {
    setSelectedItem({ type: "concept", data: concept });
    closeAndReset();
  };

  const selectConstellation = (id, meta) => {
    const members = authors.filter((a) => a.constellation === id);

    setSelectedItem({
      type: "constellation",
      data: {
        id,
        label: meta.label,
        color: meta.color,
        period: meta.period,
        definition: meta.definition,
        disciplines: meta.disciplines,
        members,
      },
    });
    closeAndReset();
  };

  const groupLabelStyle = {
    fontSize: 10,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "var(--color-taupe)",
    padding: "6px 10px 2px",
  };

  const itemStyle = {
    padding: "6px 10px",
    fontSize: 13,
    cursor: "pointer",
    color: "var(--color-ink)",
  };

  return (
    <div className="floating-search">
      <input
        type="text"
        placeholder="Rechercher un auteur, un concept, un courant…"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        style={{
          width: "min(320px, calc(100vw - 40px))",
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

      {open && q.length > 0 && hasResults && (
        <div
          className="dropdown-panel"
          style={{
            marginTop: 4,
            width: "min(320px, calc(100vw - 40px))",
            maxHeight: "50vh",
            overflowY: "auto",
            background: "var(--color-paper-dim)",
            border: "1px solid var(--color-taupe)",
            borderRadius: 6,
            boxShadow: "0 2px 10px rgba(43,38,32,0.15)",
          }}
        >
          {authorResults.length > 0 && (
            <>
              <div style={groupLabelStyle}>Auteur·ices</div>
              {authorResults.map((a) => (
                <div
                  key={a.id}
                  style={itemStyle}
                  onMouseDown={() => selectAuthor(a)}
                >
                  {a.name}
                </div>
              ))}
            </>
          )}

          {conceptResults.length > 0 && (
            <>
              <div style={groupLabelStyle}>Concepts</div>
              {conceptResults.map((c) => (
                <div
                  key={c.id}
                  style={itemStyle}
                  onMouseDown={() => selectConcept(c)}
                >
                  {c.label}
                </div>
              ))}
            </>
          )}

          {constellationResults.length > 0 && (
            <>
              <div style={groupLabelStyle}>Constellations</div>
              {constellationResults.map(([id, meta]) => (
                <div
                  key={id}
                  style={itemStyle}
                  onMouseDown={() => selectConstellation(id, meta)}
                >
                  {meta.label}
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}
