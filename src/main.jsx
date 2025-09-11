import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import { HashRouter } from "react-router-dom";

//this file main.jsx is our javascript entry point where out App component is rendered and inserted into the DOM, by route method

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
