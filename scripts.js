const operator = getOperator();
const firstNumber = getNumber('Please, write a first number.');
const secondNumber = getNumber('Please, write a second number.');
let result = calculate(operator, firstNumber, secondNumber);

showResult(operator, firstNumber, secondNumber, result);

function getOperator() {
    while (true) {
        const operator = prompt('Please, write a mathematical operation.');
        if (operator == '+' || operator == '-' || operator == '*' || operator == '/') {
            return operator;
        }
    }
}

function getNumber(message) {
    while (true) {
        let result = prompt(message);
        if (!isNaN(+result) && result != '') {
            return result;
        }
    }
}

function calculate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
    }
}

function showResult(operator, firstNumber, secondNumber, result) {
    alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
}