import React, { useState } from "react";

export default function Title() {
  const [title, setTitle] = useState("ReactJs course for beginners");
  return (
    <div>
      <h1>{title}</h1>
      <button
        onClick={() => {
          setTitle("React state hook for beginners");
        }}
      >
        Click to changes the title
      </button>
    </div>
  );
}
