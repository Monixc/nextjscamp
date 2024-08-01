import { TPost } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import { dummyAvatar } from "../../public/blog/assets";

export default function PostListItem({
  thumbnail,
  title,
  description,
  category,
  id,
  datetime,
}: TPost) {
  return (
    <>
      <Link href={`/read/${id}`}>
        <article>
          <Image
            src={thumbnail}
            alt="dummy"
            className="object-cover"
            width={800}
            height={278}
          />
          <div>
            <strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
              {category}
            </strong>
            <h3 className="text-[24px] font-bold">{title}</h3>
            <p className="text-[#515151]">• 11 min read</p>
            <p className="mt-[15px] text-[#434343]">{description}</p>
            <div className="mt-4 flex items-center gap-[14px]">
              <Image
                src={dummyAvatar}
                alt="프로필 이미지"
                className="rounded-s-full"
              />
              <strong className="text-sm">George Costanazv</strong>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}
