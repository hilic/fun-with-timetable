import React from "react";
import ReactDOM from "react-dom";
import "sanitize.css/sanitize.css";
import "./styles.css";
import TimeTable from "./TimeTable";

function App() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex"
      }}
    >
      <TimeTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
