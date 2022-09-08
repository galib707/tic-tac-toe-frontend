import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

function Main() {
  return (
    <BrowserRouter>
      <div className="main">
        <h1>TicTacToe</h1>
        <App />
      </div>
    </BrowserRouter>
  );
}

let reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<Main />);
