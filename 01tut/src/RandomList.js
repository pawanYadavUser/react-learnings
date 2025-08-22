import React, { useEffect, useMemo, useState } from "react";

const RandomList = () => {
  //Step1 : generate array of 40 random numbers (0-100)
  const numbers = useMemo(
    () => Array.from({ length: 40 }, () => Math.floor(Math.random() * 101)),
    []
  );

  //Input state for filter
  const [inputValue, setInputValue] = useState(30);
  const [filterValue, setFilterValue] = useState(30);

  //debounce logic : wait for 3s before applying filter
  useEffect(() => {
    const result = setTimeout(() => {
      setFilterValue(inputValue);
    }, 3000);

    return () => clearTimeout(result);
  }, [inputValue]);

  //filtered numbers greater than filter value
  const filtered = numbers.filter((num) => num > filterValue);
  console.log("filtered value: " + filtered);

  return (
    <div>
      <h2>Random number list</h2>
      <label>
        Filter greater than : {""}
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <ul>
        {filtered.map((value, idx) => (
          <li
            key={idx}
            className={
              value % 2 == 0 ? "even" : "odd" // for styling
            }
          >
            Index: {idx + 1}, Item : {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RandomList;
