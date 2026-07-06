import { useState } from "react";

import Graph from "./components/Graph";
import SearchBar from "./components/SearchBar";

import "./styles/app.css";

export default function App() {
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedConcept, setSelectedConcept] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        position: "relative",
      }}
    >
      <SearchBar setSelectedAuthor={setSelectedAuthor} />

      <div style={{ flex: 1, padding: 20 }}>
        <Graph
          selectedAuthor={selectedAuthor}
          setSelectedAuthor={setSelectedAuthor}
          selectedConcept={selectedConcept}
          setSelectedConcept={setSelectedConcept}
        />
      </div>

      <aside
        style={{
          width: "360px",
          borderLeft: "1px solid #ddd",
          background: "#fafafa",
          padding: 24,
          overflowY: "auto",
        }}
      >
        {!selectedAuthor ? (
          <>
            <h2>Atlas de la théorie sociologique</h2>

            <p>Sélectionnez un auteur sur la carte.</p>
          </>
        ) : (
          <>
            <h1>{selectedAuthor.name}</h1>

            <p>
              <strong>Courant</strong>
              <br />
              {selectedAuthor.school}
            </p>

            <hr />

            <h3>Résumé</h3>

            <p>{selectedAuthor.summary}</p>

            <h3>Concepts</h3>

            <ul>
              {selectedAuthor.concepts.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <h3>Œuvres majeures</h3>

            <ul>
              {selectedAuthor.works.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>

            <h3>Influences</h3>

            <ul>
              {selectedAuthor.influences.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>

            <h3>Héritiers</h3>

            <ul>
              {selectedAuthor.heirs.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </>
        )}
      </aside>
    </div>
  );
}
