import React, { useState } from "react";

export default function Counter3() {
  const [employee, setEmployee] = useState({ name: "", country: "" });
  return (
    <div>
      <input
        type="text"
        value={employee.name}
        onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
      />
      <input
        type="text"
        value={employee.country}
        onChange={(e) => setEmployee({ ...employee, country: e.target.value })}
      />
      <p>{`name:${employee.name} and country: ${employee.country}`}</p>
    </div>
  );
}
