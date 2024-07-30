async function getData2() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}
export default async function Fetching2() {
  const data = await getData2();
  return (
    <>
      <h1>Fetching2</h1>
    </>
  );
}
