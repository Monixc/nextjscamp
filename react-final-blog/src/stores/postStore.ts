import { create } from "zustand";
import { Tpost } from "../type/post";

type TPostStore = {
  //데이터를 저장하는 상테
  posts: Tpost[];
  fetchPosts: (url: string) => Promise<void>;
  addPost: (formData: Tpost) => Promise<boolean>;
};

const usePostStore = create<TPostStore>((set) => ({
  posts: [],
  fetchPosts: async (url: string) => {
    try {
      //const response = await fetch("http://localhost:3000/posts");
      const response = await fetch("http://localhost:3000" + url);
      const data = await response.json();
      set({ posts: data });
    } catch (e) {
      console.error(e);
    }
  },
  addPost: async (formData) => {
    console.log(formData);
    try {
      const res = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        return true;
      }
      return false;
    } catch (e) {
      console.log("데이터 전송에 실패");
      return false;
    }
  },
}));

export default usePostStore;
