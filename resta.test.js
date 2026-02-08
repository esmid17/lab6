const resta = require('./sum');

test('Resta 5 - 3 debe ser 2', () => {
  expect(resta(5, 3)).toBe(2);
});