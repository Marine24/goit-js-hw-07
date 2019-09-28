"use strict";
let inputValue;
const input = document.querySelector('input[type="number"]');
const renderButton = document.querySelector('button[data-action="render"]');
const destroyButton = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

input.addEventListener("change", () => {
  inputValue = Number(input.value);
});

destroyButton.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}
renderButton.addEventListener("click", () => {
  boxes.insertAdjacentHTML("beforeend", `${createBoxes(inputValue)}`);
});

function createBoxes(amount) {
  const width = 30;
  const height = 30;
  let step = 10;
  let array = [];
  for (let i = 1; i <= amount; i++) {
    const div = document.createElement("div");
    div.style.width = width + i * step + "px";
    div.style.height = height + i * step + "px";
    div.style.background =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    array.push(div.outerHTML);
  }
  return array.join("");
}
