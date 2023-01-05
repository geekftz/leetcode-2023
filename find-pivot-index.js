/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const len = nums.length;

  let i = 0;
  let j = nums.length - 1;
  let sum = 0;

  if (len <= 2) {
    return -1;
  }

  if (len === 3) {
    if (nums[0] === nums[j]) {
      return 1;
    }

    if (nums[0] + nums[1] === 0) {
      return 2;
    }

    if (nums[2] + nums[1] === 0) {
      return 0;
    }

    return -1;
  }

  while (j !== i) {
    if (sum <= 0) {
      sum += nums[i];
      i++;
    } else {
      sum -= nums[j];
      j--;
    }
  }

  return sum === 0 ? i : -1;
};

const nums = [1, 7, 3, 6, 5, 6];
// const nums = [1, 2, 3];

const res = pivotIndex(nums);
console.log("🚀 --> file: find-pivot-index.js:39 --> res", res);
