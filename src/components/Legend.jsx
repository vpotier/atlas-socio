import { useState } from "react";

export default function Legend() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,
        left: 20,
        zIndex: 1000,
        fontFamily: "var(--font-body)",
      }}
    >
   <button
        onClick={() => setOpen((o) => !o)}
        className="icon-button"
        style={{
          padding: "10px 16px",
          borderRadius: 6,
          border: "1px solid var(--color-taupe)",
          background: "var(--color-paper-dim)",
          color: "var(--color-ink)",
          cursor: "pointer",
          boxShadow: "0 1px 3px rgba(43,38,32,0.12)",
          fontSize: 14,
        }}
      >
        Légende
      </button>

    {open && (
        <div
          className="dropdown-panel"
          style={{
            marginTop: 8,
            width: 260,
            background: "var(--color-paper-dim)",
            border: "1px solid var(--color-taupe)",
            borderRadius: 6,
            boxShadow: "0 2px 10px rgba(43,38,32,0.15)",
            padding: 16,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--color-taupe)",
              borderBottom: "1px solid var(--color-taupe)",
              paddingBottom: 6,
              marginBottom: 10,
            }}
          >
            Repères de lecture
          </div>

          <div style={{ fontSize: 12.5, marginBottom: 8, fontWeight: 600 }}>
            Nœuds
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 6,
              fontSize: 13,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "var(--color-tardis)",
                flexShrink: 0,
              }}
            />
            Auteur·ice
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 14,
              fontSize: 13,
            }}
          >
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "var(--color-leather)",
                flexShrink: 0,
              }}
            />
            Concept
          </div>

          <div style={{ fontSize: 12.5, marginBottom: 8, fontWeight: 600 }}>
            Relations
          </div>

          {[
            { color: "#6B3F2A", dash: "", label: "Héritage" },
            { color: "#4A72A0", dash: "", label: "Dialogue" },
            { color: "#8C3B3B", dash: "6 4", label: "Tension" },
          ].map((r) => (
            <div
              key={r.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 6,
                fontSize: 13,
              }}
            >
              <svg width="24" height="10">
                <line
                  x1="0"
                  y1="5"
                  x2="24"
                  y2="5"
                  stroke={r.color}
                  strokeWidth="3"
                  strokeDasharray={r.dash}
                />
              </svg>
              {r.label}
            </div>
          ))}

          <div
            style={{
              fontSize: 12.5,
              marginTop: 8,
              marginBottom: 8,
              fontWeight: 600,
            }}
          >
            Zones
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "rgba(107, 79, 122, 0.25)",
                border: "1px solid rgba(107, 79, 122, 0.6)",
                flexShrink: 0,
              }}
            />
            Constellation (courant théorique)
          </div>
        </div>
      )}
    </div>
  );
}
