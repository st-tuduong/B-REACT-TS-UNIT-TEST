export const rangeArray = (array) => {
  const isNumber = array.every((item) => typeof item === 'number');
  if (array?.length <= 1 || !isNumber) {
    return false;
  } else {
    return array.sort((a, b) => a - b);
  }
};
