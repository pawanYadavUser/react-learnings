import React, { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);

  const refInterval = useRef();

  useEffect(() => {
    refInterval.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(refInterval.current);
    };
  }, []);

  return (
    <div>
      <h2>Timer is : {time} </h2>
      <button type="button" onClick={() => clearInterval(refInterval.current)}>
        Stop the timer
      </button>
    </div>
  );
}
