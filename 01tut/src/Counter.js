import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(5);

  return (
    <div>
      <h2>Counter component</h2>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
