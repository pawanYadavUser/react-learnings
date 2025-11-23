import React, { createContext, useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentX from "./ComponentX";
import ComponentZ from "./CompomentZ";

export const CountContext = createContext();

const initialValue = 0;

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

export default function UseContextAndUseReducer() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <CountContext value={{ countState: count, countDispatch: dispatch }}>
      Count : {count}
      <ComponentA />
      <ComponentX />
      <ComponentZ />
    </CountContext>
  );
}
