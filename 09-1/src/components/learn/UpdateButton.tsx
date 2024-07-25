import { useContext } from "react";
import { counterContext } from "../../App";

const UpdateButton = () => {
  const { setCount } = useContext(counterContext);
  console.log("update button");

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
    </>
  );
};
export default UpdateButton;
