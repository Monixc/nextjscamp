//함수 연습문제

//1번. 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어라
const add = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};
console.log(add(10, 20, 30, 40));
//2번. 사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.

function calculator(operator, a, b) {
  switch (operator) {
    case "add":
      return a + b;
    case "sub":
      return a - b;
    case "mul":
      return a * b;
    case "div":
      if (b === 0) return "Error";
      else return a / b;
    default:
      return "wrong operation";
  }
}
console.log(calculator("div", 5, 0));

//3번. 숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven
const isEven = (num) => (num % 2 === 0 ? true : false);
console.log(isEven(7));

//4번. 팩토리얼 계산하기
const factorial = (n) => {
  let res = 1;

  for (let i = n; i > 0; i--) {
    res *= i;
  }
  return res;
};
console.log(factorial(5));

//4번-재귀함수 이용하기
const factorial2 = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial2(n - 1);
  }
};
console.log(factorial2(5));

//5번. 삼각형의 밑변과 높이를 매개변수로 받아서 넓이를 반환하는 함수 triangleArea
const triangleArea = (base, height) => (base * height) / 2;
console.log(triangleArea(10, 5));
