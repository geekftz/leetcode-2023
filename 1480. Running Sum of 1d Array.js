/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let res = [];

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    res.push(sum);
  }

  return res;
};

const nums = [1, 2, 3, 4];

const res = runningSum(nums);
console.log("🚀 --> file: running-sum-of-1d-array.js:22 --> res", res);
