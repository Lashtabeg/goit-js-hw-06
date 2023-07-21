const allCategories = document.querySelectorAll(`ul#categories .item`);
console.log(`Number of categories: ${allCategories.length}`);

const categories = document.querySelectorAll(`ul#categories .item h2`);
const nameOfCategory = categories.forEach(category=> console.log(`Category: ${category.textContent}`));

const ulEl = categories.children;
console.log(ulEl)

