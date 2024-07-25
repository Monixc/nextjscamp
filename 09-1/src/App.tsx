import { createContext, useState } from "react";
import Page from "./components/learn/Page";

export const counterContext = createContext<{
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}>({ count: 0, setCount: () => {} });

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <counterContext.Provider value={{ count, setCount }}>
        <Page />
      </counterContext.Provider>
    </>
  );
}
