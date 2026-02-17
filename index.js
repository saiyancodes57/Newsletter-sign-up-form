const input = document.querySelector(".email");
const labelCont = document.querySelector(".label-container");
const errorLabel = document.createElement("p");

errorLabel.classList.add("text-preset-3", "error-text");
errorLabel.textContent = "Valid email required";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const updateDom = (isValid) => {
  if (isValid) {
    errorLabel.remove();
    input.classList.remove("error");
  } else {
    labelCont.appendChild(errorLabel);
    input.classList.add("error");
  }
};

input.addEventListener("input", function (e) {
  const value = e.target.value;

  if (value.length === 0) {
    errorLabel.remove();
    input.classList.remove("error");
  } else {
    updateDom(emailRegex.test(value));
  }
});
