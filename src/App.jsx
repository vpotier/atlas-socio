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
          width: "340px",
          borderLeft: "1px solid #ddd",
          padding: "24px",
          background: "#fafafa",
          overflowY: "auto",
        }}
      >
        {!selectedAuthor ? (
          <>
            <h2>Atlas de la théorie sociologique</h2>

            <p>
              Cliquez sur un auteur ou utilisez la barre de recherche.
            </p>

            <hr />

            <p>
              <strong>Auteurs :</strong> 3
            </p>

            <p>
              <strong>Concepts :</strong> 4
            </p>

            <p>
              <strong>Relations :</strong> 3
            </p>
          </>
        ) : (
          <>
            <h1>{selectedAuthor.name}</h1>

            <hr />

            <h3>Courant</h3>

            <p>{selectedAuthor.school}</p>

            <h3>Concepts</h3>

            <ul>
              {selectedAuthor.concepts.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <h3>Position</h3>

            <p>
              x : {selectedAuthor.x}
              <br />
              y : {selectedAuthor.y}
            </p>

            <hr />

            <p
              style={{
                color: "#666",
                fontSize: "14px",
                lineHeight: 1.5,
              }}
            >
              Cette fiche sera progressivement enrichie avec les œuvres,
              influences, héritiers, controverses et concepts détaillés.
            </p>
          </>
        )}
      </aside>
    </div>
  );
}
