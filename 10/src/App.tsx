import Todo from "./components/todo-series/todo_context/Todo";
import TodoContextProvider from "./context/todoContext";

export default function App() {
  return (
    <>
      <TodoContextProvider>
        <Todo />
      </TodoContextProvider>
    </>
  );
}
