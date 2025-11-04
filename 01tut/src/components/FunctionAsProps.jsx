import React from "react";
import ChildComponent from "./ChildComponent";
import ChildComponent2 from "./ChildComponent2";

export default function FunctionAsProps(props) {
  function greetParent(username, country) {
    const countryValue = country ?? "country not found!";
    alert(`Welcome parent from !!!!!!!!!! ${username} |||||| ${countryValue}`);
  }

  return (
    <div>
      <h1>
        This is parent component for user {props.username} and country
        {props.country}
      </h1>
      <ChildComponent
        greet={greetParent}
        username={props.username}
        country={props.country}
      />
      <ChildComponent2 greet={greetParent} username2={props.username2} />
    </div>
  );
}
