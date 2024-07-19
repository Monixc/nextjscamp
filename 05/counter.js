// const buttonPlus = document.querySelector("#plus");
// const buttonMinus = document.querySelector("#minus");
// const count = document.querySelector("h1");

// buttonPlus.addEventListener("click", function () {
//   count.textContent = parseInt(count.textContent) + 1;
//   console.log("+1");
// });

// buttonMinus.addEventListener("click", function () {
//   count.textContent = parseInt(count.textContent) - 1;
//   console.log("-1");
// });

//강사님 코드
let i = 0;
const h1El = document.querySelector("h1");
const decrementBtn = document.querySelector("button:nth-of-type(1)");
const incrementBtn = document.querySelector("button:nth-of-type(2)");

console.log(h1El, decrementBtn, incrementBtn);

decrementBtn.addEventListener("click", () => {
  console.log("decrement");
  if (i > 0) h1El.innerText = --i;
});
incrementBtn.addEventListener("click", () => {
  console.log("increment");
  if (i < 10) h1El.innerText = ++i; //innerText는 문자열로 저장되어야 한다.
});
