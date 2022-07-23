function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate(operator, firstNumber, secondNumber) {
    let result = operator(firstNumber, secondNumber);
    return result;
}

function writeOnScreen() {
    const onScreen = document.querySelector('.screen')
    onScreen.textContent = 
}

// Button to select the numbers
const button = document.querySelectorAll('.number')
button.addEventListener('click', writeOnScreen)