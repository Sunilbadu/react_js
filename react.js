import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h1>Beginner React App</h1>
      <p>This example shows a simple component with state.</p>
      <button
        style={{ padding: "10px 20px", fontSize: 16, cursor: "pointer" }}
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      <p>You clicked the button {count} times.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
