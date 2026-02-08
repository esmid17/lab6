const { factorial, fibonacci } = require('./math');

// Pruebas para Factorial
test('Factorial de 5 debe ser 120', () => {
  expect(factorial(5)).toBe(120);
});

test('Factorial de 0 debe ser 1', () => {
  expect(factorial(0)).toBe(1);
});

// Pruebas para Fibonacci
test('Fibonacci de 6 debe ser 8', () => {
  expect(fibonacci(6)).toBe(8);
});

test('Fibonacci de 2 debe ser 1', () => {
  expect(fibonacci(2)).toBe(1);
});