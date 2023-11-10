/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode.cn/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (49.63%)
 * Likes:    2127
 * Dislikes: 0
 * Total Accepted:    721.7K
 * Total Submissions: 1.5M
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18], [2,3], [11,13]]'
 *
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi]
 * 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 *
 * 示例 2：
 *
 *
 * 输入：intervals = [[1,4],[4,5]]
 * 输出：[[1,5]]
 * 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= intervals.length <= 10^4
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 先排序
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];

  for (let i = 0; i < intervals.length; i++) {
    // console.log("to", i);
    let current = intervals[i];
    let top = result.pop();
    if (!top) {
      result.push(current);
    } else {
      const merged = mergeArray(current, top);
      if (merged) {
        result.push(merged);
      } else {
        result.push(top);
        result.push(current);
      }
    }
  }

  return result;

  function mergeArray(a, b) {
    if (!(a[1] < b[0] || b[1] < a[0])) {
      return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
    } else {
      return false;
    }
  }
};
// @lc code=end
