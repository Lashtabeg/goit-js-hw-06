
const form = document.querySelector(".login-form");

form.addEventListener(`submit`,onFormSub);

function onFormSub(event) {
    event.preventDefault();
        // console.log( event.currentTarget.elements)
    const formElms= event.currentTarget.elements;
if (formElms.email.value===``||formElms.password.value === ``) {
    return alert(`Всі поля повинні бути заповнені! (-^-^-)` )
   }  
//    else{const formData = new FormData(event.currentTarget)
//     console.log(formData)    }
else{
    const dataForm = {
        email: formElms.email.value,
        password:formElms.password.value,
    }
    console.log( dataForm);   
}
event.currentTarget.reset();
}
