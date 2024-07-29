import { useContext, useState } from "react";
import Button from "../../html/Button";
import Input from "../../html/Input";
import { TodoFuncContext } from "../../../context/todoFuncContext";
//import { TodoContext } from "../../../context/todoContext";

const TodoEditor = () => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoFuncContext);
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <>
      <form className="grid gap-4" onSubmit={onSubmitHandler}>
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
    </>
  );
};
export default TodoEditor;
