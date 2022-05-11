import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    {/* <Provider store={configureStore(reducers)}> */}
    <App />
  </Provider>,
  document.querySelector("#root")
);
