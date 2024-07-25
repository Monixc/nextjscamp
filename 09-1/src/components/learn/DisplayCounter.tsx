import { useContext } from "react";
import { counterContext } from "../../App";

const DisplayCounter = () => {
  const { count } = useContext(counterContext);
  console.log("display counter");

  return (
    <>
      <h1>Counter: {count}</h1>
    </>
  );
};
export default DisplayCounter;
