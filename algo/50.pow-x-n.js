/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 *
 * https://leetcode.cn/problems/powx-n/description/
 *
 * algorithms
 * Medium (37.99%)
 * Likes:    1254
 * Dislikes: 0
 * Total Accepted:    402.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '2.00000\n10'
 *
 * 实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，x^n^ ）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：x = 2.00000, n = 10
 * 输出：1024.00000
 *
 *
 * 示例 2：
 *
 *
 * 输入：x = 2.10000, n = 3
 * 输出：9.26100
 *
 *
 * 示例 3：
 *
 *
 * 输入：x = 2.00000, n = -2
 * 输出：0.25000
 * 解释：2^-2 = 1/2^2 = 1/4 = 0.25
 *
 *
 *
 *
 * 提示：
 *
 *
 * -100.0 < x < 100.0
 * -2^31 <= n <= 2^31-1
 * n 是一个整数
 * 要么 x 不为零，要么 n > 0 。
 * -10^4 <= x^n <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n >= 0) {
    return multiTimes(x, n);
  } else {
    return 1 / multiTimes(x, -n);
  }

  function multiTimes(x, n) {
    if (n === 0) {
      return 1;
    }
    if (n === 1) {
      return x;
    }

    if (n % 2 === 0) {
      const a = multiTimes(x, Math.floor(n / 2));
      return a * a;
    } else {
      const a = multiTimes(x, Math.floor(n / 2));
      return a * a * x;
    }
  }
};
// @lc code=end
