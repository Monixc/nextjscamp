import { create } from "zustand";

type TTodo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

type TodoStore = {
  todos: TTodo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text: string) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, isCompleted: false }],
    })),
  toggleTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    })),
  deleteTodo: (id: number) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));

export default useTodoStore;
