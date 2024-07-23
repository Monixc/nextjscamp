import Fonts from "./components/run/Fonts";
const App = () => {
  const onClickHandler = () => {
    alert("버튼이 클릭되었습니다");
  };
  return (
    <>
      <Fonts />
      <h1>App Component</h1>
      <button onClick={onClickHandler}>click</button>
    </>
  );
};
export default App;
