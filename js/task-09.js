function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", (el) => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = document.body.style.backgroundColor;
console.log(document.body.style.backgroundColor);
console.log(spanColor.textContent);
});
