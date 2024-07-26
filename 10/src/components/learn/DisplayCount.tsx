import { useCountStore } from "../../stores/countStore";

const DisplayCount = () => {
  const count = useCountStore((state) => state.count); //zustand에서 관리하는 상태 중 count를 참조함
  return (
    <>
      <h1>Count: {count}</h1>
    </>
  );
};
export default DisplayCount;
