const box = document.getElementById(`counter`);
const value =document.getElementById('value');
const counterValue= 0;
const btnInc = document.querySelector(`#counter button[data-action="increment"]`);
const btnDec = document.querySelector(`#counter button[data-action="decrement"]`);

btnInc.addEventListener(`click`, onBtnClick);
btnDec.addEventListener(`click`, onBtnClick);

function onBtnClick(event){
if(event === btnInc){
    counterValue += 1;
    value.value = counterValue;
} else{counterValue -= 1;
    value.value = counterValue;}

}