import React from "react";

export default function InlineStyle() {
  const heading = {
    fontSize: "60px",
    color: "green",
  };

  return (
    <div>
      <h1 style={heading}>Style react component via inline changes</h1>
      <h1 className="error">Error !!!!!!!!!</h1>
    </div>
  );
}
