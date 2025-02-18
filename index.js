const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

function calculate(operation, a, b) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            return 'Invalid operation';
    }
}

rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        rl.question('Enter the operation (add, subtract, multiply, divide): ', (operation) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            const result = calculate(operation, a, b);
            console.log(`The result is: ${result}`);
            rl.close();
        });
    });
});