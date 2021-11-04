// Replace Elements with Greatest Element on Right Side

let replaceElements = function (arr) {
  // Initialize the next greatest element
  let max_from_right = arr[arr.length - 1];
  console.log(max_from_right);

  // The next greatest element for the rightmost element
  // is always -1
  arr[arr.length - 1] = -1;
  console.log(arr[arr.length - 1]);

  // Replace all other elements with the next greatest
  for (let i = arr.length - 2; i >= 0; i--) {
    // Store the current element (needed later for updating
    // the next greatest element)
    temp = arr[i];

    // Replace current element with the next greatest
    arr[i] = max_from_right;

    // Update the greatest element, if needed
    if (max_from_right < temp) max_from_right = temp;
  }
  return arr;
};

let res1 = replaceElements([17, 18, 5, 4, 6, 1]);
console.log(res1);

var moveZeroes = function (nums) {
  let count = 0; // Count of non-zero elements

  // Traverse the array. If element encountered is non-
  // zero, then replace the element at index 'count'
  // with this element
  for (let i = 0; i < nums.length; i++)
    if (nums[i] != 0) nums[count++] = nums[i]; // here count is
  // incremented

  // Now all non-zero elements have been shifted to
  // front and 'count' is set as index of first 0.
  // Make all elements 0 from count to end.
  while (count < nums.length) nums[count++] = 0;
};

let res2 = moveZeroes([0, 1, 0, 3, 12]);
console.log(res2);

var sortArrayByParity = function (arr) {
  /* Initialize left and right indexes */
  var left = 0,
    right = arr.length - 1;
  while (left < right) {
    /* Increment left index while
           we see 0 at left */
    while (arr[left] % 2 == 0 && left < right) left++;

    /* Decrement right index while we see
           1 at right */
    while (arr[right] % 2 == 1 && left < right) right--;

    if (left < right) {
      /* Swap arr[left] and arr[right]*/
      var temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return arr;
};

let res3 = sortArrayByParity([3, 1, 2, 4]);
console.log(res3);

// Height CHecker

var heightChecker = function (heights) {
  let count = 0;
  let expected = [...heights];
  for (let i = 1; i < expected.length; i++) {
    if (expected[i - 1] && expected[i] < expected[i - 1]) {
      let tmp = expected[i - 1];
      expected[i - 1] = expected[i];
      expected[i] = tmp;
      i -= 2;
    }
  }

  for (let j = 0; j < heights.length; j++) {
    if (heights[j] !== expected[j]) {
      count += 1;
    }
  }

  return count;
};

let res4 = heightChecker([1, 1, 3, 2, 1]);

// Third maximun number

var thirdMax = function (arr) {
  let [first, second, third] = [-Infinity, -Infinity, -Infinity];
  for (let el of arr) {
    if (el === first || el === second || el === third) {
      continue;
    }
    if (el > first) {
      [first, second, third] = [el, first, second];
      continue;
    }
    if (el > second) {
      [second, third] = [el, second];
      continue;
    }
    if (el > third) {
      third = el;
      continue;
    }
  }
  return third !== -Infinity ? third : first;
};
