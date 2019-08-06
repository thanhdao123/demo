import React from "react";
import { Provider } from "react-redux";

import store from "app/store";
import Layout from "app/layout";

export default function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}
