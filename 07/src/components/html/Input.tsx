import { twMerge } from "tailwind-merge";

type TInputProps = React.ComponentPropsWithoutRef<"input">; //html 태그의 속성을 다 받을 수 잇당. 지원하는 속성 이름과 똑같아야 한다
const Input = ({ className, ...rest }: TInputProps) => {
  console.log(rest);
  return (
    <>
      <input
        className={twMerge(
          `w-[240px] h-[44px] text-sm rounded-lg placeholder:text-[#acacac] border border-[#4f4f4f] px-[16px] py-[13.5px] outline-none`,
          className
        )}
        {...rest}
      />
    </>
  );
};
export default Input;
