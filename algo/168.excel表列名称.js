/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 *
 * https://leetcode.cn/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (44.08%)
 * Likes:    658
 * Dislikes: 0
 * Total Accepted:    145.3K
 * Total Submissions: 329.5K
 * Testcase Example:  '1'
 *
 * 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。
 *
 * 例如：
 *
 *
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28
 * ...
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：columnNumber = 1
 * 输出："A"
 *
 *
 * 示例 2：
 *
 *
 * 输入：columnNumber = 28
 * 输出："AB"
 *
 *
 * 示例 3：
 *
 *
 * 输入：columnNumber = 701
 * 输出："ZY"
 *
 *
 * 示例 4：
 *
 *
 * 输入：columnNumber = 2147483647
 * 输出："FXSHRXW"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const match = {
    0: "Z",
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    26: "Z",
  };

  const list = [];
  let rest = columnNumber;
  while (rest >= 26) {
    const more = rest % 26;
    rest = Math.floor(rest / 26);
    list.push(match[more]);
  }

  if (rest > 0) {
    list.push(match[rest]);
  }

  const sss = list.reverse().join('');

  return sss.replace('A0', 'Z');
};
// @lc code=end
