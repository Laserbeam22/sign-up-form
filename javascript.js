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

    var lowerCaseLetter = /[a-z]/g;
    if(userInput.value.match(lowerCaseLetter)) {
        lower.classList.remove('invalid');
        lower.classList.add('valid');
    } else {
        lower.classList.remove('valid');
        lower.classList.add('invalid');
    }

    var numbers = /[0-9]/g;
    if(userInput.value.match(numbers)) {
        number.classList.remove('invalid');
        number.classList.add('valid');
    } else {
        number.classList.remove('valid');
        number.classList.add('invalid');
    }

    if(userInput.value.length >= 8) {
        length.classList.remove('invalid');
        length.classList.add('valid');
    } else {
        length.classList.remove('valid');
        length.classList.add('invalid');
    }
}