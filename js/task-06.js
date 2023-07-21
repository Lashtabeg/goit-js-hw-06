const textInput = document.getElementById(`validation-input`);
const noFocus =document.querySelector(`#validation-input`);
const valid =document.querySelector(`#validation-input.valid`);
const invalid =document.querySelector(`#validation-input.invalid`);
const onInputBlur = () => {
    if (textInput.value.length === 6) {
    textInput.classList.remove(`noFocus`);
    textInput.classList.add(`valid`)
    } else {
        textInput.classList.remove(`noFocus`);
    textInput.classList.add(`invalid`)
    }
};

textInput.addEventListener("blur",onInputBlur);
