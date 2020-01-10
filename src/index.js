import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>,
  rootElement
);
