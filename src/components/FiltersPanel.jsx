import { useState } from "react";
import { axes } from "../data/theoreticalAxes";
import { themes } from "../data/themes";

export default function FiltersPanel({
  axisFilters,
  setAxisFilters,
  themeFilters,
  setThemeFilters,
}) {
  const [open, setOpen] = useState(false);

  const anyActive =
    Object.values(axisFilters).some((v) => v !== null) ||
    themeFilters.length > 0;

  const toggleTheme = (theme) => {
    setThemeFilters((prev) =>
      prev.includes(theme)
        ? prev.filter((t) => t !== theme)
        : [...prev, theme]
    );
  };

  const resetAll = () => {
    setAxisFilters({
      individuSociete: null,
      methode: null,
      rationalite: null,
    });
    setThemeFilters([]);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        left: 300,
        zIndex: 1000,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          padding: "10px 16px",
          borderRadius: 8,
          border: "1px solid #ddd",
          background: anyActive ? "#333" : "#fff",
          color: anyActive ? "#fff" : "#333",
          cursor: "pointer",
          boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
          fontSize: 14,
        }}
      >
        Filtres {anyActive ? "●" : ""}
      </button>

      {open && (
        <div
          style={{
            marginTop: 8,
            width: 320,
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
            padding: 16,
            maxHeight: "75vh",
            overflowY: "auto",
          }}
        >
          <h3
            style={{
              margin: "0 0 12px 0",
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "#666",
            }}
          >
            Axes théoriques
          </h3>

          {Object.entries(axes).map(([axisKey, axisMeta]) => {
            const value = axisFilters[axisKey];
            const isActive = value !== null;

            return (
              <div key={axisKey} style={{ marginBottom: 18 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 13,
                    marginBottom: 4,
                  }}
                >
                  <strong>{axisMeta.label}</strong>

                  {isActive && (
                    <button
                      onClick={() =>
                        setAxisFilters((prev) => ({
                          ...prev,
                          [axisKey]: null,
                        }))
                      }
                      style={{
                        border: "none",
                        background: "none",
                        color: "#999",
                        cursor: "pointer",
                        fontSize: 12,
                      }}
                    >
                      réinitialiser
                    </button>
                  )}
                </div>

                <input
                  type="range"
                  min={0}
                  max={100}
                  value={isActive ? value * 100 : 50}
                  onChange={(e) =>
                    setAxisFilters((prev) => ({
                      ...prev,
                      [axisKey]: Number(e.target.value) / 100,
                    }))
                  }
                  style={{ width: "100%" }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 11,
                    color: "#888",
                  }}
                >
                  <span>{axisMeta.leftLabel}</span>
                  <span>{axisMeta.rightLabel}</span>
                </div>
              </div>
            );
          })}

          <h3
            style={{
              margin: "16px 0 12px 0",
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "#666",
            }}
          >
            Thèmes (cumulables)
          </h3>

          {themes.map((theme) => (
            <label
              key={theme}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                marginBottom: 6,
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={themeFilters.includes(theme)}
                onChange={() => toggleTheme(theme)}
              />
              {theme}
            </label>
          ))}

          {anyActive && (
            <button
              onClick={resetAll}
              style={{
                marginTop: 12,
                width: "100%",
                padding: "8px",
                borderRadius: 6,
                border: "1px solid #ddd",
                background: "#f5f5f5",
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              Réinitialiser tous les filtres
            </button>
          )}
        </div>
      )}
    </div>
  );
}
