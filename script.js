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
    console.log(onScreen.textContent.length)
    if (onScreen.textContent.length >= 20) {
        button.removeEventListener('click', e => {
            const onScreen = document.querySelector('.screen')
            onScreen.textContent = onScreen.textContent + button.textContent
        })
    }
}))

const onScreen = document.querySelector('.screen')
if (onScreen.textContent.length >= 20) {
        button.removeEventListener('click', e => {
            const onScreen = document.querySelector('.screen')
            onScreen.textContent = onScreen.textContent + button.textContent
    })
}