import { useEffect, useState } from "react";

export default function useGithubUser(username) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  async function getGitUser(){
    setError(null)
    setLoading(true)
    try{
        const response = await  fetch(`https://api.github.com/users/${username}`)
        const json = await response.json()
        setData(json)
    }catch(error){
        setError(error)
        setData(null)
    }finally{
        setLoading(false)
    }
}
useEffect(() => {
  getGitUser(username);
}, [username]);

return { data, error, loading};

}
