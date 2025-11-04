import React from "react";
import Employee from "./Employee.js";

export default function ListRendering() {
  const employees = [
    {
      id: 1,
      name: "tony",
      age: 50,
      country: "UK",
      gender: "Male",
    },
    {
      id: 2,
      name: "chris",
      age: 45,
      country: "USA",
      gender: "Male",
    },
    {
      id: 3,
      name: "Elizabeth",
      age: 42,
      country: "UK",
      gender: "Female",
    },
  ];
  return (
    <div>
      {employees.map((employee) => (
        <Employee
          key={employee.id}
          name={employee.name}
          age={employee.age}
          country={employee.country}
          gender={employee.gender}
        />
      ))}
    </div>
  );
}
