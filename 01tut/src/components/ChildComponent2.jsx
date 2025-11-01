import React from "react";

export default function ChildComponent2(props) {
  return (
    <div>
      ChildComponent2
      <button
        onClick={() => {
          props.greet(props.username2, props.country);
        }}
      >
        OnClick
      </button>
    </div>
  );
}
