const userInput = document.getElementById('password');
const upper = document.getElementById('rule-1');
const lower = document.getElementById('rule-2');
const number = document.getElementById('rule-3');
const length = document.getElementById('rule-4');

const confirmUserInput = document.getElementById('confirm-pswrd');
const pswrdConfirm = document.getElementById('pswrdMatch');

const noMatch = document.getElementById('noMatch');
const createBtn = document.getElementById('create');



let invalidClass = function() {
    pswrdConfirm.classList.remove('pswrdValid');
    pswrdConfirm.classList.add('pswrdInvalid');
    confirmUserInput.classList.remove('confirmValid');
    confirmUserInput.classList.add('confirmInvalid');
}

let validClass = function() {
    pswrdConfirm.classList.remove('pswrdInvalid');
    pswrdConfirm.classList.add('pswrdValid');
    confirmUserInput.classList.remove('confirmInvalid');
    confirmUserInput.classList.add('confirmValid');
    noMatch.classList.remove('error');
    noMatch.classList.add('no-error');
}

let checkPswrdValidity = function() {
    if(userInput.value.patternMismatch | userInput.value.length < 8) {
        userInput.classList.remove('validated');
        userInput.classList.add('invalidated');
    } else {
        userInput.classList.remove('invalidated');
        userInput.classList.add('validated');
    }
}


userInput.onkeyup = function() {

    checkPswrdValidity();

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

    if(userInput.validity.patternMismatch | !userInput.value) {
        pswrdConfirm.classList.remove('pswrdValid');
        pswrdConfirm.classList.add('pswrdInvalid');
        confirmUserInput.classList.remove('confirmValid');
        confirmUserInput.classList.add('confirmInvalid');
    } else if(userInput.value != confirmUserInput.value) {
        pswrdConfirm.classList.remove('pswrdValid');
        pswrdConfirm.classList.add('pswrdInvalid');
        confirmUserInput.classList.remove('confirmValid');
        confirmUserInput.classList.add('confirmInvalid');
    } else {
        pswrdConfirm.classList.remove('pswrdInvalid');
        pswrdConfirm.classList.add('pswrdValid');
        confirmUserInput.classList.remove('confirmInvalid');
        confirmUserInput.classList.add('confirmValid');
        noMatch.classList.remove('error');
        noMatch.classList.add('no-error');
    }
}

confirmUserInput.onkeyup = function() {

    checkPswrdValidity();

    if(userInput.classList.contains('validated')) {
        if(userInput.value.length == confirmUserInput.value.length) {
            if(userInput.value == confirmUserInput.value) {
                validClass();
            }
        } else {
           invalidClass();
        }
        
    } else {
        invalidClass();
    }
    
}

createBtn.onclick = function() {

    if (confirmUserInput.value != userInput.value) {
        noMatch.classList.remove('no-error');
        noMatch.classList.add('error');
        pswrdConfirm.classList.remove('pswrdValid');
        pswrdConfirm.classList.add('pswrdInvalid');
        confirmUserInput.classList.remove('confirmValid');
        confirmUserInput.classList.add('confirmInvalid');
    } else {
        noMatch.classList.remove('error');
        noMatch.classList.add('no-error');
    }
}