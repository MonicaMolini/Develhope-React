import { useState } from "react";
import { useCallback} from "react";

export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  const handleReset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return {
    count,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  };
}
