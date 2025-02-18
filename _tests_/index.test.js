const {
  add,
  subtract,
  multiply,
  divide,
  calculate
} = require('../calculator'); // Assuming the original code is in calculator.js

describe('Calculator Functions', () => {
  // Testing add function
  describe('add', () => {
    test('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should handle negative numbers', () => {
      expect(add(-2, 3)).toBe(1);
      expect(add(-2, -3)).toBe(-5);
    });

    test('should handle decimal numbers', () => {
      expect(add(2.5, 3.7)).toBeCloseTo(6.2);
    });
  });

  // Testing subtract function
  describe('subtract', () => {
    test('should subtract two positive numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('should handle negative numbers', () => {
      expect(subtract(-2, 3)).toBe(-5);
      expect(subtract(-2, -3)).toBe(1);
    });

    test('should handle decimal numbers', () => {
      expect(subtract(5.5, 3.2)).toBeCloseTo(2.3);
    });
  });

  // Testing multiply function
  describe('multiply', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    test('should handle negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6);
      expect(multiply(-2, -3)).toBe(6);
    });

    test('should handle decimal numbers', () => {
      expect(multiply(2.5, 3)).toBeCloseTo(7.5);
    });

    test('should handle zero', () => {
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(5, 0)).toBe(0);
    });
  });

  // Testing divide function
  describe('divide', () => {
    test('should divide two positive numbers correctly', () => {
      expect(divide(6, 2)).toBe(3);
    });

    test('should handle negative numbers', () => {
      expect(divide(-6, 2)).toBe(-3);
      expect(divide(-6, -2)).toBe(3);
    });

    test('should handle decimal numbers', () => {
      expect(divide(5.5, 2)).toBeCloseTo(2.75);
    });

    test('should handle division by zero', () => {
      expect(divide(5, 0)).toBe('Error: Division by zero');
    });
  });

  // Testing calculate function
  describe('calculate', () => {
    test('should perform addition correctly', () => {
      expect(calculate('add', 2, 3)).toBe(5);
    });

    test('should perform subtraction correctly', () => {
      expect(calculate('subtract', 5, 3)).toBe(2);
    });

    test('should perform multiplication correctly', () => {
      expect(calculate('multiply', 2, 3)).toBe(6);
    });

    test('should perform division correctly', () => {
      expect(calculate('divide', 6, 2)).toBe(3);
    });

    test('should handle invalid operation', () => {
      expect(calculate('invalid', 2, 3)).toBe('Invalid operation');
    });

    test('should handle division by zero through calculate', () => {
      expect(calculate('divide', 5, 0)).toBe('Error: Division by zero');
    });
  });
});
