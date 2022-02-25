import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { Provider } from "react-redux";
import store from "./app/Store";
import GlobalStyle from "./fonts/fonts";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.querySelector("#root")
);
