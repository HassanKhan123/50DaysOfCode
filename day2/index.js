// Duplicate Zeros

const duplicateZeroes = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i += 1;
    }
  }
};

duplicateZeroes([1, 0, 2, 3, 0, 4, 5, 0]);

// Merge Sorted Arrays
var merge = function (nums1, m, nums2, n) {
  nums1.length = m;
  nums2.length = n;
  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i]);
  }
  return nums1.sort((a, b) => {
    return a - b;
  });
};

let res = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
console.log(res);

// Remove Elements

let removeElement = function (nums, val) {
  for (i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) nums.splice(i, 1);
  }
  return nums.length;
};

let res1 = removeElement([3, 2, 2, 3], 3);
console.log(res1);

let removeDuplicates = function (nums) {
  // Length of the updated array
  let count = 0;
  // Loop for all the elements in the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is equal to the next element, we skip
    if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
      continue;
    }
    // We will update the array in place
    nums[count] = nums[i];
    count++;
  }
  return count;
};

let res2 = removeDuplicates([1, 1, 2]);
