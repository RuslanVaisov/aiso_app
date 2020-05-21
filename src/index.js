import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProjectsProvider } from "./Context";

ReactDOM.render(
  <React.StrictMode>
    <ProjectsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProjectsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
