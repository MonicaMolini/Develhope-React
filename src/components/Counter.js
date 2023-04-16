import React from "react";
import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startCount = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(startCount);
    };
  }, []);

  return <h1>Your count: {count}</h1>;
}