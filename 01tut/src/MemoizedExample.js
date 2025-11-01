import React, { useMemo, useState } from "react";

const MemoizedExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Empty For now");

  const squared = useMemo(() => {
    const squareValue = count * count;
    console.log("Calculated square value : " + squareValue);
    return squareValue;
  }, [count]);

  return (
    <div>
      <p>
        Count : {count} , Square : {squared}
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment the count
      </button>
      <p> Input text submitted : {text}</p>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};

export default MemoizedExample;
