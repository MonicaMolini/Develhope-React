import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import ShowGitHubUser from "./ShowGitHubUser";
import GithubUserList from "./GithubUserList";


export default function App() {
  return (
    <div>
      <Link to="/">Home</Link> - <Link to="/counter">Counter</Link> - <Link to="/users">GitHub profile</Link>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route path=":username" element={<ShowGitHubUser />} />
        </Route>
        <Route path="*" element={
          <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "50px" }}>
              <img style={{ width: "50px" }} src="https://www.svgrepo.com/show/144183/sad.svg" />
              <h3>Sorry, it seems the page doesn't exist</h3> </div>
          </>
        } />
      </Routes>
    </div>

  );
}


