import { useState } from "react";

import Graph from "./components/Graph";
import SearchBar from "./components/SearchBar";
import Breadcrumbs from "./components/Breadcrumbs";

import "./styles/app.css";

function getLabel(item) {
  if (item.type === "author") return item.data.name;

  if (item.type === "concept") return item.data.label;

  if (item.type === "relation") {
    const labels = {
      heritage: "Héritage",
      dialogue: "Dialogue",
      tension: "Tension",
    };

    return `${labels[item.data.type]} : ${item.data.sourceName} → ${item.data.targetName}`;
  }

  return "";
}

export default function App() {
  const [selectedItem, setSelectedItemState] = useState(null);
  const [history, setHistory] = useState([]);

  const selectItem = (item) => {
    setSelectedItemState(item);

    if (!item) return;

    const key =
      item.type === "relation"
        ? `relation-${item.data.source}-${item.data.target}-${history.length}`
        : `${item.type}-${item.data.id}-${history.length}`;

    setHistory((prev) => [
      ...prev,
      {
        key,
        label: getLabel(item),
        item,
      },
    ]);
  };

  const goToHistoryIndex = (index) => {
    setHistory((prev) => {
      const next = prev.slice(0, index + 1);
      setSelectedItemState(next[index].item);
      return next;
    });
  };

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

          <p>
            <strong>Consensus</strong>
            <br />
            {"★".repeat(a.consensus)}
            {"☆".repeat(5 - a.consensus)}
          </p>

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
              <li key={w}>{w}</li>
            ))}
          </ul>

          <h3>Influences</h3>

          <ul>
            {a.influences.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>

          <h3>Héritiers</h3>

          <ul>
            {a.heirs.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </>
      );
    }

    if (selectedItem.type === "concept") {
      const c = selectedItem.data;

      return (
        <>
          <h2>{c.label}</h2>

          <p>
            <strong>Auteurs concernés</strong>
          </p>

          <ul>
            {c.authors.map((a) => (
              <li key={a}>{a}</li>
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
          selectItem({
            type: "author",
            data: author,
          })
        }
      />

      <Breadcrumbs items={history} onSelect={goToHistoryIndex} />

      <div style={{ flex: 1, padding: 20 }}>
        <Graph
          selectedItem={selectedItem}
          setSelectedItem={selectItem}
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
