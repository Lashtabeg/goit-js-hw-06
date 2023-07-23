// const allCategories = document.querySelectorAll(`ul#categories li.item`);
// console.log(`Number of categories: ${allCategories.length}`);

// const categories = document.querySelectorAll(`ul#categories li.item h2`);
// const nameOfCategory = categories.forEach(category=> console.log(`Category: ${category.textContent}`));


// const ulInCateg = allCategories.querySelectorAll(`ul`);
// const numLi= ulInCategs.forEach(categ=> console.log(`Elements:${categ.children.length}`));


const allCategories = document.getElementById("categories");
const catChildren = allCategories.querySelectorAll(`.item`)
console.log(`Number of categories: ${catChildren.length}`);
catChildren.forEach(child => {
    console.log(`Category: ${child.firstElementChild.textContent}`)
    console.log(`Elements: ${child.lastElementChild.children.length}`)
});
