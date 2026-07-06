import { useState } from "react";
import Graph from "./components/Graph";

export default function App() {
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ flex: 1, padding: 20 }}>
        <Graph
          selectedAuthor={selectedAuthor}
          setSelectedAuthor={setSelectedAuthor}
        />
      </div>

      <div
        style={{
          width: "320px",
          borderLeft: "1px solid #ddd",
          padding: 20,
          background: "#fafafa",
        }}
      >
        {selectedAuthor ? (
          <>
            <h2>{selectedAuthor.name}</h2>

            <p>
              <strong>Courant</strong><br />
              {selectedAuthor.school}
            </p>

            <p>
              <strong>Concepts</strong>
            </p>

            <ul>
              {selectedAuthor.concepts.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <h2>Atlas de la théorie sociologique</h2>
            <p>Clique sur un auteur.</p>
          </>
        )}
      </div>
    </div>
  );
}
