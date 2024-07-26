import { useContext } from "react";
import { useCountStore } from "../../stores/countStore";

const UpdateButton = () => {
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);
  return (
    <>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </>
  );
};
export default UpdateButton;
