import React from "react";

import useTestQuery from "hooks/use-test-query";

function Layout() {
  useTestQuery();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <button
          className="border border-dashed border-black p-4 my-4"
          children="DISPLAY NOTIFICATION okok"
          onClick={() => console.log("okko")}
        />
      </div>
    </div>
  );
}

export default Layout;
