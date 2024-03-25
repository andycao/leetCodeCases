/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 *
 * https://leetcode.cn/problems/word-pattern/description/
 *
 * algorithms
 * Easy (44.52%)
 * Likes:    619
 * Dislikes: 0
 * Total Accepted:    151.5K
 * Total Submissions: 340.2K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。
 *
 * 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。
 *
 *
 *
 * 示例1:
 *
 *
 * 输入: pattern = "abba", s = "dog cat cat dog"
 * 输出: true
 *
 * 示例 2:
 *
 *
 * 输入:pattern = "abba", s = "dog cat cat fish"
 * 输出: false
 *
 * 示例 3:
 *
 *
 * 输入: pattern = "aaaa", s = "dog cat cat dog"
 * 输出: false
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= pattern.length <= 300
 * pattern 只包含小写英文字母
 * 1 <= s.length <= 3000
 * s 只包含小写英文字母和 ' '
 * s 不包含 任何前导或尾随对空格
 * s 中每个单词都被 单个空格 分隔
 *
 *
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const list1 = pattern.split("");
  const list2 = s.split(" ");
  if (list1.length !== list2.length) {
    return false;
  }
  const map = new Map();
  const setValue = new Set();
  for (let i = 0; i < list1.length; i++) {
    if (map.has(list1[i])) {
      if (map.get(list1[i]) === list2[i]) {
      } else {
        return false;
      }
    } else {
      if (setValue.has(list2[i])) {
        return false;
      } else {
        map.set(list1[i], list2[i]);
        setValue.add(list2[i]);
      }
    }
  }

  return true;
};
// @lc code=end
