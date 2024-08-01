import { format } from "date-fns";
export default function Home() {
  return (
    <>
      <h1>home</h1>
      <h2>{format(new Date(), "HH:mm:ss")}</h2>
    </>
  );
}
