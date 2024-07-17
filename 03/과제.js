//1번
//문자열이 주어졌을 때, 연속된 동일한 문자를 하나의 문자와 그 문자의 개수로 압축해서 반환하는 함수를 만들어주세요.

const zip = () => {
  const io = "aaabbbccc";
  let prior;
  let res = "";
  for (i = 0; i < io.length; i++) {
    if (io[i] !== prior) {
      res += io[i];
      prior = io[i];
    }
  }
  return res;
};
console.log(zip());

//2번
//다음 구구단을 출력하는 코드를 반복문을 사용해서 출력하도록 변경해주세요.

const gugudan = (n) => {
  const dan = n;
  for (let i = 1; i <= 9; i++) {
    console.log(dan + "*" + i + "=" + dan * i);
  }
};
gugudan(9);
