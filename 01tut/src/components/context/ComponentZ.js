import React, { useContext } from "react";
import { userContext } from "./ComponentC";
import { ThemeContext } from "./ThemeContext";
import { UserContext } from "./UserContext";

export default function ComponentZ() {
  const user = useContext(userContext);
  const theme = useContext(ThemeContext);
  const globalUser = useContext(UserContext);

  return (
    <>
      <p>
        user details : {user.name} | {user.role}
      </p>
      theme:{theme}
      <br />
      <p>
        global user details :- {globalUser.name} | {globalUser.role}
      </p>
    </>
  );
}
