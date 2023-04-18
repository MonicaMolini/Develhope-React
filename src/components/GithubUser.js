import React from "react";
import useGithubUser from "./hooks/useGithubUser";

export default function GithubUser({username}) {
  const {data} = useGithubUser(username)  
   return (
    <div>
      <h1>{data.login}</h1>
      <img src={data.avatar_url} alt="avatar" />
    </div>
  );
}