import React, { useState } from "react";
import EffectCleanupLogMousePointer from "./EffectCleanupLogMousePointer";

export default function EffectComponentWillUnmount() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle display
      </button>
      {display && <EffectCleanupLogMousePointer />}
    </div>
  );
}
