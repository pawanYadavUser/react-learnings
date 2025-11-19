import React, { createContext } from "react";
import ComponentY from "./ComponentY";

export const userContext = createContext();

export default function ComponentC() {
  const user = { name: "contextUser", role: "localAdmin" };
  return (
    <userContext.Provider value={user}>
      <ComponentY />
    </userContext.Provider>
  );
}
