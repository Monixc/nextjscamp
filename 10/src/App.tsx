// import Todo from "./components/todo-series/todo_context/Todo";
// import TodoContextProvider from "./context/todoContext";

import Todo from "./components/todo-series/todo_context/Todo";
import TodoFuncContextProvider from "./context/todoFuncContext";

export default function App() {
  return (
    <>
      <TodoFuncContextProvider>
        <Todo />
      </TodoFuncContextProvider>
    </>
  );
}
