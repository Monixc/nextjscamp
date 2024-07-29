//context 임포트
import { createContext, useState } from "react";

export type TTodo = {
  id: number;
  text: string;
  isCompleted: boolean;
};
type TTodoFuncContext = {
  todos: TTodo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const TodoFuncContext = createContext<TTodoFuncContext>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  deleteTodo: () => {},
});

const TodoFuncContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, isCompleted: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <TodoFuncContext.Provider
      value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoFuncContext.Provider>
  );
};

export default TodoFuncContextProvider;
