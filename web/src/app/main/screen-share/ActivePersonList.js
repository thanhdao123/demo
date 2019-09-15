import React from "react";
import { useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";

export default function ActivePersonList() {
  const activePersons = useActivePersonList();

  return (
    <div className="border border-solid border-black">
      {activePersons.map(personID => (
        <div key={personID}>{personID}</div>
      ))}
    </div>
  );
}

function useActivePersonList() {
  const { data, loading } = useSubscription(ACTIVE_PERRSON_SUBSCRIPTION);

  return loading ? [] : data.subscribeToActivePersonList;
}

const ACTIVE_PERRSON_SUBSCRIPTION = gql`
  subscription {
    subscribeToActivePersonList
  }
`;
