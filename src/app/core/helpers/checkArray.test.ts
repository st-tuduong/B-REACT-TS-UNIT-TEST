import { checkArray } from './checkArray';

describe('Test Case Range Array', () => {
  test('Test Case 1', () => {
    expect(checkArray([])).toBeFalsy();
  });
  test('Test Case 2', () => {
    expect(checkArray([1])).toBeFalsy();
  });
  test('Test Case 3', () => {
    expect(checkArray(['1', '2', '3', '4', '5'])).toBeFalsy();
  });
  test('Test Case 4', () => {
    expect(checkArray(['1', '2', '3', 4, 5])).toBeFalsy();
  });
  test('Test Case 5', () => {
    expect(checkArray([undefined, 2, 3, 4, 5])).toBeFalsy();
  });
  test('Test Case 6', () => {
    expect(checkArray([null, 2, 3, 4, 5])).toBeFalsy();
  });
  test('Test Case 7', () => {
    expect(checkArray([undefined, null, 3, 2, 1])).toBeFalsy();
  });
  test('Test Case 8', () => {
    expect(checkArray([55, 400, 3, 2, 100])).toBeFalsy();
  });
  test('Test Case 9', () => {
    expect(checkArray([1, 2, 3, 4, 5])).toBeTruthy();
  });
});
