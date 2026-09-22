import { useState } from "react";
import Child from "./child";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>

      <Child />
    </>
  );
}

export default Parent;
