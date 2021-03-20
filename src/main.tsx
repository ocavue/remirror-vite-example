import React from "react";
import ReactDOM from "react-dom";
import Editor from "./Editor";

function App() {
  const title =
    `build date: ${import.meta.env.VITE_BUILD_DATE}; ` +
    `commit sha: ${import.meta.env.VITE_BUILD_DATE}; `;
  return (
    <div className="App">
      <p>
        <strong>{title}</strong>
      </p>
      <Editor />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
