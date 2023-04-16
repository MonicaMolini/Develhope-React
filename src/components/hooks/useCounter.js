import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount((count) => count + 1);
  }

  function decrement() {
    setCount((count) => count - 1);
  }

  function reset() {
    setCount(initialValue);
  }

  return {
    increment,
    decrement,
    reset,
    count,
  };
}