const { sum, capitalize, reverseString, calculator, ceaserCipher, analyzeArrow } = require('./sum');


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('world becomes World', () => {
  expect(capitalize('world')).toMatch(/World/);
});

test('world becomes dlrow', () => {
  expect(reverseString('world')).toMatch(/dlrow/);
});

test('1 and 5 should be 6', () => {
  expect(calculator.add(1, 5)).toBe(6);
});

test('1 - 5 should be -4', () => {
  expect(calculator.subtract(1, 5)).toBe(-4);
});

test('10 / 5 should be 2', () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test('3 x 5 should be 15', () => {
  expect(calculator.multiply(3, 5)).toBe(15);
});

test('checking world to match zruog', () => {
  expect(ceaserCipher('world')).toMatch(/zruog/);
  expect(ceaserCipher('zdeslav')).toMatch(/cghvody/);
  expect(ceaserCipher('Zdeslav')).toMatch(/Cghvody/);
  expect(ceaserCipher('Zdeslav!')).toMatch(/Cghvody!/);
});

test('analyzeArrow should return an object with correct properties', () => {
  const array = [1, 2, 3, 4, 5];
  const result = analyzeArrow(array);

  expect(result).toBeDefined();
  expect(typeof result).toBe('object');
  expect(result).toHaveProperty('average', 3);
  expect(result).toHaveProperty('min', 1);
  expect(result).toHaveProperty('max', 5);
  expect(result).toHaveProperty('length', 5);
});

