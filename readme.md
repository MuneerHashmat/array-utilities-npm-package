# Array Utilities NPM Package

## Description

This is a simple array utilities package that can be used to perform numerous operations on an array such as sort, remove duplicates, sum of elements etc.

## Installation

```bash
npm install array-utilities-package
```

## Example usage

```Javascript
const {
sortArray,
removeDuplicates,
sumOfArray,
averageOfArray,
maxElement,
minElement,
reverseArray,
filterEven,
filterOdd,
firstNElements,} =  require("array-utilities-package");


const  myArray  = [1, 2, 3, 4, 5, 2, 3, 4];

console.log(sortArray(myArray)); // [1, 2, 2, 3, 3, 4, 4, 5]
console.log(removeDuplicates(myArray)); // [1, 2, 3, 4, 5]
console.log(sumOfArray(myArray)); // 24
console.log(averageOfArray(myArray)); // 3
console.log(maxElement(myArray)); // 5
console.log(minElement(myArray)); // 1
console.log(reverseArray(myArray)); // [4, 3, 2, 5, 4, 3, 2, 1]
console.log(filterEven(myArray)); // [2, 4, 2, 4]
console.log(filterOdd(myArray)); // [1, 3, 5, 3]
console.log(firstNElements(myArray, 3)); // [1, 2, 3]

```
