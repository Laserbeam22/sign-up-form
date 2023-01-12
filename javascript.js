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

    let addValidClass = function(name) {
        name.classList.remove('invalid');
        name.classList.add('valid');
    }
    
    let addInvalidClass = function(name) {
        name.classList.remove('valid');
        name.classList.add('invalid');
    }

    var upperCaseLetters = /[A-Z]/g;
    if(userInput.value.match(upperCaseLetters)) {
        addValidClass(upper);
    } else {
        addInvalidClass(upper);
    }

    var lowerCaseLetter = /[a-z]/g;
    if(userInput.value.match(lowerCaseLetter)) {
        addValidClass(lower);
    } else {
        addInvalidClass(lower);
    }

    var numbers = /[0-9]/g;
    if(userInput.value.match(numbers)) {
       addValidClass(number);
    } else {
        addInvalidClass(number);
    }

    if(userInput.value.length >= 8) {
       addValidClass(length);
    } else {
        addInvalidClass(length);
    }

    if(userInput.validity.patternMismatch | !userInput.value) {
        invalidClass();
    } else if(userInput.value != confirmUserInput.value) {
        invalidClass();
    } else {
        validClass();
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
        invalidClass();
        return false;
    } else {
        noMatch.classList.remove('error');
        noMatch.classList.add('no-error');
    }
}