import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

import config from "configs/constants.config";

const httpLink = new HttpLink({
  uri: `http://${config.apolloURI}/graphql`
});

const wsLink = new WebSocketLink({
  uri: `ws://${config.apolloURI}/graphql`,
  options: {
    reconnect: true
  }
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default function({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
