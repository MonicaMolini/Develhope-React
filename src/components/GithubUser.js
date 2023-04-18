import React from "react";
import useGithubUser from "./hooks/useGithubUser";

export default function GithubUser({username}) {
  const { data, error, loading } = useGithubUser(username);
  return(
    <>        
        {error && <div>{error}</div>}
        {loading && <div>loading...</div>}
        {data && <div>
            <h2>{data.login}</h2>
            <img src={data.avatar_url}></img>             
            </div>}
    </>
)
}