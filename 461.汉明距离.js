/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 *
 * https://leetcode.cn/problems/hamming-distance/description/
 *
 * algorithms
 * Easy (81.87%)
 * Likes:    718
 * Dislikes: 0
 * Total Accepted:    288.6K
 * Total Submissions: 352.6K
 * Testcase Example:  '1\n4'
 *
 * 两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。
 *
 * 给你两个整数 x 和 y，计算并返回它们之间的汉明距离。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：x = 1, y = 4
 * 输出：2
 * 解释：
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 * ⁠      ↑   ↑
 * 上面的箭头指出了对应二进制位不同的位置。
 *
 *
 * 示例 2：
 *
 *
 * 输入：x = 3, y = 1
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let a = Number(x).toString(2);
  let b = Number(y).toString(2);
  const len = Math.max(a.length, b.length);

  if (a.length < len) {
    a = new Array(len - a.length).fill("0").join("") + a;
  } else {
    b = new Array(len - b.length).fill("0").join("") + b;
  }
  let num = 0;
  console.log(a, b, len);
  for (let i = 0; i < len; i++) {
    if (a[i] === b[i]) {
    } else {
      num++;
    }
  }
  return num;
};
// @lc code=end
