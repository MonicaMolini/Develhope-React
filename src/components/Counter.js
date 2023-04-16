import React from "react";
import { useCounter } from "./hooks/useCounter";

export default function Counter() {
  const { increment, decrement, reset, count } = useCounter();

  return (
    <div>
    <h1>Counter: {count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
  </div>
  )
}