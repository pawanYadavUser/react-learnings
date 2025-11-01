import React from "react";

export default function ClickEventHandler() {
  function clickHandler() {
    console.log("Click event is generated");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click event handler</button>
    </div>
  );
}
