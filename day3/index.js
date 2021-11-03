// Check If N and Its Double Exist
var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let target = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (target === arr[j] * 2 || target === arr[j] / 2) {
        return true;
      }
    }
  }
  return false;
};

let res = checkIfExist([-10, 12, -20, -8, 15]);
console.log(res);

var validMountainArray = function (A) {
  if (A.length < 3) {
    return false;
  }

  let increase = false;
  let decrease = false;

  for (let i = 1; i < A.length; i++) {
    if (A[i] === A[i - 1]) {
      return false;
    }
    if (A[i] > A[i - 1]) {
      // cannot have a increase after decrease
      if (decrease === true) {
        return false;
      }
      increase = true;
    }
    if (A[i] < A[i - 1]) {
      decrease = true;
    }
  }

  if (increase && decrease) {
    return true;
  }
  return false;
};

let res1 = validMountainArray([2, 1]);
console.log(res1);
