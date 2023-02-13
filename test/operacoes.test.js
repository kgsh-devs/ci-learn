const op = require('../src/operacoes');

test('mult 5 * 5 to equal 25', () => {
  expect(op.multiplicar(5, 5)).toBe(25);
});