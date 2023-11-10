/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode.cn/problems/combinations/description/
 *
 * algorithms
 * Medium (77.07%)
 * Likes:    1514
 * Dislikes: 0
 * Total Accepted:    606.9K
 * Total Submissions: 787.4K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 *
 * 你可以按 任何顺序 返回答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 4, k = 2
 * 输出：
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 *
 * 示例 2：
 *
 *
 * 输入：n = 1, k = 1
 * 输出：[[1]]
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (k === 1) {
    const list = [];
    for (let i = 1; i <= n; i++) {
      list.push([i]);
    }
    return list;
  }
  if (n === k) {
    const ele = [];
    for (let i = 1; i <= n; i++) {
      ele.push(i);
    }
    return [ele];
  }

  // 有n
  const list1 = combine(n - 1, k - 1).map((e) => [...e, n]);
  // 无n
  return [...list1, ...combine(n - 1, k)];
};
// @lc code=end
