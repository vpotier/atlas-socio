import { useState } from "react";
import { axes, axisSteps } from "../data/theoreticalAxes";
import { themes } from "../data/themes";

export default function FiltersPanel({
  axisFilters,
  setAxisFilters,
  themeFilters,
  setThemeFilters,
}) {
  const [open, setOpen] = useState(false);

  const anyActive =
    Object.values(axisFilters).some((f) => f.enabled) ||
    themeFilters.length > 0;

  const toggleTheme = (theme) => {
    setThemeFilters((prev) =>
      prev.includes(theme)
        ? prev.filter((t) => t !== theme)
        : [...prev, theme]
    );
  };

  const setAxisValue = (axisKey, value) => {
    setAxisFilters((prev) => ({
      ...prev,
      [axisKey]: { ...prev[axisKey], value },
    }));
  };

  const toggleAxisEnabled = (axisKey) => {
    setAxisFilters((prev) => ({
      ...prev,
      [axisKey]: {
        ...prev[axisKey],
        enabled: !prev[axisKey].enabled,
      },
    }));
  };

  const resetAll = () => {
    setAxisFilters((prev) => {
      const next = {};
      Object.keys(prev).forEach((key) => {
        next[key] = { ...prev[key], enabled: false };
      });
      return next;
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
        fontFamily: "var(--font-body)",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
         className="icon-button"
        style={{
          padding: "10px 16px",
          borderRadius: 8,
          border: "1px solid var(--color-taupe)",
          background: anyActive ? "var(--color-tardis)" : "var(--color-paper-dim)",
          color: anyActive ? "#ede6d9" : "var(--color-ink)",
          cursor: "pointer",
          boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
          fontSize: 14,
        }}
      >
        Filtres {anyActive ? "●" : ""}
      </button>

     {open && (
        <div
          className="dropdown-panel"
          style={{
            marginTop: 8,
            width: 340,
            background: "var(--color-paper-dim)",
            border: "1px solid var(--color-taupe)",
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
              color: "var(--color-taupe)",
            }}
          >
            Axes théoriques
          </h3>

          {Object.entries(axes).map(([axisKey, axisMeta]) => {
            const filter = axisFilters[axisKey];
            const steps = axisSteps[axisKey];
            const stepIndex = steps.findIndex(
              (s) => s.value === filter.value
            );

            return (
              <div key={axisKey} style={{ marginBottom: 22 }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    marginBottom: 8,
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={filter.enabled}
                    onChange={() => toggleAxisEnabled(axisKey)}
                  />
                  <strong>{axisMeta.label}</strong>
                </label>

                <input
                  type="range"
                  min={0}
                  max={steps.length - 1}
                  step={1}
                  value={stepIndex === -1 ? 0 : stepIndex}
                  disabled={!filter.enabled}
                  onChange={(e) =>
                    setAxisValue(
                      axisKey,
                      steps[Number(e.target.value)].value
                    )
                  }
                  style={{
                    width: "100%",
                    opacity: filter.enabled ? 1 : 0.4,
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 4,
                  }}
                >
                  {steps.map((s, i) => (
                    <div
                      key={s.value}
                      onClick={() =>
                        filter.enabled &&
                        setAxisValue(axisKey, s.value)
                      }
                      style={{
                        flex: 1,
                        textAlign:
                          i === 0
                            ? "left"
                            : i === steps.length - 1
                            ? "right"
                            : "center",
                        fontSize: 10,
                        color:
                          filter.enabled && i === stepIndex
                            ? "var(--color-ink)"
                            : "var(--color-taupe)",
                        fontWeight:
                          filter.enabled && i === stepIndex
                            ? "bold"
                            : "normal",
                        cursor: filter.enabled
                          ? "pointer"
                          : "default",
                        lineHeight: 1.2,
                      }}
                    >
                      {s.label}
                    </div>
                  ))}
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
              color: "var(--color-taupe)",
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
                border: "1px solid var(--color-taupe)",
                background: "var(--color-paper)",
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
