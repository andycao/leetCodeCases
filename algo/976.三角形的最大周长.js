/*
 * @lc app=leetcode.cn id=976 lang=javascript
 *
 * [976] 三角形的最大周长
 *
 * https://leetcode.cn/problems/largest-perimeter-triangle/description/
 *
 * algorithms
 * Easy (57.43%)
 * Likes:    256
 * Dislikes: 0
 * Total Accepted:    88.3K
 * Total Submissions: 153.7K
 * Testcase Example:  '[2,1,2]'
 *
 * 给定由一些正数（代表长度）组成的数组 nums ，返回 由其中三个长度组成的、面积不为零的三角形的最大周长 。如果不能形成任何面积不为零的三角形，返回
 * 0。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,1,2]
 * 输出：5
 * 解释：你可以用三个边长组成一个三角形:1 2 2。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,1,10]
 * 输出：0
 * 解释：
 * 你不能用边长 1,1,2 来组成三角形。
 * 不能用边长 1,1,10 来构成三角形。
 * 不能用边长 1、2 和 10 来构成三角形。
 * 因为我们不能用任何三条边长来构成一个非零面积的三角形，所以我们返回 0。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= nums.length <= 10^4
 * 1 <= nums[i] <= 10^6
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {

  nums.sort((a, b) => b - a);
  let max = 0;
  found: for(let i = 0; i < nums.length; i++) {
    const a = nums[i];
    for(let j = i + 1; j < nums.length; j++) {
      const b = nums[j];
      for(let p = j + 1; p < nums.length; p++) {
        const c = nums[p];
        if(c > Math.abs(a - b) && c < a + b) {
          max = Math.max(max, a + b + c);
          break found;
        }
      }
    }
  }

  return max;

};
// @lc code=end

