import React, { useReducer } from "react";

const initialValue = {
  counterA: 0,
  counterB: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "IncrementA":
      return { ...state, counterA: state.counterA + action.value };
    case "DecrementA":
      return { ...state, counterA: state.counterA - action.value };
    case "IncrementB":
      return { ...state, counterB: state.counterB + action.value };
    case "DecrementB":
      return { ...state, counterB: state.counterB - action.value };
    case "ResetA":
      return { ...state, counterA: initialValue.counterA };
    case "ResetB":
      return { ...state, counterB: initialValue.counterB };
    default:
      return 0;
  }
};

export default function UseReducerHookExample2() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <p>{state.counterA}</p>
      <p>{state.counterB}</p>
      <button
        onClick={() => {
          dispatch({ type: "IncrementA", value: 1 });
        }}
      >
        Increment A
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DecrementA", value: 1 });
        }}
      >
        Decrement A
      </button>
      <button
        onClick={() => {
          dispatch({ type: "IncrementA", value: 5 });
        }}
      >
        Increment A By 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DecrementA", value: 5 });
        }}
      >
        Decrement A By 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "IncrementB", value: 1 });
        }}
      >
        Increment B
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DecrementB", value: 1 });
        }}
      >
        Decrement B
      </button>
      <button
        onClick={() => {
          dispatch({ type: "IncrementB", value: 5 });
        }}
      >
        Increment B By 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DecrementB", value: 5 });
        }}
      >
        Decrement B By 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "ResetA" });
        }}
      >
        Reset A
      </button>
      <button
        onClick={() => {
          dispatch({ type: "ResetB" });
        }}
      >
        Reset B
      </button>
    </div>
  );
}
