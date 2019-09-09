import React from "react";

function Layout() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <button
          className="border border-dashed border-black p-4 my-4"
          children="DISPLAY NOTIFICATION okok"
          onClick={() => console.log("okok")}
        />
      </div>
    </div>
  );
}

export default Layout;
