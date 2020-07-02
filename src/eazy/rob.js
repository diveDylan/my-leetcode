/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length
  if (!len) return 0
  if (len < 3) return Math.max.apply(null, nums)
  const maxMap = {}
  let max = 0;
  for(let i = 0; i < len; i ++) {
     if(i < 2) {
      maxMap[i] = Math.max(max, nums[i])
     }else {
       maxMap[i] = Math.max(maxMap[i - 2] + nums[i], maxMap[i - 1] )
     }
     max = Math.max(maxMap[i], max)
  }
  return max
};

/**
 * thought
 * @mind 自己没有细分步骤画图。临近问题，非为两种结果，选和不选的计算
 * 1 2 3 1 2
 * 1家最大   1  res0
 * 2家    i<1>  res0
 *        i<0>
 *         res1
 * 3家   偷第三家   res0 + i<2>
 *      不偷    max(1, 2)   res1
 *      结果   
 * 4家   偷第四家   max(1,2) + i<3> res1 + i<3>
 *      不投第四家  res2
 * 5家   偷第五家   res2 + i<4>
 * 
 * i > 1
 * max(dp[i  -2] + i, dp[i - 1])
 */