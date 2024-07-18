const promise = new Promise((resolve, reject) => {
  //비동기 작업을 수행하는 코드
  //작업이 성공하면 resolve(value) 호출
  //작업이 실패하면 reject(error) 호출
  console.log("doing something...");
  resolve("sucess"); //fulfulled가 되면서 값이 들어감-뭐라도 일단 넘겨줘야됨
  reject(); //안넘겨줘도 상광없음. 다만 사유를 넘기지 않는다면 에러 발생 원인을 모르겠지
});

promise
  .then((value) => console.log(value)) //fulfilled 상탱서 호출
  .catch((error) => console.error(error)) //reject 상태서 호출
  .finally(() => console.log("finally")); //resolve, reject 상관없이 무조건 실행
