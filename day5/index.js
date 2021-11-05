var findDisappearedNumbers = function (arr) {
  let nums = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(i + 1)) {
      nums.push(i + 1);
    }
  }

  return nums;
};

let res = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);

// Pivot Problem

var pivotIndex = function (numbers) {
  for (var i = 0; i < numbers.length; i++) {
    var leftSum = sum(numbers.slice(0, i));
    var rightSum = sum(numbers.slice(i + 1));

    if (leftSum === rightSum) {
      return i;
    }
  }

  // No pivot found
  return -1;
};

function sum(numbers) {
  return numbers.reduce(function (acc, current) {
    return acc + current;
  }, 0);
}

// Largest Number At Least Twice of Others
var dominantIndex = function (nums) {
  let maxIndex = 0;
  for (let i = 0; i < nums.length; ++i)
    if (nums[i] > nums[maxIndex]) maxIndex = i;

  // Returns -1 if the
  // max element is not
  // twice of the i-th
  // element.
  for (let i = 0; i < nums.length; ++i)
    if (maxIndex != i && nums[maxIndex] < 2 * nums[i]) return -1;

  return maxIndex;
};
