//기본 산술 연산
// const a = 10;
// const b = 5;

const sum = a + b;
const sub = a - b;
const mul = a * b;
const quo = a / b;
const remainder = a % b;

console.log(sum, sub, mul, quo, remainder);

//증가 및 감소 연산자
let y = 7;

console.log(y);
console.log(y++);

console.log(y);
console.log(y--);

console.log(y);
console.log(++y);

console.log(y);
console.log(--y);

//복합대입연산자
let x = 20;
console.log((x += 10));
console.log((x -= 5));
console.log((x /= 2));
console.log((x *= 3));

//비교 연산자
const age1 = 25;
const age2 = 35;

console.log(age1 > age2);
console.log(age1 === age2);

//삼항 연산자
//1. num에 임의의 숫자를 할당하고, Positive, Negative, Zero를 판별하라
//삼항 연산자는 중복하여 사용할 수 있다.
//const result = num > 0 ? "Positive" : (num === 0 ? "Zero" : "Negative");
const num = 8;
const result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(result);

//2. a, b, c 중 가장 큰 수 판별
const a = 10;
const b = 3;
const c = 10;

const max = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(max);

//3.짝수인지 홀수인지 판별
const number = 5;
console.log(number % 2 === 0 ? "Even" : "Odd");

//4.로그인 확인
// const isLoggedIn = true;
// console.log(isLoggedIn ? "Welcome" : "Please Log in");

//5. 성인확인
const age = 24;
console.log(age >= 18 ? "Adult" : "Minor");

//논리 연산자
//1. 논리 연산자 기본
const p = true;
const o = false;
console.log(p && o);
console.log(p || o);
console.log(!p);

//2. 여러 조건 결합
const q = 10;
const w = 20;
const e = 30;
console.log(q > 10 && w < 5);
console.log(q > 10 || e > 3);
console.log(y !== 0);

//3.사용자 로그인 및 권한 확인
const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn ? "Welcome" : "Please Log in");
console.log(isAdmin ? "Admin access granted" : "Admin access denied");
console.log(
  isLoggedIn && isAdmin ? "Full access granted" : "Restricted access"
);

//4.값의 존재 확인
const value1 = 1;
const value2 = null;

//0, undefined, null, "", NAN은 거짓으로 출력
//하지만 삼항 연산자에서만 적용되고, and, or 연산은 강제로 변환해주지 않는다
//부정 연산을 사용
//부정을 두번 쓰면 참, 거짓으로 도출해준다.
console.log(!!value1 || !!value2);
console.log(!value1 && !value2);
