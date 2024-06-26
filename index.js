const sortArray = (arr) => arr.slice().sort((a, b) => a - b);

const removeDuplicates = (arr) => [...new Set(arr)];

const sumOfArray = (arr) => arr.reduce((sum, num) => sum + num, 0);

const averageOfArray = (arr) => sumOfArray(arr) / arr.length;

const maxElement = (arr) => Math.max(...arr);

const minElement = (arr) => Math.min(...arr);

const reverseArray = (arr) => arr.slice().reverse();

const filterEven = (arr) => arr.filter((num) => num % 2 === 0);

const filterOdd = (arr) => arr.filter((num) => num % 2 !== 0);

const firstNElements = (arr, n) => arr.slice(0, n);

module.exports = {
  sortArray,
  removeDuplicates,
  sumOfArray,
  averageOfArray,
  maxElement,
  minElement,
  reverseArray,
  filterEven,
  filterOdd,
  firstNElements,
};
