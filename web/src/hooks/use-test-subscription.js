import { useEffect } from "react";
import { useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";

const POST_SUBSCRIBE = gql`
  subscription {
    postAdded {
      ts
    }
  }
`;

export default function useTestSubscription() {
  const { data, error, loading } = useSubscription(POST_SUBSCRIBE);
  useEffect(() => {
    if (error || loading) {
      return;
    }
    console.log(data);
  });
}
