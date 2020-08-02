/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const len = nums.length
  if (len <= 1) return nums
  let next = 0
  for(var i = len - 1; i >= 0; i --) { 
    if (nums[i] === 0) {
      ++ next
      nums[len + next - 1] = 0
    }else {
      nums[i + next] = nums[i]
    }
  }
  nums.splice(0, next)
  return nums
};

/**
 * @thought
 * [0,1,3,0,5]
 *  4 5 4 next 0 
 *  3 0 3
 *  3
 */