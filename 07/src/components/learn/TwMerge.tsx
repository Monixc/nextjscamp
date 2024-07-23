import { twMerge } from "tailwind-merge";

const App = () => {
  const isLoggedin = true;
  //true면 텍스트 크기 변경을 원한다.
  //근데 이미 tailwind 코드가 잇다 -> 삼항 연산자 사용
  return (
    <>
      {/* {isLoggedin ? (
        <h1 className="text-5xl text-rose-500">App Component</h1>
      ) : (
        <h1 className="text-3xl ">App Component</h1>
      )} */}
      <h1
        className={twMerge(
          "text-3xl underline",
          isLoggedin ? "text-5xl text-rose-500" : ""
        )}>
        App component
      </h1>
      {/* 겹치는 속성이 있어서 불편하다-> tw merge*/}
    </>
  );
};
export default App;
