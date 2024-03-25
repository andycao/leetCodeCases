/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 *
 * https://leetcode.cn/problems/ugly-number-ii/description/
 *
 * algorithms
 * Medium (58.42%)
 * Likes:    1126
 * Dislikes: 0
 * Total Accepted:    165.9K
 * Total Submissions: 284.2K
 * Testcase Example:  '10'
 *
 * 给你一个整数 n ，请你找出并返回第 n 个 丑数 。
 *
 * 丑数 就是质因子只包含 2、3 和 5 的正整数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 10
 * 输出：12
 * 解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：1
 * 解释：1 通常被视为丑数。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 1690
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const list = [1];
  const set = new Set([1]);

  let result = 0;
  for (let i = 0; i < n; i++) {
    console.log(list);
    let current = list.shift();
    result = current;
    if (!set.has(current * 2)) {
      set.add(current * 2);
      list.push(current * 2);
    }
    if (!set.has(current * 3)) {
      set.add(current * 3);
      list.push(current * 3);
    }
    if (!set.has(current * 5)) {
      set.add(current * 5);
      list.push(current * 5);
    }
  }

  return result;
};
// @lc code=end
