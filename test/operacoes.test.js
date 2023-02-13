const op = require('../src/operacoes');

test('5 + 5 = 10', () => {
  expect(op.somar(5, 5)).toBe(10);
});

test('5 - 5 = 0', () => {
  expect(op.subtrair(5, 5)).toBe(0);
});

test('5 * 5 = 25', () => {
  expect(op.multiplicar(5, 5)).toBe(25);
});

test('5 / 5 = 1', () => {
  expect(op.dividir(5, 5)).toBe(1);
});