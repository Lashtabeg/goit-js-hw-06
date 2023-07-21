const inputText = document.getElementById(`name-input`);
const nameInput = document.getElementById(`name-output`);

const inputName = ()=>{if (inputText.value === ``) {
    nameInput.textContent = `Anonymous`;
} else {
    nameInput.textContent = `${inputText.value}`;
    
}};

inputText.addEventListener('input', inputName);