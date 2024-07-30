import Fetching2 from "@/components/Fetching";
import Fetching1 from "@/components/Fetching1";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<h1 className="text-rose-500">loading1...</h1>}>
        <Fetching1 />
      </Suspense>
      <Suspense fallback={<h1 className="text-red-500">loading2...</h1>}>
        <Fetching2 />
      </Suspense>
    </>
  );
}
