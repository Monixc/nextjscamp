import { useEffect, useState } from "react";
import { search } from "../assets/blog/assets";
import usePostStore from "../stores/postStore";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const fetchPosts = usePostStore((state) => state.fetchPosts);
  useEffect(() => {
    //디바운스 구현
    const timer = setTimeout(() => {
      console.log("db검색");
      //여기에 조회 기능 구현
      fetchPosts("/posts?title_like=" + searchText);
    }, 500); //0.5초 기다리기 이후에 함수 실행

    return () => {
      clearTimeout(timer);
    };
    // console.log("db검색");
    // //여기에 조회 기능 구현
    // fetchPosts("/posts?title_like=" + searchText);
  }, [searchText]);
  return (
    <>
      <section className="flex justify-center items-center mt-[32px]">
        <div className="w-full max-w-[430px] relative">
          <input
            type="text"
            className="border border-[#DDDDDD] w-full h-[58px] py-[18px] px-[28px] rounded-[5px] placeholder-[#5f5f5f] text-lg"
            placeholder="Search for Articles"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <img
            src={search}
            alt=""
            className="absolute top-1/2 right-4 -translate-y-1/2"
          />
        </div>
      </section>
    </>
  );
};
export default Search;
