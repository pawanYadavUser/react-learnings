import React from "react";
import "./myStyle.css";

export default function RegularStyleSheet(props) {
  const className = props.primary ? "primary" : "seconday";
  return (
    <div>
      <h1 className={className}>Learning how to style react component</h1>
    </div>
  );
}
