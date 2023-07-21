const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.getElementById(`ingredients`);


const eachIng = ingredients.map((ingredient) => {
  const crLi =document.createElement(`li`);
  crLi.classList.add(`item`);
  crLi.textContent = ingredient;
  ulEl.append(crLi);
});


