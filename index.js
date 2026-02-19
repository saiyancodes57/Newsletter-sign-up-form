const input = document.querySelector(".email");
const labelCont = document.querySelector(".label-group");
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

// Confirmation Dialog
const card = document.querySelector(".card");
const submitBtn = document.querySelector(".btn");
const body = document.querySelector(".body");

const dialog = document.createElement("div");
dialog.classList.add("success-dialog");

const successImg = document.createElement("img");
successImg.src = "icon-success.svg";

const title = document.createElement("h1");
title.textContent = "Thanks for subscribing!";

const para = document.createElement("p");
para.textContent =
  "A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.";

const dismissBtn = document.createElement("button");
dismissBtn.textContent = "Dismiss message";

dialog.append(successImg, title, para, dismissBtn);

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  card.remove();
  body.append(dialog);
});

dismissBtn.addEventListener("click", function () {
  dialog.remove();
  body.append(card);
});
