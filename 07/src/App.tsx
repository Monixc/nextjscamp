import Button from "./components/example/ex2/Button";
import Input from "./components/html/Input";

const App = () => {
  return (
    <>
      <div>
        <Input
          className="bg-red-500"
          type="password"
          placeholder="Enter ToDo List"
          onChange={() => {
            console.log("집에보내주세요");
          }}
        />
      </div>
      <div>
        <br />
        <Button text="Add" color="#ED4848" />
        <br />
        <Button text="Cancel" color="#ED4848" />
        <br />
        <Button text="Success" color="#ED4848" />
      </div>
    </>
  );
};
export default App;
