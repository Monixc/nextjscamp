// 1. 프롭스 타입 여러군데서 사용되는 건 아닌데 너무 많아서 가독성을 해칠 때
// 2. 복잡 유무를 떠나서 여러 군데에서 사용되는 경우
// 3. 구냥
import { IGreetingProps } from "./Greeting";

const Eat = (props: { name: string; age: number; finishEat: () => void }) => {
  const onClickHandler = () => {
    alert("d");
  };
  return (
    <>
      <h1>
        {props.name} - {props.age}님이 식사를 시작합니다.
      </h1>
      <button onClick={props.finishEat}>식사완료</button>
    </>
  );
};
export default Eat;
