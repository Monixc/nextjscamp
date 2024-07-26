import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);

  //async await 방식
  const fetchData = async () => {
    // const response = await fetch("http://localhost:3000/posts");
    // const data = await response.json();

    // const data = await (await fetch("http://localhost:3000/posts")).json();
    // setData(data);

    const data = await (
      await fetch("http://localhost:3000/comments/2", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: "modify" }),
      })
    ).json();
    setData(data);
  };
  useEffect(() => {
    //API 통신
    //웹 브라우저 api 중 하나인 fetch를 사용하거나 axioss를 사용한다.

    fetchData();
    // fetch("http://localhost:3000/posts")
    //   .then((response) => response.json())
    //   .then((data) => setData(data));
  }, []);
  return (
    <>
      <h1>App Component</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};
export default App;
