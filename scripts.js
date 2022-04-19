const firstNumber = document.getElementById('first-number');
const secondNumber = document.getElementById('second-number');
const error = document.getElementById('error');
const result = document.getElementById('result')
const btn = document.getElementById('calculate-btn');

btn.addEventListener('click', onBtnClick);

function getFirstNumber(firstNumber) {
    return firstNumber.value;
}

function getSecondNumber(secondNumber) {
    return secondNumber.value;
}

function outputError() {
    error.textContent = 'Operands are invalid';
}

function isFirstNumberValid(firstNumber) {
    let result = getFirstNumber(firstNumber)
    if (!isNaN(+result) && result != '') {
        return +result;
    }

    return outputError();
}

function isSecondNumbeValid(secondNumber) {
    let result = getFirstNumber(secondNumber)
    if (!isNaN(+result) && result != '') {
        return +result;
    }

    return outputError();
}

function addNumbers(firstNumber, secondNumber) {
    const first = isFirstNumberValid(firstNumber);
    const second = isSecondNumbeValid(secondNumber);

    if (first != undefined && second != undefined) {
        const res = first + second;

        result.textContent = res;
        error.textContent = '';
    }
}

function onBtnClick() {
    result.textContent = '';
    addNumbers(firstNumber, secondNumber)
}
