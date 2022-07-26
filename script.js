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
    let result;
    if (operator == '+') {
        result = add(firstNumber, secondNumber);
    } else if (operator == '-') {
        result = subtract(firstNumber, secondNumber);
    } else if (operator == '*') {
        result = multiply(firstNumber, secondNumber);
    } else if (operator == '/') {
        result = divide(firstNumber, secondNumber);
    }
    return result;
}


// Button to reset the screen
const clear = document.querySelector('.clear')
const screen = document.querySelector('.screen')
clear.addEventListener('click', e => {
    screen.textContent = ''
})


// Button to select the numbers
const button = document.querySelectorAll('.button')
button.forEach(button => button.addEventListener('click', e => {
    const onScreen = document.querySelector('.screen')
    onScreen.textContent = onScreen.textContent + button.textContent
}))


// Button to compute the calculation and display on the screen (currently only accepts 2 numbers and 1 operator)
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', e => {
    const onScreen = document.querySelector('.screen')
    screenArray = onScreen.textContent.split(' ');
    for (let i = 0; i < screenArray.length; i++) {
        console.log(screenArray[i]);
    }
    if (screenArray.length > 1) {
        if (screenArray[0] == '-') {
            firstNumber = Number(screenArray[2]) * -1;
            operator = screenArray[3];
            secondNumber = Number(screenArray[4]); 
        } else {
            firstNumber = Number(screenArray[0]);
            operator = screenArray[1];
            secondNumber = Number(screenArray[2]);
        }
        console.log(firstNumber, operator, secondNumber)
        result = operate(operator, firstNumber, secondNumber);
        onScreen.textContent = result
    }
})