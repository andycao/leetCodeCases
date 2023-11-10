/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 *
 * https://leetcode.cn/problems/maximum-number-of-balloons/description/
 *
 * algorithms
 * Easy (68.23%)
 * Likes:    132
 * Dislikes: 0
 * Total Accepted:    60.8K
 * Total Submissions: 89.1K
 * Testcase Example:  '"nlaebolko"'
 *
 * 给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。
 *
 * 字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 * 输入：text = "nlaebolko"
 * 输出：1
 *
 *
 * 示例 2：
 *
 *
 *
 * 输入：text = "loonbalxballpoon"
 * 输出：2
 *
 *
 * 示例 3：
 *
 * 输入：text = "leetcode"
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= text.length <= 10^4
 * text 全部由小写英文字母组成
 *  balloon
 *
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const map = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  };
  for (let s of text) {
    switch (s) {
      case "b":
        map.b += 1;
        break;
      case "a":
        map.a += 1;
        break;
      case "l":
        map.l += 1;
        break;
      case "o":
        map.o += 1;
        break;
      case "n":
        map.n += 1;
        break;
    }
  }
  return Math.floor(Math.min(map.b, map.a, map.l / 2, map.o / 2, map.n));
};
// @lc code=end
