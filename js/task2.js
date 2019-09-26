"use strict";
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
ingredients.forEach(ingredientName => {
  const ingredient = document.createElement("li");
  const ingredientsList = document.querySelector("#ingredients");
  ingredient.textContent = ingredientName;
  ingredientsList.append(ingredient);
});
