export interface IGreetingProps {
  name: string;
  age: number;
}

// type TGreetingProps {
//     name: string;
//     age: number;
// }
const Greeting = (props: IGreetingProps) => {
  console.log(props);
  return (
    <>
      <h1>
        Hello {props.name}, {props.age}
      </h1>
    </>
  );
};
export default Greeting;

// const Greeting = ({ name, age }: IGreetingProps) => {
//   console.log(props);
//   return (
//     <>
//       <h1>
//         Hello {name}, {age}
//       </h1>
//     </>
//   );
// };
// export default Greeting;
