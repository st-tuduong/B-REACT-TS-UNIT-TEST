export const checkArray = (array) => {
  const isNumber = array.every((item) => typeof item === 'number');
  if (!Array.isArray(array) || array.length <=1 || !isNumber) {
    return false;
  }
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
};
