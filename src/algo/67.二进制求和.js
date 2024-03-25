/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode.cn/problems/add-binary/description/
 *
 * algorithms
 * Easy (52.90%)
 * Likes:    1099
 * Dislikes: 0
 * Total Accepted:    344.8K
 * Total Submissions: 651.8K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入:a = "11", b = "1"
 * 输出："100"
 *
 * 示例 2：
 *
 *
 * 输入：a = "1010", b = "1011"
 * 输出："10101"
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= a.length, b.length <= 10^4
 * a 和 b 仅由字符 '0' 或 '1' 组成
 * 字符串如果不是 "0" ，就不含前导零
 *
 *
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = "";
  let mark = 0;
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const count =
      Number(a.charAt(a.length - 1 - i)) +
      Number(b.charAt(b.length - 1 - i)) +
      mark;
    if (count === 0) {
      result = "0" + result;
    } else if (count === 1) {
      mark = 0;
      result = "1" + result;
    } else if (count === 2) {
      mark = 1;
      result = "0" + result;
    } else if (count === 3) {
      mark = 1;
      result = "1" + result;
    }
  }
  if (mark === 1) {
    result = "1" + result;
  }

  return result;
};
// @lc code=end
