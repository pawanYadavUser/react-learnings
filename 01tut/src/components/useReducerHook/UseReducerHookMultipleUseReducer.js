import React, { useReducer } from "react";

const initialValue = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { counter: state.counter + action.value };
    case "Decrement":
      return { counter: state.counter - action.value };
    case "Reset":
      return { counter: initialValue.counter };
    default:
      return 0;
  }
};

export default function UseReducerHookMultipleUseReducer() {
  const [stateA, dispatchA] = useReducer(reducer, initialValue);
  const [stateB, dispatchB] = useReducer(reducer, initialValue);

  return (
    <div>
      <p>Use Multiple Reducer Example</p>
      <p>{stateA.counter}</p>
      <p>{stateB.counter}</p>
      <button
        onClick={() => {
          dispatchA({ type: "Increment", value: 1 });
        }}
      >
        Increment A
      </button>
      <button
        onClick={() => {
          dispatchA({ type: "Decrement", value: 1 });
        }}
      >
        Decrement A
      </button>
      <button
        onClick={() => {
          dispatchA({ type: "Increment", value: 5 });
        }}
      >
        Increment A By 5
      </button>
      <button
        onClick={() => {
          dispatchA({ type: "Decrement", value: 5 });
        }}
      >
        Decrement A By 5
      </button>
      <button
        onClick={() => {
          dispatchB({ type: "Increment", value: 1 });
        }}
      >
        Increment B
      </button>
      <button
        onClick={() => {
          dispatchB({ type: "Decrement", value: 1 });
        }}
      >
        Decrement B
      </button>
      <button
        onClick={() => {
          dispatchB({ type: "Increment", value: 5 });
        }}
      >
        Increment B By 5
      </button>
      <button
        onClick={() => {
          dispatchB({ type: "Decrement", value: 5 });
        }}
      >
        Decrement B By 5
      </button>
      <button
        onClick={() => {
          dispatchA({ type: "Reset" });
        }}
      >
        Reset A
      </button>
      <button
        onClick={() => {
          dispatchB({ type: "Reset" });
        }}
      >
        Reset B
      </button>
    </div>
  );
}
