import React, { useState } from "react";
import Button from "../html/Button";
import Checkbox from "../html/Checkbox";
import Input from "../html/Input";

const LoginComponent = () => {
  const [type, setType] = useState("Sign");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginValid = email.trim() === "" || password.trim() === "" || !agree;
    const signValid = loginValid || name.trim() === "";

    if ((type === "Login" && loginValid) || (type === "Sign" && signValid)) {
      alert("입력값 빔");
      return;
    }

    alert(type === "Sign" ? "Signup Success" : "Login Success");
  };

  return (
    <div className="item-middle bg-black">
      <div className="w-[375px] bg-white py-10 px-[25px] inter">
        <h1 className="text-xl font-bold text-[#4f4f4f] mb-[10px]">
          {type}
          Into App
        </h1>
        <p className="text-sm text-[#4f4f4f] mb-5">
          Please enter your details to continue
        </p>
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={onSubmitHandler}>
          {type === "Sign" && (
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}{" "}
          <Input
            type="email"
            placeholder="someone@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Checkbox checked={agree} onToggle={() => setAgree((prev) => !prev)}>
            I agree with terms and policies
          </Checkbox>
          <div className="flex flex-col gap-4 mt-[32px]">
            <Button type="submit" className="bg-[#4f4f4f]">
              {type === "Sign" ? "Sign In" : "Log In"}
              Sign In
            </Button>
            <Button
              type="button"
              className="border border-[#4f4f4f] text-[#4f4f4f]"
              onClick={() => {
                setName("");
                setEmail("");
                setPassword("");
                setType((prev) => (prev === "Login" ? "Signin" : "Login"));
              }}>
              Go To Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginComponent;
