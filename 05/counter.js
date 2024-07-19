const buttonPlus = document.querySelector("#plus");
const buttonMinus = document.querySelector("#minus");
const count = document.querySelector("h1");

buttonPlus.addEventListener("click", function () {
  count.textContent = parseInt(count.textContent) + 1;
  console.log("+1");
});

buttonMinus.addEventListener("click", function () {
  count.textContent = parseInt(count.textContent) - 1;
  console.log("-1");
});
