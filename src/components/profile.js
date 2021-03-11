import React from "react";

export function Profile({ user, handleUser, log }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        margin: "auto",
        background: "#f4f4f4",
        padding: "20px",
      }}
    >
      <img src={user.profilepic} alt={user.name} />
      <h2>Welcome {user.name}</h2>
      <p>Email:{user.email}</p>
      <button onClick={() => log()}>Log out</button>
    </div>
  );
}
