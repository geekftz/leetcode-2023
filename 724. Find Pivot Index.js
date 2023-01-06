/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = 0;
  const total = nums.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (total - sum - nums[i] === sum) {
      return i;
    }

    sum += num;
  }

  return -1;
};

const nums = [1, 7, 3, 6, 5, 6];

const res = pivotIndex(nums);
console.log("🚀 --> file: find-pivot-index.js:39 --> res", res);
