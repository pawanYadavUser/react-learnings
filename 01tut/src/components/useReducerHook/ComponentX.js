import React, { useContext } from "react";
import { CountContext } from "./UseContextAndUseReducer";

export default function ComponentX() {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentX
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
