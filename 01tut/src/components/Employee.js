import React from "react";

export default function Employee(props) {
  const { name, age, country, gender } = props;
  return (
    <div>
      <h1>
        {`name: ${name} | age: ${age} | country: ${country} | gender: ${gender}`}
      </h1>
    </div>
  );
}
