// Reverse

let reverseString = function (s) {
  let arr = [];
  for (let i = s.length - 1; i >= 0; i--) {
    arr.push(s[i]);
  }

  return arr;
};

let res1 = reverseString(['n', 'a', 's', 's', 'a', 'H']);

// Array Partition I
let arrayPairSum = function (nums) {
  return nums
    .sort((a, b) => a - b)
    .filter((x, index) => index % 2 === 0)
    .reduce((a, b) => a + b);
};

let res2 = arrayPairSum([6, 2, 6, 5, 1, 2]);

// Two Sum II - Input array is sorted

let twoSum = function (numbers, target) {
  let l = numbers.length,
    i = 0,
    j = l - 1;
  let sum = numbers[i] + numbers[j];
  while (sum !== target) {
    sum < target ? i++ : j--;
    sum = numbers[i] + numbers[j];
  }
  return [i + 1, j + 1];
};

let res3 = twoSum([2, 3, 4], 6);

// Minimum Siz Subarray sum

let minSubArrayLen = function (target, nums) {
  let distance = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;
  // left pointer and right pointer defines the window.
  // the goal is to find the smallest window that has a sum of s or larger.
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      distance = Math.min(distance, right - left + 1);
      sum -= nums[left];
      left += 1;
    }
  }

  return distance === Number.MAX_SAFE_INTEGER ? 0 : distance;
};

let res4 = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
