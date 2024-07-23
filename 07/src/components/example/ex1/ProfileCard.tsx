const ProfileCard = (props: {
  background: string;
  userPic: string;
  name: string;
  instaId: string;
  onFollowClick: () => void;
}) => {
  const onClickHandler = () => {
    alert("d");
  };
  return (
    <>
      <article className="card">
        <div>
          <img className="card-img" src={props.background} />
        </div>
        <div className="profile">
          <img className="prof-img" src={props.userPic} alt="profile-pic" />
          <h3 className="alias">{props.name}</h3>
          <p className="username">{props.instaId}</p>
          <button onClick={props.onFollowClick}>Follow</button>
        </div>
      </article>
    </>
  );
};
export default ProfileCard;
