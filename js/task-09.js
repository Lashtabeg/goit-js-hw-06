function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const btnChangeColor = document.querySelector(`.change-color`)
const getToBody = document.body;
const numOfColor = document.querySelector(`.color`);
                                          
btnChangeColor.addEventListener('click',changeBodyClr);

function changeBodyClr() {
  const col =getRandomHexColor();
  getToBody.style.backgroundColor = `${col}`;
  numOfColor.textContent = `${col}`;
  };

  


