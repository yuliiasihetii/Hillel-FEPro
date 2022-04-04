const operator = getOperator();
const operandes = getOperandes();
const numbers = splitNumbers();
const result = calculate(operator, numbers);

showResult(operator, numbers, result);

function getOperator() {
    let operator;

    do {
        operator = prompt('Please, write a  mathematical operation.');
    } while (isOperatorInvalid(operator));

    return operator;
}

function isOperatorInvalid(value) {
    return value !== '+' && value !== '-' && value !== '/' && value !== '*';
}

function getOperandes() {
    let operandes;

    do {
        operandes = prompt('Please, write operandes.')
    } while (operandes == '' || operandes == null);

    return operandes;
}

function splitNumbers() {
    return operandes.split(',');
}

function calculate(operator, numbers) {
    switch (operator) {
        case '+':
            return sum(numbers);
        case '-':
            return dif(numbers);
        case '*':
            return mult(numbers);
        case '/':
            return div(numbers);
    }
}

function sum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum = sum + +numbers[i];
    }
    return sum;
}

function dif(numbers) {
    let dif = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        dif = dif - numbers[i];
    }
    return dif;
}

function mult(numbers) {
    let mult = 1;
    for (let i = 0; i < numbers.length; i++) {
        mult = mult * numbers[i];
    }
    return mult;
}

function div(numbers) {
    let div = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        div = div / numbers[i];
    }
    return div;
}

function showResult(operator, numbers, result) {
    alert(`${numbers.join(operator)} = ${result}`)
}