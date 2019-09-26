"use strict";
const Value = document.querySelector("#value");
const btnI = document.querySelector('button[data-action="increment"]');
btnI.addEventListener("click", increment);
const btnD = document.querySelector('button[data-action="decrement"]');
btnD.addEventListener("click", decrement);
let counterValue = 0;

function increment() {
  counterValue += 1;
  value.innerHTML = counterValue;
}
function decrement() {
  counterValue -= 1;
  value.innerHTML = counterValue;
}
