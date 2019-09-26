const ItemsName = document.querySelectorAll("li.item");
console.log(`В списке: ${ItemsName.length} категории`);

const title = document.querySelectorAll(".item > h2");
const liItems = document.querySelectorAll(".item > ul");

for (let i = 0; i < liItems.length; i += 1) {
  console.log(`Категория: '${title[i].textContent}'`);
  console.log(`Количество элементов: ${liItems[i].children.length}`);
}
