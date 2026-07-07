export default function Breadcrumbs({ items, onSelect }) {
  if (!items.length) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: 70,
        left: 20,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: "#fff",
        padding: "6px 12px",
        borderRadius: "8px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
        fontSize: "13px",
        maxWidth: "600px",
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {items.map((entry, index) => (
        <span
          key={entry.key}
          style={{ display: "flex", alignItems: "center", gap: 6 }}
        >
          <button
            onClick={() => onSelect(index)}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: 0,
              fontSize: "13px",
              color:
                index === items.length - 1 ? "#111" : "#888",
              fontWeight:
                index === items.length - 1 ? 600 : 400,
            }}
          >
            {entry.label}
          </button>

          {index < items.length - 1 && (
            <span style={{ color: "#ccc" }}>›</span>
          )}
        </span>
      ))}
    </div>
  );
}
