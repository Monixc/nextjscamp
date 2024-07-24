import Button from "./components/html/Button";
import Checkbox from "./components/html/Checkbox";
import Input from "./components/html/Input";

const App = () => {
  return (
    <div className="item-middle bg-black">
      <div className="w-[375px] bg-white py-10 px-[25px] inter">
        <h1 className="text-xl font-bold text-[#4f4f4f] mb-[10px]">
          Sign Into App
        </h1>
        <p className="text-sm text-[#4f4f4f] mb-5">
          Please enter your details to continue
        </p>
        <form action="" className="flex flex-col gap-4">
          <Input type="text" placeholder="Enter your Name" />
          <Input type="email" placeholder="someone@example.com" />
          <Input type="password" placeholder="Enter Password" />
          <Checkbox>I agree with terms and policies</Checkbox>
          <div className="flex flex-col gap-4 mt-[32px]">
            <Button className="bg-[#4f4f4f]">Sign In</Button>
            <Button className="border border-[#4f4f4f] text-[#4f4f4f]">
              Go To Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default App;
