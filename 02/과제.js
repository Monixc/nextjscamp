//1번
for (let i = 1; i <= 9; i++) {
  console.log(i);
}

//2번
let numArr = [10, -10, 20, -30, 40];
let sum = 0;
for (let index in numArr) {
  if (numArr[index] > 0) sum += numArr[index];
}
console.log(sum);
//3번
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) console.log(i + " 짝수");
  else console.log(i + " 홀수");
}

//4번
for (let i = 100; i <= 999; i++) {
  let hundreds = parseInt(i / 100);
  let tens = parseInt((i % 100) / 10);
  let ones = i % 10;

  let Amstrong = hundreds ** 3 + tens ** 3 + ones ** 3;

  if (i === Amstrong) console.log(i);
}
