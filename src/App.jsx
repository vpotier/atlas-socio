import { useState } from "react";

import Graph from "./components/Graph";
import SearchBar from "./components/SearchBar";

import "./styles/app.css";

export default function App() {
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [selectedRelation, setSelectedRelation] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <SearchBar setSelectedAuthor={setSelectedAuthor} />

      <div style={{ flex: 1, padding: 20 }}>
        <Graph
          selectedAuthor={selectedAuthor}
          setSelectedAuthor={setSelectedAuthor}
          selectedConcept={selectedConcept}
          setSelectedConcept={setSelectedConcept}
          selectedRelation={selectedRelation}
          setSelectedRelation={setSelectedRelation}
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
        {selectedRelation ? (
          <>
            <h2>Relation</h2>

            <p>
              <strong>Type</strong>
              <br />
              {selectedRelation.type}
            </p>

            <p>
              <strong>Source</strong>
              <br />
              {selectedRelation.source}
            </p>

            <p>
              <strong>Cible</strong>
              <br />
              {selectedRelation.target}
            </p>

            <button onClick={() => setSelectedRelation(null)}>
              Fermer
            </button>
          </>
        ) : selectedAuthor ? (
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

            <h3>Œuvres</h3>
            <ul>
              {selectedAuthor.works.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <h2>Atlas de la théorie sociologique</h2>
            <p>Cliquer sur un auteur ou une relation.</p>
          </>
        )}
      </aside>
    </div>
  );
}
