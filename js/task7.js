"use strict";
const input = document.querySelector("#font-size-slider");
const text = document.querySelector("#text");
input.addEventListener("input", currentName);
function currentName() {
  text.style.fontSize = `${8 + (50 * input.value) / 100}px`;
}
