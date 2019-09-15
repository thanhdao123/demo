import React from "react";
import ActivePersonList from "app/main/screen-share/ActivePersonList";
import ActivePersonButtonController from "app/main/screen-share/ActivePersonButtonController";

export default function ScreenShareDemo() {
  return (
    <div className="flex justify-center items-center pt-16">
      <ActivePersonList />
      <ActivePersonButtonController />
    </div>
  );
}
