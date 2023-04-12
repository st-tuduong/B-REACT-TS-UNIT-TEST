import { rangeArray } from './rangeArray';

describe('Test Case Range Array', () => {
  test('Test Case 1', () => {
    expect(rangeArray([])).toBeFalsy();
  });
  test('Test Case 2', () => {
    expect(rangeArray(['1', '2', '3', '4', '5'])).toBeFalsy();
  });
  test('Test Case 3', () => {
    expect(rangeArray(['1', '2', '3', 4, 5])).toBeFalsy();
  });
  test('Test Case 4', () => {
    expect(rangeArray([5, 4, 3, 2, 1])).toBeTruthy();
  });
  test('Test Case 5', () => {
    expect(rangeArray([undefined, 2, 3, 4, 5])).toBeFalsy();
  });
  test('Test Case 6', () => {
    expect(rangeArray([null, 2, 3, 4, 5])).toBeFalsy();
  });
  test('Test Case 7', () => {
    expect(rangeArray([undefined, null, 3, 2, 1])).toBeFalsy();
  });
  test('Test Case 8', () => {
    expect(rangeArray([1, 2, 3, 4, 5])).toBeTruthy();
  });
  test('Test Case 9', () => {
    expect(rangeArray([1])).toBeFalsy();
  });
});
