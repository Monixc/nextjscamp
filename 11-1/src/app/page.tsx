"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={decrement}>감소</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
