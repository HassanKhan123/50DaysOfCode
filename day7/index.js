// Spiral Matrix

var spiralOrder = function (matrix) {
  let rowBegin = 0,
    rowEnd = matrix.length - 1,
    colBegin = 0,
    colEnd = matrix[0].length - 1;

  let result = [];
  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    //move right
    for (let i = colBegin; i <= colEnd; i++) {
      result.push(matrix[rowBegin][i]);
    }
    rowBegin++; // mark row as traversed after moving right

    //move down
    for (let i = rowBegin; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--; //mark column as traversed after moving down

    //move left
    if (rowBegin <= rowEnd) {
      for (let i = colEnd; i >= colBegin; i--) {
        result.push(matrix[rowEnd][i]);
      }
    }
    rowEnd--; //mark end row as traversed after moving left

    //move up
    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        result.push(matrix[i][colBegin]);
      }
    }
    colBegin++; //mark begining column as traversed after moving up
  }

  return result;
};

let res = spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

// Pascal triangle

var generate = function (numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  let result = [];
  for (let row = 1; row <= numRows; row++) {
    let arr = [];
    for (let col = 0; col < row; col++) {
      if (col === 0 || col === row - 1) {
        arr.push(1);
      } else {
        arr.push(result[row - 2][col - 1] + result[row - 2][col]);
      }
    }
    result.push(arr);
  }
  return result;
};

let res2 = generate(5);

// Add Binary

var addBinary = function (a, b) {
  // Initialize result
  var result = '';

  // Initialize digit sum
  var s = 0;

  // Traverse both strings starting
  // from last characters
  var i = a.length - 1,
    j = b.length - 1;
  while (i >= 0 || j >= 0 || s == 1) {
    // Comput sum of last
    // digits and carry
    s += i >= 0 ? a.charAt(i).charCodeAt(0) - '0'.charCodeAt(0) : 0;
    s += j >= 0 ? b.charAt(j).charCodeAt(0) - '0'.charCodeAt(0) : 0;

    // If current digit sum is
    // 1 or 3, add 1 to result
    result = String.fromCharCode(parseInt(s % 2) + '0'.charCodeAt(0)) + result;

    // Compute carry
    s = parseInt(s / 2);

    // Move to next digits
    i--;
    j--;
  }

  return result;
};

let res3 = addBinary('1010', '1011');

// Implement strStr()

var strStr = function (haystack, needle) {
  const index = haystack.indexOf(needle);
  return index;
};

let res4 = strStr('hello', 'lll');

// Longest Common Prefix

var longestCommonPrefix = function (a) {
  let size = a.length;
  /* sort the array of strings */
  a.sort();

  /* find the minimum length from first and last string */
  let end = Math.min(a[0].length, a[size - 1].length);

  /* find the common prefix between the first and
         last string */
  let i = 0;
  while (i < end && a[0][i] == a[size - 1][i]) i++;

  let pre = a[0].substring(0, i);
  return pre;
};

let res5 = longestCommonPrefix(['flower', 'flow', 'flight']);
