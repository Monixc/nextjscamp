import { create } from "zustand";

type TCountStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};
export const useCountStore = create<TCountStore>((set) => ({
  count: 0,
  //increment: () => set({ count: 1 }),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })), //콜백함수 형태로
  //매개변수로 자기자신의 참조값을 사용할 수 있다.
}));
