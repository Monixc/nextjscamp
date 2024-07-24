import { useState } from "react";

//리액트에서 useState() 함수는 리액트가 추적/ 관찰 가능한 데이터를 생성산다.
//useState() 함수는 배열을 반환한다
//첫 번째 요소는 상태 값, 두 번째 요소는 상태 값을 변경하는 함수이다.

//setcount(값)->원래의 매개변수를 참조할 필요가 없을 때;
//setcount((현재상태값) => 값 ) -> 현재의 값을 참조할 때 콜백 함수 사용
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count : {count} </h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}>
        증가
      </button>
    </>
  );
};
export default App;
