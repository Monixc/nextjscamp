import { useState } from "react";
import Input from "./html/Input";
import Checkbox from "./html/Checkbox";
import Button from "./html/Button";
import { twMerge } from "tailwind-merge";

type TTodo = {
  id: number;
  text: string;
  isCompleted: boolean;
};
const Todo = () => {
  const [todos, setToDos] = useState<TTodo[]>([]);
  const [text, setText] = useState("");
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = {
      id: todos.length + 1,
      text,
      isCompleted: false,
    };

    setToDos((prevTodos) => [...prevTodos, newTodo]);
    console.log(text);
    setText("");
  };

  const toggleTodo = (id: number) => {
    setToDos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setToDos((todos) => todos.filter((todo) => todo.id !== id)); //삭제할 아이디를 제외한 값만 가져간다
  };
  return (
    <>
      <div className="item-middle bg-black">
        <div className="w-[375px] h-[502px] py-10 px-[25px] text-[#4f4f4f] bg-white border border-[#d1d1d1] rounded-lg inter ">
          <h1 className="text-xl font-bold mb-[10px]">Todo List App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          {/* 등록 */}
          <form action="" className="grid gap-4" onSubmit={onSubmitHandler}>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Enter Todo List"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Button
                type="submit"
                className="bg-[#4f4f4f] text-white w-[77px] shrink-0 rounded-lg">
                Add
              </Button>
            </div>
          </form>
          {/* 목록 */}
          <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between border border-[#4F4F4F] h-[44px] px-[15px] rounded-lg bg-[rgba(53,56,62,0.05)] select-none shrink-0">
                <Checkbox
                  checked={todo.isCompleted}
                  onToggle={() => toggleTodo(todo.id)}>
                  <span
                    className={twMerge(
                      "text-[#35383E]",
                      todo.isCompleted && "line-through"
                    )}>
                    {todo.text}
                  </span>
                </Checkbox>
                <Button
                  className="border border-[#4f4f4f] rounded w-[23px] h-[23px] flex justify-center items-center"
                  onClick={() => deleteTodo(todo.id)}>
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.50002 9.81827L12.9548 15.2731L14.7731 13.4548L9.31829 8L14.7731 2.54518L12.9548 0.726901L7.50002 6.18173L2.04519 0.726902L0.226918 2.54518L5.68174 8L0.226919 13.4548L2.04519 15.2731L7.50002 9.81827ZM7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
                      fill="#4F4F4F"
                    />
                    <path
                      d="M7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
                      fill="#4F4F4F"
                    />
                  </svg>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Todo;
