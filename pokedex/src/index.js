import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import "antd/dist/antd.css";
import store from "./store";
import Dashboard from "./Pages/Dashboard";
import DashboardContext from "./Pages/Dashboard/Context/DashboarContext";

ReactDOM.render(
  <Provider store={store}>
    <DashboardContext>
      <Dashboard />
    </DashboardContext>
  </Provider>,
  document.getElementById("root")
);
