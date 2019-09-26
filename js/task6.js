"use strict";
const input = document.querySelector("#validation-input");
const length = Number(input.dataset.length);

input.onblur = function(text) {
  if (length === text.target.value.length) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
};
input.onfocus = function() {
  if (this.classList.contains("invalid" || "valid")) {
    this.classList.remove("invalid");
    this.classList.remove("valid");
  }
};
