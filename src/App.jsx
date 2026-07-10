import { useState } from "react";

import Graph from "./components/Graph";
import SearchBar from "./components/SearchBar";
import { formatPerson, formatAuthorById, workSearchUrl } from "./utils/format";

import "./styles/app.css";

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderSidebar = () => {
    if (!selectedItem) {
      return (
        <>
          <h2>Atlas de la théorie sociologique</h2>

          <p>
            Sélectionnez un auteur, un concept ou une relation.
          </p>
        </>
      );
    }

    if (selectedItem.type === "author") {
      const a = selectedItem.data;

      return (
        <>
          <h2>{a.name}</h2>

          <p>
            <strong>École</strong>
            <br />
            {a.school}
          </p>

          <p>{a.summary}</p>

          <h3>Classification</h3>

          <p>{a.classificationNote}</p>

          <p>
            <strong>Sources</strong>
          </p>

          <ul>
            {a.sources.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <h3>Concepts</h3>

          <ul>
            {a.concepts.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <h3>Œuvres</h3>

          <ul>
            {a.works.map((w) => (
              <li key={w}>
                
                  href={workSearchUrl(w, a.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {w}
                </a>
              </li>
            ))}
          </ul>

          <h3>Influences</h3>

          <ul>
            {a.influences.map((i) => (
              <li key={i}>{formatPerson(i)}</li>
            ))}
          </ul>

          {a.heirs.length > 0 && (
            <>
              <h3>Héritiers</h3>

              <ul>
                {a.heirs.map((h) => (
                  <li key={h}>{formatPerson(h)}</li>
                ))}
              </ul>
            </>
          )}
        </>
      );
    }

    if (selectedItem.type === "concept") {
      const c = selectedItem.data;

      return (
        <>
          <h2>{c.label}</h2>

          <p>{c.definition}</p>

          <h3>Auteurs concernés</h3>

          <ul>
            {c.authors.map((id) => (
              <li key={id}>{formatAuthorById(id)}</li>
            ))}
          </ul>
        </>
      );
    }

    if (selectedItem.type === "relation") {
      const r = selectedItem.data;

      const labels = {
        heritage: "Héritage",
        dialogue: "Dialogue",
        tension: "Tension",
      };

      return (
        <>
          <h2>{labels[r.type]}</h2>

          <p>
            <strong>Source</strong>
            <br />
            {r.sourceName}
          </p>

          <p>
            <strong>Cible</strong>
            <br />
            {r.targetName}
          </p>

          <p>
            <strong>Force du lien</strong>
            <br />
            {r.strength}/5
          </p>

          <p>
            <strong>Consensus</strong>
            <br />
            {r.consensus}
          </p>

          <p>{r.justification}</p>

          <p>
            <strong>Sources</strong>
          </p>

          <ul>
            {r.sources.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </>
      );
    }

    return null;
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        position: "relative",
      }}
    >
      <SearchBar
        setSelectedAuthor={(author) =>
          setSelectedItem({
            type: "author",
            data: author,
          })
        }
      />

      <div style={{ flex: 1, padding: 20 }}>
        <Graph
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>

      <aside
        style={{
          width: "340px",
          borderLeft: "1px solid #ddd",
          padding: 20,
          background: "#fafafa",
          overflowY: "auto",
        }}
      >
        {renderSidebar()}
      </aside>
    </div>
  );
}
