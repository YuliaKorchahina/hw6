let counterValue = 0;

const btnDecrement = document.querySelector("[data-action='decrement']");
const btnIncrement = document.querySelector("[data-action='increment']");
const count = document.getElementById("value");

count.textContent = counterValue;

btnDecrement.addEventListener("click", () => {
  count.textContent = --counterValue;
});

btnIncrement.addEventListener("click", () => {
  count.textContent = ++counterValue;
});
