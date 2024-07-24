import { useState } from "react";
import Checkbox from "../html/Checkbox";
import Button from "../html/Button";
import Input from "../html/Input";

const App = () => {
  const [text, setText] = useState("");
  const [agree, setAgree] = useState(false);
  return (
    <>
      <div className=" item-middle p-10">
        <div className="flex flex-col gap-2">
          <h1>{text}</h1>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => setText(e.target.value)}
          />
          male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => setText(e.target.value)}
          />
          female
          <select value={text} onChange={(e) => setText(e.target.value)}>
            <option value="">선택</option>
            <option value="apple">apple</option>
            <option value="banana">banana</option>
          </select>
          <textarea
            className="border border-slate-500 "
            value={text}
            onChange={(e) => setText(e.target.value)}></textarea>
          <Checkbox checked={agree} onToggle={() => setAgree((prev) => !prev)}>
            동의했다
          </Checkbox>
          <Input
            type="text"
            value={text} //입력된 값이 초기값으로 들어간
            //onChange랑 value는 같이 사용하자
            onChange={(e) => setText(e.target.value)}
          />
          <Button className="bg-green-300" onClick={() => setText("")}>
            초기화
          </Button>
          <Button
            className="bg-rose-500"
            onClick={() => setAgree((prev) => !prev)}>
            상태변경
          </Button>
          <Button
            className="bg-blue-400 "
            onClick={() => setText("@email.com")}>
            저장된 값
          </Button>
        </div>
      </div>
    </>
  );
};
export default App;
