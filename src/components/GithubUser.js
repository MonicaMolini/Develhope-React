import React from "react";
import { useEffect, useState } from "react";

export default function GithubUser({ username }) {
  const [data, setData] = useState({});

  async function getUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);    
      const json = await response.json();

      setData(json);    
  }

  useEffect(() => {
    getUser(username);
  }, [username]);

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.avatar_url} alt="avatar" />
    </div>
  );
}