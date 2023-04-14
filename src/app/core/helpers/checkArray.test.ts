import { checkArray } from './checkArray';

describe('Should be false', () => {
  it('Case empty array', () => {
    expect(checkArray([])).toBe(false);
  });
  it('Case array have one element', () => {
    expect(checkArray([1])).toBe(false);
  });
  it('Case array have one element is Null', () => {
    expect(checkArray([null])).toBe(false);
  });
  it('Case array have one element is Undefined', () => {
    expect(checkArray([undefined])).toBe(false);
  });
  it('Case array have one element is String', () => {
    expect(checkArray(['1'])).toBe(false);
  });
  it('Case have String empty in array', () => {
    expect(checkArray(['', 1, 2])).toBe(false);
  });
  it('Case have Null in array', () => {
    expect(checkArray([null, 1, 2])).toBe(false);
  });
  it('Case have Undefined in array', () => {
    expect(checkArray([undefined, 1, 2])).toBe(false);
  });
  it('Case have Null and Undefined in array', () => {
    expect(checkArray([null, undefined, 3])).toBe(false);
  });
  it('Case have String and Null in array', () => {
    expect(checkArray(['1', null, 3])).toBe(false);
  });
  it('Case have String and Undefined in array', () => {
    expect(checkArray(['1', undefined, 2])).toBe(false);
  });
  it('Case have String, Null and Undefined in array', () => {
    expect(checkArray(['1', null, undefined])).toBe(false);
  });
  it('Case have String, Null and Undefined in array', () => {
    expect(checkArray(['1', null, undefined])).toBe(false);
  });
  it('Case have number is duplicate in first array', () => {
    expect(checkArray([1, 1, 2])).toBe(false);
  });
  it('Case have number is duplicate in first and last array', () => {
    expect(checkArray([1, 2, 1])).toBe(false);
  });
  it('Case have number is duplicate in last array', () => {
    expect(checkArray([2, 1, 1])).toBe(false);
  });
  it('Case array is Number and Ascending', () => {
    expect(checkArray([3, 2, 1])).toBe(false);
  });
});
describe('Should be True', () => {
  it('Case array is Number and Ascending', () => {
    expect(checkArray([1, 2, 3])).toBe(true);
  });
});
