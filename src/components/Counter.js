import React from "react";
import useCounter from "./hooks/useCounter";

export default function Counter() {
  const { onIncrement, onDecrement, onReset, count } = useCounter();

  return (
    <div>
    <h1>Counter: {count}</h1>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
    <button onClick={onReset}>Reset</button>
  </div>
  )
}