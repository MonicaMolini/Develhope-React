import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Counter from "./Counter";


export default function App() {
  return (
    <div>
      <Link to="/">Home</Link> - <Link to="/counter">Counter</Link>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>

  );
}


