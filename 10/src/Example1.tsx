import { useContext } from "react";
import { CounterContext } from "./context/countContext";

const Example1 = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
    </>
  );
};
export default Example1;
