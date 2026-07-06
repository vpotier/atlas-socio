import { useState } from "react";
import "./styles/app.css";

import Graph from "./components/Graph";

export default function App() {
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  return (
    <div className="app">
      <main className="map">
        <Graph
          selectedAuthor={selectedAuthor}
          setSelectedAuthor={setSelectedAuthor}
        />
      </main>

      <aside className="sidebar">
        <div className="card">
          {selectedAuthor ? (
            <>
              <h2>{selectedAuthor.name}</h2>

              <span className="badge">
                {selectedAuthor.school}
              </span>

              <section className="concepts">
                <h3>Concepts principaux</h3>

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

              <p>
                Sélectionnez un auteur sur la carte pour afficher
                ses principaux concepts et, bientôt, ses relations
                théoriques.
              </p>

              <hr />

              <h3>Feuille de route</h3>

              <ul>
                <li>✓ Navigation dans la carte</li>
                <li>✓ Sélection d'un auteur</li>
                <li>⏳ Compatibilités théoriques</li>
                <li>⏳ Incompatibilités</li>
                <li>⏳ Généalogies</li>
                <li>⏳ GPS théorique</li>
              </ul>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}
