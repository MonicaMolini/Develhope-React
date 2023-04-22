import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import ShowGitHubUser from "./ShowGitHubUser";


export default function App() {
  return (
    <div>
      <Link to="/">Home</Link> - <Link to="/counter">Counter</Link> - <Link to="/users/MonicaMolini">GitHub profile</Link>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGitHubUser />} />
      </Routes>
    </div>

  );
}


