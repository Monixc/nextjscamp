//조건부 렌더링
//특정 조건에 따라 다른 결과를 보여주는 것
//if 문
//삼항 연산자
//논리연산자(&&)
//즉시 실행 함수

import ListItem from "../ListItem";

//반복 렌더링
const App = () => {
  const fruits = ["apple", "banana", "cherry"];
  const users = [
    {
      name: "mike",
      age: 20,
    },
    {
      name: "john",
      age: 20,
    },
  ];
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
        {users.map(({ age, name }) => (
          <ListItem key={name} age={age} name={name} />
        ))}
      </ul>
    </>
  );
};
export default App;
