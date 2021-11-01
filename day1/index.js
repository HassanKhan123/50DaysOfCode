// Given a binary array nums, return the maximum number of consecutive 1's in the array.

const findMaxConsecutiveOnes = function (arr) {
  let count = 0;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) count = 0;
    else {
      count++;
      result = Math.max(result, count);
    }
  }

  return result;
};

let res = findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
console.log(res);

// Find Numbers with Even Number of Digits

var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) count++;
  }
  return count;
};

let res1 = findNumbers([555, 901, 482, 1771]);
console.log(res1);

// Squares of a Sorted Array

var sortedSquares = function (nums) {
  let sortedArr = [];
  for (let i = 0; i < nums.length; i++) {
    sortedArr.push(Math.abs(nums[i] * nums[i]));
  }

  return sortedArr.sort((a, b) => a - b);
};

let res2 = sortedSquares([-4, -1, 0, 3, 10]);
console.log(res2);
