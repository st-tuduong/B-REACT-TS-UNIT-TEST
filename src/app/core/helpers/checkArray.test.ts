import { checkArray } from './checkArray';

describe('When input is less than 2', () => {
  it('Should be is empty', () => {
    expect(checkArray([])).toBe(false);
  });
  it('Should be is one element', () => {
    expect(checkArray([1])).toBe(false);
  });
});

describe('When input is not array', () => {
  it('Should be is null', () => {
    expect(checkArray([null])).toBe(false);
  });
  it('Should be is undefined', () => {
    expect(checkArray([undefined])).toBe(false);
  });
  it('Should be is string', () => {
    expect(checkArray(['1'])).toBe(false);
  });
  it('Should be is object', () => {
    expect(checkArray({})).toBe(false);
  });
});

describe('When input is greater than or equal to two element and have element is not number', () => {
  it('Should be is string', () => {
    expect(checkArray(['', 1, 2])).toBe(false);
  });
  it('Should be is null', () => {
    expect(checkArray([null, 1, 2])).toBe(false);
  });
  it('Should be is undefined', () => {
    expect(checkArray([undefined, 1, 2])).toBe(false);
  });
  it('Should be is null and undefined', () => {
    expect(checkArray([null, undefined, 3])).toBe(false);
  });
  it('Should be is string and null', () => {
    expect(checkArray(['1', null, 3])).toBe(false);
  });
  it('Should be is string and undefined', () => {
    expect(checkArray(['1', undefined, 2])).toBe(false);
  });
  it('Should be is string, null and undefined', () => {
    expect(checkArray(['1', null, undefined])).toBe(false);
  });
  it('Should be is array', () => {
    expect(checkArray([[], 1, 2])).toBe(false);
  });
});

describe('When input is not increase', () => {
  it('Should be not increase', () => {
    expect(checkArray([1, 2, 1])).toBe(false);
    expect(checkArray([2, 1, 1])).toBe(false);
    expect(checkArray([3, 2, 1])).toBe(false);
  });
});

describe('When input is increase', () => {
  it('Should be increase', () => {
    expect(checkArray([1, 1, 2])).toBe(true);
    expect(checkArray([1, 2, 3])).toBe(true);
  });
});
