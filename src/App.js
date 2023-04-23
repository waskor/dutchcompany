import "./App.css";

function App() {
  return (
    <div
      className="body-color-transition"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div>
        <a href="/DUTCH_COMPANY.pdf" download="DUTCH_COMPANY.pdf">
          <img
            src="/dutch_cones.png"
            style={{ width: "50vw" }}
            className="logo"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
