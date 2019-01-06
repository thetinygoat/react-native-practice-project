/** @format */
import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { Provider } from "react-redux";
import storeConfig from "./src/store/storeConfig";
import { name as appName } from "./app.json";

const store = storeConfig();

const RNredux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNredux);
