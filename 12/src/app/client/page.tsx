"use client";
import { useEffect, useState } from "react";

export default function ClientPage() {
  const [data, setData] = useState(null);
  async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setData(data);
  }

  useEffect(() => {
    getData();
    console.log("client page");
  }, []);
  return (
    <>
      <h1>ClientPage</h1>
      {data && JSON.stringify(data, null, 2)}
    </>
  );
}
