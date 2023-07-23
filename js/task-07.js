const inputRange = document.getElementById(`font-size-control`)
const textSize = document.getElementById(`text`);


inputRange.addEventListener(`input`,changeSize);
function changeSize(event) {
    textSize.style.fontSize = event.currentTarget.value + `px`
};
