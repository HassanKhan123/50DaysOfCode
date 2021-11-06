// Plus One

var plusOne = function (digits) {
  var i = digits.length - 1;
  var val = 0;
  var carry = 1;
  while (i >= 0 && carry) {
    val = digits[i] + carry;
    carry = Math.floor(val / 10);
    digits[i] = val % 10;
    i--;
  }
  if (carry) digits.unshift(carry);
  return digits;
};

let res1 = plusOne([4, 3, 2, 1]);

// Diagonal Order

var findDiagonalOrder = function (arr) {
  let ind = 0;
  let colBegin = 0,
    rowBegin = 0;
  let rowMax = arr.length,
    colMax = arr[0].length;
  const res = [],
    stack = [];
  while (rowBegin < rowMax || colBegin < colMax) {
    for (
      let row = rowBegin, col = colBegin;
      row < rowMax && col >= 0;
      row++, col--
    ) {
      if (ind % 2 === 0) {
        stack.push(arr[row][col]);
      } else {
        res.push(arr[row][col]);
      }
    }
    ind++;
    while (stack.length) {
      res.push(stack.pop());
    }
    colBegin++;
    if (colBegin > colMax - 1 && rowBegin < rowMax) {
      colBegin = colMax - 1;
      rowBegin++;
    }
  }
  return res;
};

let res2 = findDiagonalOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
