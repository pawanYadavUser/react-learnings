import React from "react";

export default function ChildComponent(props) {
  console.log(props);
  return (
    <div>
      <button
        onClick={() => {
          props.greet(props.username, props.country);
        }}
      >
        {props.country}
      </button>
    </div>
  );
}
