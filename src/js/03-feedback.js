// import throttle from "lodash.throttle";

const throttle = require("lodash.throttle");

const elements = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    message: document.querySelector('textarea')
}

const LS_KEY = "feedback-form-state";

let formInput ={};

elements.form.addEventListener('input', throttle(handlerInput, 500))

function handlerInput(evt) {
    formInput[evt.target.name] = evt.target.value;
    localStorage.setItem(LS_KEY, JSON.stringify(formInput));

};

function formOutput() {
    const savedForm = localStorage.getItem(LS_KEY);
    if (savedForm) {
        formInput = JSON.parse(savedForm);
        elements.input.value = formInput.email || '';
        elements.message.value = formInput.message || '';
    };
};

formOutput()

elements.form.addEventListener('submit', handlerSubmit)


function handlerSubmit(evt) {
    evt.preventDefault();
    if (elements.input.value === '' || elements.message.value === '') {
        alert('Please, fill in all fields');
        return;
    }
    localStorage.removeItem(LS_KEY);
    console.log({ email: elements.input.value, message: elements.message.value });
    elements.form.reset();
    formInput = {};
}