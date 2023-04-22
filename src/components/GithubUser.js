import React from "react";
import useGithubUser from "./hooks/useGithubUser";

export default function GithubUser({username}) {
  const { data, error, refetchdata} = useGithubUser(username);
  return(
    <>        
        {error && <div>{error}</div>}
        {!data && !error && <div>loading...</div>}
        {data && <><div>
            <h2>{data.login}</h2>
            <img src={data.avatar_url}></img>             
            </div>
            <button onClick={refetchdata}>Refetch</button> </>}
    </>
)
}