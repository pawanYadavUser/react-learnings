import React from "react";
import ComponentZ from "./ComponentZ";
import GlobalProviders from "./GlobalProvider";

export default function ComponentY() {
  return (
    <GlobalProviders>
      <ComponentZ />
    </GlobalProviders>
  );
}
