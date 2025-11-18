import React, { useState } from "react";

export default function Counter2() {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    //u can use other names also for the previous value reference
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((x) => x + 1);
  };

  return (
    <div>
      <h1>Testing useState hook count : {count}</h1>
      <button onClick={updateCount}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
