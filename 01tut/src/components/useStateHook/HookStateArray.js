import React, { useState } from "react";

export default function HookStateArray() {
  const [item, setItem] = useState([]);
  const [employee, setEmployee] = useState("");

  const addItems = () => {
    setItem([
      ...item,
      {
        id: item.length,
        name: employee,
      },
    ]);
  };

  return (
    <div>
      <h1>Enter employee details</h1>
      <input
        type="text"
        value={employee}
        onChange={(e) => {
          setEmployee(e.target.value);
        }}
      />
      <button onClick={addItems}>Add employee</button>
      <ul>
        {item.map((ele) => (
          <li id={ele.id}>{ele.name}</li>
        ))}
      </ul>
    </div>
  );
}
