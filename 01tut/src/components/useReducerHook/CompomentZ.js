import React, { useContext } from "react";
import { CountContext } from "./UseContextAndUseReducer";

export default function ComponentZ() {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentZ
      <button
        onClick={() => {
          countContext.countDispatch("Increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("Decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("Reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}
