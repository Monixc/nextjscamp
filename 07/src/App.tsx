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
        <Button className="bg-[#4f4f4f]">Add</Button>
        <Button className="bg-[#ed4848]">Cancel</Button>
        <Button className="bg-[#7d48ed]">Success</Button>
      </div>
    </>
  );
};
export default App;
