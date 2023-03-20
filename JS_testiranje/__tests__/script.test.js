const sum = require('../script');
const myObj1 = require('../script');

test('adds 1 + 2 to equal 3', () => {
  expect(sum.sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum.sum(1, 2)).toEqual(3);
});

test('adds 2 + 2 to equal 4', () => {
  expect(sum.sum(2, 2)).toEqual(4);
});

test('broj slova e', () => {
  expect(myObj1.brojSlovaE()).toEqual(3);
});