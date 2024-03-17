import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  return (
    <div
      style={{
        height: "100vh",
        background: color,
        width: "100vw",
      }}
    >
      <div
        style={{
          background: "white",
          position: "fixed",
          bottom: "10px",
          left: "20%",
          padding: "28px",
          borderRadius: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "8px",
          boxShadow: "1px 1px 1px 1px black ",
        }}
      >
        <button onClick={()=>setColor("red")}
          style={{
            padding: "8px 18px",
            borderRadius: "8px",
            borderColor: "transparent",
            background: "red",
            color: "white",
            cursor: "pointer",
          }}
        >
          Red
        </button>

        <button
        onClick={()=>setColor("green")}
          style={{
            padding: "8px 18px",
            borderRadius: "8px",
            borderColor: "transparent",
            background: "green",
            color: "white",
            cursor: "pointer",
          }}
        >
          Green
        </button>

        <button
        onClick={()=>setColor("blue")}
          style={{
            padding: "8px 18px",
            borderRadius: "8px",
            borderColor: "transparent",
            background: "blue",
            color: "white",
            cursor: "pointer",
          }}
        >
          Blue
        </button>
      </div>
    </div>
  );
}

export default App;
