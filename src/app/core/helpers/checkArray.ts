const isAscending = (arr) => {
  return arr.every((x, i) => {
    return i === 0 || x >= arr[i - 1];
  });
};

export const checkArray = (array) => {
  const isNumber = array.every((item) => typeof item === 'number');
  if (array?.length <= 1 || !isNumber) {
    return false;
  } else {
    return isAscending(array);
  }
};
