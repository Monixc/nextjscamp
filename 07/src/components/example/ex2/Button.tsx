const Button = ({ text, color }: { text: string; color: string }) => {
  return (
    <>
      <button className="w-[77px] h-[44px] rounded-lg  ">{text}</button>
    </>
  );
};
export default Button;
