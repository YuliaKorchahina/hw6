
const inputFontSize = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

const changeFontSize = (element, value) => {
  element.style.fontSize = `${value}px`;
};

changeFontSize(spanText, inputFontSize.value);

inputFontSize.addEventListener("input", (event) => {
  changeFontSize(spanText, event.currentTarget.value);
});
