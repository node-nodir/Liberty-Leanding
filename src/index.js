import React from "react";
import ReactDOM from "react-dom/client";

// ---> Components
import App from "./App";

// ---> Css
import "./Assets/Css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
