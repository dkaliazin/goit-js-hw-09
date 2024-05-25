const formData = {
    email: "",
    message: ""
}
const localData = localStorage.getItem("feedback-form-state");
document.addEventListener('DOMContentLoaded', () => {
    if (localData) {
        const parseData = JSON.parse(localData);
        inputEmail.value = parseData.email;
        inputTextarea.value = parseData.message;
        formData.email = parseData.email;
        formData.message = parseData.message;
    }
})
const inputEmail = document.querySelector(".feedback-form-email");
console.log(inputEmail.value);
const inputTextarea = document.querySelector(".feedback-form-textarea");
inputEmail.addEventListener("input", () => {
    formData.email = inputEmail.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
})
inputTextarea.addEventListener("input", () => {
    formData.message = inputTextarea.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
})
const form = document.querySelector('.feedback-form'); 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValue = inputEmail.value.trim();
    const textareaValue = inputTextarea.value.trim();
    if (emailValue == "" || textareaValue == "") {
        alert("Fill please all field");
    }
    else {
        console.log(formData);
        localStorage.clear();
        formData.email = "";
        formData.message = "";
        inputEmail.value = "";
        inputTextarea.value = "";
    }
})