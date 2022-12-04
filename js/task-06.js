const textInput = document.querySelector("#validation-input");
const dataLength = textInput.dataset.length

textInput.addEventListener("click", () => {
    textInput.focus();
  });

textInput.addEventListener("blur", () => {
    if (textInput.value.length >= dataLength) {
        textInput.classList.add('valid')
    } else {
        textInput.classList.add('invalid')   
    }
  });
  