"use strict";
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
const liItem = ingredients.map(ingredientName => {
  const ingredient = document.createElement("li");
  ingredient.textContent = ingredientName;
  return ingredient;
});
const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...liItem);
