import { useEffect } from "react";

const A = () => {
  useEffect(() => {
    console.log("A 컴포넌트 생성");

    const interval = setInterval(() => {
      console.log("A Interver");
    }, 1000);

    return () => {
      console.log("A 컴포넌트 제거");
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <h1>A Component</h1>
    </>
  );
};
export default A;
