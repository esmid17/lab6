const sum = require('./sum');

test('Suma 1 + 2 debe ser 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const res = require('./sum');

test('Resta debe ser 0', () => {
  expect(res(2, 2)).toBe(0);
});