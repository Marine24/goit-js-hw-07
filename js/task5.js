"use strict";
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", currentName);

function currentName(event) {
  output.textContent = event.currentTarget.value;
  if (!input.value.length) output.textContent = "незнакомец";
}
