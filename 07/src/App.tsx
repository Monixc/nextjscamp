import Eat from "./components/learn/props/Eat";
import Greeting from "./components/learn/props/Greeting";

const App = () => {
  return (
    <>
      <Greeting name="John" age={30} />
      <Eat name="pizza" age={10} />
    </>
  );
};
export default App;
