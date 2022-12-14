import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/storeConfiguration";

render(
  <Router>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </Router>,
  document.getElementById("app")
);
