"use client";
import { useParams, useSearchParams, usePathname } from "next/navigation";
export default function blogDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  console.log(searchParams.get("lang"));
  console.log(params);
  console.log(pathname);
  return (
    <>
      <div>Blog Detail Component : {params.id}</div>
    </>
  );
}
