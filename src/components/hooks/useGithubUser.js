import useSWR from "swr";
const fetcher = (url) => fetch(url).then(result => result.json())


export default function useGithubUser(username) {
  const {data, error, mutate} = useSWR( username ? `https://api.github.com/users/${username}`: null, fetcher);
  const refetchdata = () => {
    mutate();
  };
  return {data, error, refetchdata};
}
