import React from "react";

function ButtonComponent({ handleClick, children }) {
  console.log(`Rendering button for ${children}`);
  return (
    <>
      <button onClick={handleClick}>{children}</button>
      <br />
    </>
  );
}

export default React.memo(ButtonComponent);
