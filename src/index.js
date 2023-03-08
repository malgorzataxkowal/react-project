import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import "./index.scss";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./features/storeConfiguration";

render(
  <StrictMode>
    <Router>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </Router>
  </StrictMode>,
  document.getElementById("app")
);
