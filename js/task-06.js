const textInput = document.querySelector("#validation-input");
const dataLength = textInput.dataset.length

textInput.addEventListener("click", () => {
    textInput.focus();
  });

textInput.addEventListener("blur", () => {
    if (textInput.value.length >= dataLength) {
        textInput.classList.add('valid')
        textInput.classList.remove('invalid') 
        console.log(textInput);
    } else {
        textInput.classList.add('invalid')  
        textInput.classList.remove('valid') 
        console.log(textInput);
    }
  });
  