"use strict";

const buttons = document.querySelectorAll("button");
const display = document.querySelector("#screen");

let firstPart = "";
let secondPart = "";
let sign = "";

function calc(a, b, c) {
  switch (c) {
    case "*":
      return Number(a) * Number(b);
    case "-":
      return Number(a) - Number(b);
    case "+":
      return Number(a) + Number(b);
    case "/":
      return Number(a) / Number(b);
  }
}

for (let x = 0; x < buttons.length; x++) {
  buttons[x].addEventListener("click", function () {
    let clicked = buttons[x].value;
    if (
      (!firstPart || firstPart == "-" || firstPart == "+") &&
      (clicked == "*" || clicked == "/" || clicked == "=")
    ) {
      firstPart = "";
      secondPart = "";
      display.value = 0;
    } else if (
      !firstPart ||
      (firstPart &&
        clicked !== "*" &&
        clicked !== "-" &&
        clicked !== "+" &&
        clicked !== "/" &&
        !sign)
    ) {
      firstPart += clicked;
      display.value = firstPart;
    } else if (
      firstPart &&
      (clicked == "*" || clicked == "+" || clicked == "-" || clicked == "/")
    ) {
      display.value = 0;
      sign = clicked;
    } else if (
      firstPart &&
      sign &&
      clicked !== "*" &&
      clicked !== "+" &&
      clicked !== "-" &&
      clicked !== "/" &&
      clicked !== "="
    ) {
      secondPart += clicked;
      display.value = secondPart;
    }
    if (clicked == "=" && firstPart && secondPart) {
      let result = calc(firstPart, secondPart, sign);
      display.value = result.toFixed(8).replace(/\.?0+$/, "");
      firstPart = "";
      secondPart = "";
    }
  });
}
