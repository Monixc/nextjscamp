import { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { TodoFuncContext } from "../../../context/todoFuncContext";

const TodoList = () => {
  const { todos } = useContext(TodoFuncContext);

  return (
    <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
