/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  const len = nums.length
  if (len < 1) return 0
   // 双指针解法
   let arr = nums.slice()
   nums.sort((a,b) => a - b)
   let l = 0, r = len - 1
   while(nums[l] === arr[l] && l < len - 1) {
     l ++
   }
   if (l === r) return 0
   while (nums[r] === arr[r] && r > l ) {
     r --
   }
  return  r - l + 1 

};

var findUnsortedSubarrayV2 = function(nums) {
  const len = nums.length
  let l = 0, r = - 1, max = nums[0], min = nums[len - 1]
  for(let i = 0; i < len; i ++) {
    if (nums[i] < max) r = i
    else max = nums[i]
    if (nums[len - i - 1] > min) l = len - i - 1
    else min = nums[len - i - 1]
  }
  return r - l + 1

};
/**
 * @THOUGHT
 * [1,3,2,2,2,3] [1,3,1,1,1]
 * [4,2,6,8]
 * 
 * case 1      [1,3,2,2,2,3]
 *      sorted [1,2,2,2,3,3]
 *      compared 0, 1<s> 2 3 4<end> 5
 *        s sorted[i] !== arr[i]
 *        end arr[i] ===sorted[len -1 ] 😣不对
 * case 2       [1,3,1,1,1]
 *       sorted [1,1,1,1,3]
 *               0 1<s> 2 3 4 <end>
 * case 3 [4,2,6,8,5,10]
 *   sorted [2,4,5,6, 8, 10]
 *  0<s> 1<e> 2 3 
 *  start的逻辑正确
 *  end逻辑错误

 *    [1,3,2,2,2,3]      lefts    [3,2]    rEnd [3,2]  left index = rightn index
 *    [1,3,1,1,1]                 [3,1]         [3,1]
 *      [4,2,6,8,5,10]       left [4,2]        [8, 5]     right i 
 * case 4 [4,2,6,8]          left []
 * 双指针
 *  case1 
 *    
 *     s 1  end n - 2
 *  case2 
 *     s 1  end n - 1
 *  case3
 *     s 1    end n -2
 *  case4
 *     s 1    end n -3
 */