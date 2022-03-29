const operation = prompt('Please, write a mathematical operation.')
const firstNumber = +prompt('Please, write a first number.');
const secondNumber = +prompt('Please, write a second number.');

if ( isNaN(firstNumber) || isNaN(secondNumber)) {
    alert ('You did not write a number.');
} else  switch(operation) {
    case '+':
        alert(`${firstNumber} + ${secondNumber} = ` + (firstNumber + secondNumber) );
        break;
    case '-':
        alert(`${firstNumber} - ${secondNumber} = ` + (firstNumber - secondNumber) );
        break;
    case '*':
         alert(`${firstNumber} * ${secondNumber} = ` + (firstNumber * secondNumber) );
        break;
    case '/':
        alert(`${firstNumber} / ${secondNumber} = ` + (firstNumber / secondNumber) );
        break;
    }
