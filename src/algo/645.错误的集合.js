/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let a, b;
  let list = new Array(nums.length).fill(false);
  for (let i = 0; i < nums.length; i++) {
    if (list[nums[i] - 1]) {
      a = i;
    } else {
      list[nums[i] - 1] = true;
    }
  }
  console.log(list);
  b = list.findIndex(ele => ele === false);
  return [nums[a], b + 1];
};
// @lc code=end
