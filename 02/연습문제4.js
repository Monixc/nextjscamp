//조건문
const score = 22;
if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");
else if (score >= 70) console.log("C");
else if (score >= 60) console.log("D");
else console.log("F");

//1. 짝수 홀수 판단
const num = 5;
if (num % 2 === 0) console.log("Even");
else console.log("Odd");

//2. 로그인 확인 및 권한 부여
const isLoggedIn = true;
const isAdmin = false;
if (!isLoggedIn) console.log("Please Log in");
else if (isLoggedIn && !isAdmin) console.log("Acess denied");
else if (isLoggedIn && isAdmin) console.log("Welcome, admin");

//3. 숫자 크기 비교
const a = 10;
const b = 33;

if (a > b) console.log("a is greater");
else if (a < b) console.log("b is grater");
else console.log("a and b are equal");

//5.월별 계절 판별
const month = 7;
if (month === 12 || month === 1 || month === 2) console.log("Winter");
else if (month === 3 || month === 4 || month === 5) console.log("Spring");
else if (month === 6 || month === 7 || month === 8) console.log("Summer");
else if (month === 9 || month === 10 || month === 11) console.log("Authumn");
