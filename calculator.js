// calculator.js

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    a = parseFloat(a);
    b = parseFloat(b);
  }
  return a + b;
}

function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    a = parseFloat(a);
    b = parseFloat(b);
  }
  return a - b;
}

function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    a = parseFloat(a);
    b = parseFloat(b);
  }
  return a * b;
}

function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    a = parseFloat(a);
    b = parseFloat(b);
  }
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

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate
};
