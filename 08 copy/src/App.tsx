import Button from "./components/html/Button";
import Checkbox from "./components/html/Checkbox";
import Input from "./components/html/Input";

const App = () => {
  return (
    <div className="item-middle">
      <div className="flex flex-col  gap-4">
        <Input type="text" placeholder="Enter your name" />
        <Button className="bg-[#4b4b4b]">Add</Button>
        <Checkbox checked={false}>I Agree with terms and Policies</Checkbox>
      </div>
    </div>
  );
};
export default App;
