import React from "react";

export default function UserLogin() {
  let isLoggedIn = true;
  return (
    <div>
      {isLoggedIn ? (
        <h1>User login page</h1>
      ) : (
        <h2>You cannot access this page</h2>
      )}
      {isLoggedIn && (
        <h1>Testing short circuit approach - something or nothing</h1>
      )}
    </div>
  );
}
