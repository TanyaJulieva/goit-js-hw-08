// import throttle from "lodash.throttle";

const throttle = require("lodash.throttle");

const elements = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    message: document.querySelector('textarea')
}

const LS_KEY = "feedback-form-state";

const formInput ={};

elements.form.addEventListener('input', throttle(handlerInput, 500))

function handlerInput(evt) {
    formInput[evt.target.name] = evt.target.value;
    localStorage.setItem(LS_KEY, JSON.stringify(formInput));

};

function formOutput() {
    const savedForm = JSON.parse(localStorage.getItem(LS_KEY));

    elements.input.value = savedForm.email;
    elements.message.value = savedForm.message;
}

formOutput()

elements.form.addEventListener('submit', handlerSubmit)

function handlerSubmit(evt) {
    evt.preventDefault();

    const {email, message} = evt.currentTarget.elements
    localStorage.removeItem(LS_KEY);

    console.log({email: email.value, message: message.value})

    elements.form.reset()
};