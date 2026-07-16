import { useState } from "react";

import Graph from "./components/Graph";
import SearchBar from "./components/SearchBar";
import FiltersPanel from "./components/FiltersPanel";
import Legend from "./components/Legend";
import { useIsMobile } from "./hooks/useIsMobile";
import { formatPerson, formatAuthorById, workSearchUrl } from "./utils/format";
import { constellations } from "./engine/constellations";
import { axes, constellationAxisValues } from "./data/theoreticalAxes";
import { authorAxisValues } from "./data/authorAxisValues";

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
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: -32,
          marginRight: -4,
          pointerEvents: "none",
        }}
      >
        <button
          onClick={() => setSelectedItem(null)}
          className="icon-button"
          style={{
            border: "none",
            background: "var(--color-paper)",
            borderRadius: "50%",
            width: 32,
            height: 32,
            cursor: "pointer",
            fontSize: 18,
            lineHeight: "32px",
            textAlign: "center",
            color: "var(--color-taupe)",
            boxShadow: "0 1px 4px rgba(43,38,32,0.2)",
            pointerEvents: "auto",
          }}
          aria-label="Fermer"
          title="Fermer"
        >
          ×
        </button>
      </div>
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
