import React, { useEffect } from "react";
import { useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";

function Layout() {
  useTestSubscription();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <button
          className="border border-dashed border-black p-4 my-4"
          children="DISPLAY NOTIFICATION"
          onClick={() => console.log("okookokoko")}
        />
      </div>
    </div>
  );
}

const POST_SUBSCRIBE = gql`
  subscription {
    postAdded {
      author
      comment
    }
  }
`;

function useTestSubscription() {
  const { data, error, loading } = useSubscription(POST_SUBSCRIBE);
  useEffect(() => {
    if (error || loading) {
      return;
    }
    console.log(data);
  });
}

export default Layout;
