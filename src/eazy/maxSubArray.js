/**
 * @description 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @test 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * @param {number[]} nums
 * @return {number}
 * @type error in mind
 * -2 max
 * 1 -1 1 max
 * -3 -2 1 max
 * 4 2 4 max
 * -1 3 4 max
 * 2 5 5 max
 * 1 6 6 max
 * -5 1 6 max
 * 4 5 6 nax
 * 
 */
var maxSubArray = function(nums) {
    let pre = 0, max = nums[0]
    nums.forEach(num => {
      // 取累加的值
      pre = Math.max(pre + num, num)
      max = Math.max(max, pre)
    })
    return max
};
/**
 * mind steps
 * 暴力解法是所有思路的来源
 * -2
 * -2 1 : -1
 * -2 1 -3 : -4
 * -2 1 -3 4 : 0
 * -2 1 -3 4 -1 : -1 1 2 -3 
 *  sum -2 1 -3 4 -1 2 1 -5 4 : 1
 *  双指针
 *  bug: 等于情况移动
 *  max = 0 next = 1
 *   -2 < 4
 *  max = 3 next 1 - -2 = 3
 *  1 < 4
 *  max = 3 next 3 - 1 = 2
 *  -3 <= 4
 *  max =  5 next 2 - -3 = 5
 *  4 = 4 left = right( if(left ++ > right--) next -right )
 * 4 = 4 -1 > -5 right --
 *  max = 5 next 5 - 4 = 1
 *  -5 < 4  
 *  max = 5 next 1 - - =2
 *  2 < 4 
 *  max = 5 necxt 2 -2 = 0
 *  1 < 4  
 * max = 5 next 0 -1 = -1
 *  -5 < 4
 *  max 
 * 
 * 
 * test case2
 * [1,2,-1,-2,2,1,-2,1,4,-5,4]
 * next = 5
 * max = 5
 * 1 4 
 * max 5 next 4
 * 2 4
 * max 5 next 2
 * -1 4
 * max 5 next 3
 * -2 4
 * max 5 next 5
 * 2 4
 * max 5 next 3
 * 1
 * max 5 next 2
 * -2 4
 * max 4 next 4
 * 1 4
 * max 5 next 3
 * max 5 next -1
 * max 5 next 4
 * 
 */

