import React from "react";

import ReduxProvider from "app/store";
import ApolloProvider from "configs/apollo.config";

import Layout from "app/layout";

export default function App() {
  return (
    // <ApolloProvider>
    // <ReduxProvider>
    <Layout />
    // </ReduxProvider>
    // </ApolloProvider>
  );
}
