import { useState } from "react";

import Graph from "./components/Graph";
import SearchBar from "./components/SearchBar";
import FiltersPanel from "./components/FiltersPanel";
import Legend from "./components/Legend";
import { useIsMobile } from "./hooks/useIsMobile";
import { formatPerson, formatAuthorById, workSearchUrl } from "./utils/format";
import { constellations } from "./engine/constellations";
import { axes, constellationAxisValues } from "./data/theoreticalAxes";

import "./styles/app.css";

export default function App() {
  const isMobile = useIsMobile();
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
          <div
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--color-taupe)",
              border: "1px solid var(--color-taupe)",
              borderRadius: 3,
              padding: "3px 8px",
              marginBottom: 14,
            }}
          >
            Atlas
          </div>

          <h2>Théorie sociologique</h2>

          <p style={{ color: "var(--color-taupe)" }}>
            Sélectionnez un auteur, un concept, une relation ou une
            constellation sur la carte.
          </p>
        </>
      );
    }

    const closeButton = (
      <button
        onClick={() => setSelectedItem(null)}
        className="icon-button"
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          border: "none",
          background: "var(--color-paper)",
          borderRadius: "50%",
          width: 28,
          height: 28,
          cursor: "pointer",
          fontSize: 16,
          lineHeight: "28px",
          textAlign: "center",
          color: "var(--color-taupe)",
        }}
        aria-label="Fermer"
        title="Fermer"
      >
        ×
      </button>
    );

    const tabLabel = (text) => (
      <div
        style={{
          display: "inline-block",
          fontSize: 11,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "var(--color-leather)",
          border: "1px solid var(--color-leather)",
          borderRadius: 3,
          padding: "3px 8px",
          marginBottom: 10,
        }}
      >
        {text}
      </div>
    );

    if (selectedItem.type === "author") {
      const a = selectedItem.data;

      return (
        <>
          {closeButton}

          {tabLabel("Auteur·ice")}

          <h2>{a.name}</h2>

          <p style={{ marginTop: -8, color: "var(--color-taupe)" }}>
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
                <a
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

          {tabLabel("Concept")}

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

          {tabLabel("Relation")}

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

          <p style={{ marginBottom: 4 }}>
            <strong>Force du lien</strong>
          </p>

          <div
            style={{
              display: "flex",
              gap: 3,
              marginBottom: 14,
            }}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                style={{
                  height: 6,
                  flex: 1,
                  borderRadius: 2,
                  background:
                    n <= r.strength
                      ? "var(--color-tardis)"
                      : "var(--color-paper-dim)",
                  border: "1px solid var(--color-taupe)",
                }}
              />
            ))}
          </div>

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

                <p style={{ marginTop: -8, color: "var(--color-taupe)" }}>
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

          {tabLabel("Constellation")}

          <h2 style={{ color: cst.color }}>{cst.label}</h2>

          {cst.period && (
            <p style={{ marginTop: -8, color: "var(--color-taupe)" }}>
              {cst.period}
            </p>
          )}

          {cst.definition && <p>{cst.definition}</p>}
          {cst.disciplines && cst.disciplines.length > 0 && (
            <div style={{ marginBottom: 12 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--color-taupe)",
                  marginRight: 6,
                }}
              >
                Inspirée par :
              </span>

              {cst.disciplines.map((d) => (
                <span
                  key={d}
                  style={{
                    display: "inline-block",
                    fontSize: 12,
                    color: "var(--color-leather)",
                    border: "1px solid var(--color-leather)",
                    borderRadius: 3,
                    padding: "2px 7px",
                    marginRight: 6,
                    marginBottom: 4,
                  }}
                >
                  {d}
                </span>
              ))}
            </div>
          )}

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
                {m.name} <span style={{ color: "var(--color-taupe)" }}>({m.period})</span>
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
      className="app-fade-in"
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "var(--font-body)",
        position: "relative",
        background: "var(--color-paper)",
      }}
    >
   <SearchBar setSelectedItem={setSelectedItem} />

      <FiltersPanel
        axisFilters={axisFilters}
        setAxisFilters={setAxisFilters}
        themeFilters={themeFilters}
        setThemeFilters={setThemeFilters}
      />

      <Legend />

      <div
        className="floating-credit"
        style={{
          fontSize: 11,
          color: "var(--color-taupe)",
          background: "var(--color-paper-dim)",
          padding: "6px 10px",
          borderRadius: 6,
          border: "1px solid var(--color-taupe)",
        }}
      >
        Par Victor Potier —{" "}
        <a
          href="mailto:victor.potier@univ-eiffel.fr"
          style={{ color: "var(--color-tardis)" }}
        >
          Me contacter
        </a>
      </div>

      <div style={{ flex: 1, padding: 20, minWidth: 0, overflow: "hidden" }}>
        <Graph
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          axisFilters={axisFilters}
          themeFilters={themeFilters}
        />
      </div>

      {(!isMobile || selectedItem) && (
        <aside
          style={
            isMobile
              ? {
                  position: "fixed",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  maxHeight: "70vh",
                  background: "var(--color-paper-dim)",
                  borderTop: "1px solid var(--color-taupe)",
                  borderRadius: "14px 14px 0 0",
                  padding: 20,
                  overflowY: "auto",
                  zIndex: 1500,
                  boxShadow: "0 -4px 16px rgba(43,38,32,0.25)",
                }
              : {
                  width: "340px",
                  flexShrink: 0,
                  borderLeft: "1px solid var(--color-taupe)",
                  padding: 20,
                  background: "var(--color-paper-dim)",
                  overflowY: "auto",
                  position: "relative",
                }
          }
        >
          <div
            key={
              selectedItem
                ? `${selectedItem.type}-${
                    selectedItem.data.id ??
                    selectedItem.data.label ??
                    `${selectedItem.data.source}-${selectedItem.data.target}`
                  }`
                : "empty"
            }
            className="sidebar-content"
          >
            {renderSidebar()}
          </div>
        </aside>
      )}
    </div>
  );
}
