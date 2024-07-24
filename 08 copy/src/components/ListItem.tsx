const ListItem = ({ name, age }: { name: string; age: number }) => {
  return (
    <>
      <h1>
        {name} - {age}
      </h1>
    </>
  );
};
export default ListItem;
