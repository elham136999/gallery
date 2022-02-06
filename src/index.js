import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FetchImages } from "./FetchImages";

ReactDOM.render(
  <FetchImages>
    <App />
  </FetchImages>,

  document.getElementById("root")
);
