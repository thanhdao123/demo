import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

export default function ActivePersonButtonController() {
  const [id, setID] = useState("");
  const [addOneActivePerson] = useMutation(ADD_ACTIVE_PERSON);
  const [removeOneActivePerson] = useMutation(REMOVE_ACTIVE_PERSON);

  function onAddPerson() {
    addOneActivePerson({ variables: { id } });
  }

  function onRemovePerson() {
    removeOneActivePerson({ variables: { id } });
  }

  return (
    <div>
      <label>ID : </label>
      <input type="text" value={id} onChange={e => setID(e.target.value)} />
      <button onClick={onAddPerson}>ADD</button>
      <br />
      <button onClick={onRemovePerson}>REMOVE</button>
    </div>
  );
}

const ADD_ACTIVE_PERSON = gql`
  mutation AddOneActivePerson($id: String!) {
    addOneActivePerson(id: $id)
  }
`;

const REMOVE_ACTIVE_PERSON = gql`
  mutation RemoveOneActivePerson($id: String!) {
    removeOneActivePerson(id: $id)
  }
`;
