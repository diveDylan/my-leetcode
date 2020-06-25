/**
 * @description 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * @param {number[]} nums
 * @return {number[][]}
 * 求两个数的和等于当前数
 * 等于的时候推
 */
var threeSum = function(nums) {
  const dp = []
  const len = nums.length
  if (len < 3) return dp
  nums.sort((a, b) => a - b)
  for( var i = 0; i < len; i ++) {
    let l = i + 1
    let r = len - 1
    if (nums[i] > 0) return dp
    if ( i > 0 && nums[i] === nums[i - 1]) continue // 过滤已经计算的数
    while(l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum === 0) {
        dp.push([nums[i], nums[l], nums[r]])
        while( l  < r && nums[l] === nums[l+ 1]) l ++ // 过滤重复的数 
        while( l  < r && nums[r] === nums[r -1]) r-- // 过滤重复的数
        l ++ 
        r --
      } else {
        sum > 0 ? r -- : l ++
      }
      
    }
  }
  return dp
}
/**
 * 注意的点
 * 1、不可重复，slice或者标记下标已使用，出队的概念
 * 2、相加为零情况
 *    2a 三者为0 0 0 伪代码 a = b = c = 0
 *    2b 一个为负，剩下俩个相加为零-这个负数 伪代码 a   b + c = -a
 *        @important 其中2a为2b的边界情况
 *   总结 存在a <= 0    b + c = 0 - a
 * 
 * 扩展成一个dp
 * 
 * 
 */