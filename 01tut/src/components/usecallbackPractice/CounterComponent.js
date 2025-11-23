import React from "react";

function CounterComponent({ count, text }) {
  console.log(`rendering ${text}`);
  return (
    <>
      {text} : {count}
      <br />
    </>
  );
}

export default React.memo(CounterComponent);
