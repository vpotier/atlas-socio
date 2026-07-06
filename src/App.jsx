import { useState } from "react";
import "./styles/app.css";

import Graph from "./components/Graph";

export default function App() {
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedConcept, setSelectedConcept] = useState(null);

  return (
    <div className="app">
      <main className="map">
        <Graph
          selectedAuthor={selectedAuthor}
          setSelectedAuthor={setSelectedAuthor}
          selectedConcept={selectedConcept}
          setSelectedConcept={setSelectedConcept}
        />
      </main>

      <aside className="sidebar">
        <div className="card">
          {selectedConcept ? (
            <>
              <h2>{selectedConcept.label}</h2>
              <p>Concept sociologique</p>
              <p style={{ color: "#666" }}>
                (bientôt : auteurs associés + relations)
              </p>
            </>
          ) : selectedAuthor ? (
            <>
              <h2>{selectedAuthor.name}</h2>

              <span className="badge">
                {selectedAuthor.school}
              </span>

              <section className="concepts">
                <h3>Concepts</h3>
                <ul>
                  {selectedAuthor.concepts.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </section>
            </>
          ) : (
            <>
              <h2>Atlas de la théorie sociologique</h2>
              <p>Clique sur un auteur ou un concept.</p>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}
