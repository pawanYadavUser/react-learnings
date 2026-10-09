import { useEffect, useState } from "react";

const RandomList2 = () => {
  const numbers = Array.from({ length: 40 }, () => {
    return Math.floor(Math.random() * 101);
  });

  const [inputValue, setInputValue] = useState(30);
  const [filterValue, setFilterValue] = useState(30);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilterValue(inputValue);
    }, 5000);
    return () => clearTimeout(timer);
  }, [inputValue]);

  const filteredNumbers = numbers.filter((ele) => ele > filterValue);

  return (
    <>
      <h1>Random List 2</h1>
      <label>
        Filtered numbers greater than : {""}
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>

      <ul>
        {filteredNumbers.map((value, idx) => {
          return (
            <li id={idx} className={value % 2 == 0 ? "even" : "odd"}>
              Index : {idx + 1}, Item: {value}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default RandomList2;
