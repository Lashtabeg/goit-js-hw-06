function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

console.log(getRandomHexColor);

const getToBody = document.getElementsByTagName(`body`);
const numOfColor = document.querySelector(`.color`)
const btnChangeColor = document.querySelector(`.change-color`)

btnChangeColor.addEventListener('click',changeBodyClr);

function changeBodyClr(event) {
  getToBody.style.color = `${getRandomHexColor}`;
  numOfColor.textContent = `${getRandomHexColor}`;
  }


