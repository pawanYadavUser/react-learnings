import React, { useEffect, useState } from "react";

export default function EffectCleanupLogMousePointer() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event is called");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log(`useEffect is called`);
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      window.removeEventListener("mousemove", logMousePosition);
      console.log(`Component is unmounted and code is cleaned up!`);
    };
  });

  return (
    <div>
      <p>Log the mouse position</p>
      Coordinate for x , y - {x},{y}
    </div>
  );
}
