import ProfileCard from "../example/ex1/ProfileCard";

const App = () => {
  const isLoggedin = true;
  return (
    <>
      {isLoggedin && (
        <ProfileCard
          background="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          userPic="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          name="Sally Ramos"
          instaId="@SallyTheramos"
          onFollowClick={() => {
            alert("follow");
          }}
        />
      )}
    </>
  );
};
export default App;
