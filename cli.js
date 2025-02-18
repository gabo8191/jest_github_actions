// cli.js
const readline = require('readline');
const { calculate } = require('./calculator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
