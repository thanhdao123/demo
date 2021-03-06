import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReduxProvider from "app/store";
import ApolloProvider from "configs/apollo.config";

import Layout from "app/layout";

export default function App() {
  return (
    <ApolloProvider>
      <ReduxProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ReduxProvider>
    </ApolloProvider>
  );
}
