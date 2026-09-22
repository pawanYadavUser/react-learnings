import React from "react";

export default function WelcomeFunctional(props) {
  return (
    <div>
      <h1>Hello, {props.username}</h1>
      <h2>{props.children}</h2>
    </div>
  );
}
