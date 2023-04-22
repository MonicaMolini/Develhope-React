import React from "react";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import GithubUser from "./GithubUser";

export default function GithubUserList() {
  const [users, setUsers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const user = event.target.username.value;
    if (user !== "") {
      setUsers([...users, user]);
    }
    event.target.username.value = "";
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="username" />
        <button type="submit">Add user</button>
      </form>
      <ul>
        {users.map((x, index) => (
          <li style ={{listStyle:"none"}} key={x + index}>
            <GithubUser key={x} username={x} />
            <Link to={`/users/${x}`}>{x}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}