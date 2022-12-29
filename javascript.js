const userInput = document.getElementById('password');
const upper = document.getElementById('rule-1');
const lower = document.getElementById('rule-2');
const number = document.getElementById('rule-3');
const length = document.getElementById('rule-4');


userInput.onkeyup = function() {

    var upperCaseLetters = /[A-Z]/g;
    if(userInput.value.match(upperCaseLetters)) {
        upper.classList.remove('invalid');
        upper.classList.add('valid');
    } else {
        upper.classList.remove('valid');
        upper.classList.add('invalid');
    }
}