import { useState } from "react";

import Graph from "./components/Graph";
import SearchBar from "./components/SearchBar";
import FiltersPanel from "./components/FiltersPanel";
import { formatPerson, formatAuthorById, workSearchUrl } from "./utils/format";
import { constellations } from "./engine/constellations";
import { axes, constellationAxisValues } from "./data/theoreticalAxes";

import "./styles/app.css";

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const [axisFilters, setAxisFilters] = useState({
    individuSociete: { enabled: false, value: 0.5 },
    methode: { enabled: false, value: 0.5 },
    rationalite: { enabled: false, value: 0.5 },
  });

  const [themeFilters, setThemeFilters] = useState([]);

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

    const closeButton = (
      <button
        onClick={() => setSelectedItem(null)}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          border: "none",
          background: "#eee",
          borderRadius: "50%",
          width: 28,
          height: 28,
          cursor: "pointer",
          fontSize: 16,
          lineHeight: "28px",
          textAlign: "center",
          color: "#555",
        }}
        aria-label="Fermer"
        title="Fermer"
      >
        ×
      </button>
    );

    if (selectedItem.type === "author") {
      const a = selectedItem.data;

      return (
        <>
          {closeButton}

          <h2>{a.name}</h2>

          <p style={{ marginTop: -8, color: "#888" }}>
            {a.period}
          </p>

          <p>
            <strong>École</strong>
            <br />
            {a.school}
          </p>

          <p>{a.summary}</p>

          <h3>Classification</h3>

          <p>{a.classificationNote}</p>

          {constellationAxisValues[a.constellation] && (
            <>
              <h3>Positionnement théorique</h3>

              <ul>
                {Object.entries(axes).map(([axisKey, axisMeta]) => (
                  <li key={axisKey}>
                    <strong>{axisMeta.label}</strong>
                    <br />
                    {constellationAxisValues[a.constellation][axisKey]
                      ?.label}
                  </li>
                ))}
              </ul>
            </>
          )}

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
          {closeButton}

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
          {closeButton}

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

          {[
            { name: r.sourceName, constellationId: r.sourceConstellation },
            { name: r.targetName, constellationId: r.targetConstellation },
          ].map(({ name, constellationId }) => {
            const cstMeta = constellations[constellationId];
            const axisValues = constellationAxisValues[constellationId];

            if (!cstMeta || !axisValues) return null;

            return (
              <div key={name}>
                <h3>Positionnement théorique — {name}</h3>

                <p style={{ marginTop: -8, color: "#888" }}>
                  {cstMeta.label}
                </p>

                <ul>
                  {Object.entries(axes).map(([axisKey, axisMeta]) => (
                    <li key={axisKey}>
                      <strong>{axisMeta.label}</strong>
                      <br />
                      {axisValues[axisKey]?.label}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </>
      );
    }

    if (selectedItem.type === "constellation") {
      const cst = selectedItem.data;

      return (
        <>
          {closeButton}

          <h2 style={{ color: cst.color }}>{cst.label}</h2>

          {cst.period && (
            <p style={{ marginTop: -8, color: "#888" }}>
              {cst.period}
            </p>
          )}

          {cst.definition && <p>{cst.definition}</p>}

          {constellationAxisValues[cst.id] && (
            <>
              <h3>Positionnement théorique</h3>

              <ul>
                {Object.entries(axes).map(([axisKey, axisMeta]) => (
                  <li key={axisKey}>
                    <strong>{axisMeta.label}</strong>
                    <br />
                    {constellationAxisValues[cst.id][axisKey]?.label}
                  </li>
                ))}
              </ul>
            </>
          )}

          <p>
            <strong>{cst.members.length}</strong>{" "}
            auteur(e)s dans cette constellation.
          </p>

          <ul>
            {cst.members.map((m) => (
              <li
                key={m.id}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setSelectedItem({
                    type: "author",
                    data: m,
                  })
                }
              >
                {m.name} <span style={{ color: "#999" }}>({m.period})</span>
              </li>
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

      <FiltersPanel
        axisFilters={axisFilters}
        setAxisFilters={setAxisFilters}
        themeFilters={themeFilters}
        setThemeFilters={setThemeFilters}
      />

      <div style={{ flex: 1, padding: 20, minWidth: 0, overflow: "hidden" }}>
        <Graph
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          axisFilters={axisFilters}
          themeFilters={themeFilters}
        />
      </div>

      <aside
        style={{
          width: "340px",
          flexShrink: 0,
          borderLeft: "1px solid #ddd",
          padding: 20,
          background: "#fafafa",
          overflowY: "auto",
          position: "relative",
        }}
      >
        {renderSidebar()}
      </aside>
    </div>
  );
}
