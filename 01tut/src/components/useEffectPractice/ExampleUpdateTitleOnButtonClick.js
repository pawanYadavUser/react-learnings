import React, { useEffect, useState } from "react";

export default function ExampleUpdateTitleOnButtonClick() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Title is updated ${count} times`;
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <p>{count}</p>
    </div>
  );
}
