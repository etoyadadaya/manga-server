import React from "react";
import "./common/styles.scss";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./app";
import {RecoilRoot} from "recoil";

createRoot(document.getElementById("app")).render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
);
