import { useEffect, useState } from "react";

export default function useGithubUser(username) {
  const [data, setData] = useState();

  useEffect(()=>{
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => console.log(error))
},[username])
  
  return {  
    data: data
  };
}
