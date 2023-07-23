const spanValue =document.getElementById('value');
const btnInc = document.querySelector(`button[data-action="increment"]`);
const btnDec = document.querySelector(`button[data-action="decrement"]`);
let counterValue= 0;


btnInc.addEventListener(`click`, onBtnClick);
btnDec.addEventListener(`click`, onBtnClick);

function onBtnClick(event){
    if(event.target === btnInc){
    counterValue += 1;
    
} else{counterValue -= 1; }
spanValue.textContent=counterValue;
};