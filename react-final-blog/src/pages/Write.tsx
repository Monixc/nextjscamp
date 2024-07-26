import { useState } from "react";
import { Tpost } from "../type/post";
import usePostStore from "../stores/postStore";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate();

  // 그냥 한번에 모든 데이터 입력받게 객체로 선언
  const addPost = usePostStore((state) => state.addPost);

  const [text, setText] = useState<Tpost>({
    id: uuidv4(),
    title: "",
    category: "",
    description: "",
    thumbnail: "",
    datetime: new Date(),
  });
  const handlerImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    //사용자가 입력항 파일에 대한 정보를 가져옴

    if (file) {
      //파일리더 인스턴스 생성

      const reader = new FileReader();
      reader.onloadend = () => {
        console.log(reader.result as String);
        setText({ ...text, thumbnail: reader.result as string }); //세팅 코드가 빠져서 이거 넣어야 들어간당<div className=""></div>
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmitHandeler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //addPOst가 async awat여서 얘도 기다려야 함
    const result = await addPost(text);
    if (result) {
      alert("새로운 글을 등록하였습니다");
      navigate("/");
    } else {
      alert("새로운 글을 실패하였습니다");
    }
  };
  const onChangeHandler = (
    //셀렉스박스는 select element
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 ">
            Add a new Post
          </h2>
          <form action="#" onSubmit={onSubmitHandeler}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Type product name"
                  required
                  value={text.title}
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  onChange={onChangeHandler}>
                  {/* value와 텍스트를 일치시켜줌 */}
                  <option value={""}>Select category</option>
                  <option value="Next.js">Next.js</option>
                  <option value="React.js">React.js</option>
                  <option value="Vue.js">Vue.js</option>
                  <option value="Phones">Phones</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="item-weight"
                  className="block mb-2 text-sm font-medium text-gray-900">
                  Thumbnail
                </label>
                <label
                  className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="thumbnail">
                  Upload file
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50focus:outline-none   h-[42px] p-[7px]"
                  aria-describedby="user_avatar_help"
                  id="thumbnail"
                  name="thumbnail"
                  type="file"
                  onChange={handlerImageUpload}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your description here"
                  onChange={onChangeHandler}></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="bg-slate-500 text-white inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
              Add Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Write;
