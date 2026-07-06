export default function Toolbar() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "18px",
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: "30px",
            fontWeight: 700,
          }}
        >
          Atlas de la théorie sociologique
        </h1>

        <div
          style={{
            color: "#777",
            marginTop: 4,
            fontSize: "14px",
          }}
        >
          Prototype v0.2
        </div>
      </div>
    </header>
  );
}
