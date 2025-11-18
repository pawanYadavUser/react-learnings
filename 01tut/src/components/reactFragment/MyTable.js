import React from "react";
import MyColumns from "./MyColumns";

export default function MyTable() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <MyColumns />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
