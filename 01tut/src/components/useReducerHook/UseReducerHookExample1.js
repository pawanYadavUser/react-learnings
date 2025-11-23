import React, { useReducer } from "react";

const initialValue = 1;

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return initialValue;
    default:
      return 0;
  }
};

export default function UseReducerHookExample1() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch("Increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("Decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("Reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}
