const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const EVENT_NAME_INPUT = "input";
const DEFAULT_VALUE = "Anonymous";

const handleTextInput = (value) => {
  if (value) {
    output.textContent = value;
  } else {
    output.textContent = DEFAULT_VALUE;
  }
};

textInput.addEventListener(EVENT_NAME_INPUT, ({ currentTarget: { value } }) => {
  handleTextInput(value);
});
