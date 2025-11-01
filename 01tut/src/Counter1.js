import { useState } from "react";

const Counter1 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter Component</h1>
      <p>Counter : {counter} </p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};

export default Counter1;
