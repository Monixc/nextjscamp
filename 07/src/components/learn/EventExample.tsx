const App = () => {
  const onChageHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log("Change Event");
    console.log(e.target.value);
    //console.log(e.target.checked);
  };
  const onClickHandler = (msg: string, num: number) => {
    alert(msg + ":" + num);
  };
  const login = (e: React.FormEvent<HTMLFormElement>) => {
    //이메일 입력한 값 가져오고
    //비밀번호 입력값을 가져오고
    //API 통신을 해서 통신 서버로 이메이로가 비밀번호를 전송
    //서버에서 응답 받은 결과에 따라서
    //로그인 성공 or 로그인 실패
    e.preventDefault();
    console.log("로그인");
  };
  return (
    <>
      <form action="" onSubmit={login}>
        <input type="text" placeholder="이메일" />
        <input type="password" placeholder="패스워드" />
        <button type="submit">login </button>
      </form>
      <h1>App Component</h1>
      <input
        type="radio"
        name="gender"
        value={"male"}
        onChange={onChageHandler}
      />{" "}
      male
      <input
        type="radio"
        name="gender"
        value={"female"}
        onChange={onChageHandler}
      />{" "}
      female
      <br />
      <input type="checkbox" onChange={onChageHandler} />
      <input type="text" onChange={onChageHandler} />
      <button onClick={() => onClickHandler("Hello", 10)}>click</button>
      <br />
      <select onChange={(e) => onChageHandler(e)}>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Carrot">Carrot</option>
      </select>
    </>
  );
};
export default App;
