/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const len = nums.length
  if (len < 1) return len
  let dp = Array.from(new Array(len), i => new Array(len).fill(0))
  let max = 0
  for(let i = len -1; i >= 0; i --) {
      for(let j = i; j < len ; j ++) {
          if (j - i < 1) dp[j][i] = true
          else {
              dp[i][j] = dp[i + 1][j -1] && nums[i] < nums[i + 1] && nums[j] > nums[j-1]
          }
          if (dp[i][j]) {
              max = Math.max(max, i - j + 1)
          }
      }
  }
  return max
};
/**
 * @thought
 * [list] <s> --- <e>
 * <s> l     <l-1
 * <e> r     r > [r-1]
 * <s+1> <e-1>也是升序的
 * <s><e>升序的条件 = <s+1><e-1> s < s + 1   <e> > e - 1
 * <s><e>       <s +1 > <e>  s< s +1 || <s> <e-1> e > e -1
 * 
 * i -- j ++
 */