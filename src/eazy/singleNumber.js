/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber1 = function(nums) {
  return nums.filter(i => nums.indexOf(i) === nums.lastIndexOf(i))[0]
};
// set
var singleNumber2 = function (nums) {
  const s = new Set(0)
  const len = nums.length 
  if (len < 2) return nums[0]
  for(let i = 0; i < len; i ++) {
    if (s.has(nums[i])) {
      s.delete(nums[i])
    } else {
      s.add(nums[i])
    }
  }
  return s.values.next().value
}
/**
 * 位运算符   二进制
 *
 * 0 ^ 1 = 1  0    1  = 1
 * 1 ^ 1 = 0  1    1  = 0
 * 1 ^ 2 = 3  1    10 = 11
 * 3 ^ 4 = 3   11   100 = 11
 * 3 ^ 2 = 1  11    10 = 1
 * 1 ^ 4 = 5   001   100 =  101
 * [1,2,3,1,2,3,4]
 * 1 ^ 0 = 1
 * 2 ^ 1 =3
 * 3 ^ 3 = 0
 * 1 ^ 0 = 1
 * 2 ^ 1 = 3
 * 3 ^ 3 = 0     100 11 = 111 4 2 
 * @param {*} nums 
 * nums[i] ^ 0 => nums[i]
 * nums[i] ^ nums[i] = 0
 * XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
 */
var singleNumber3 = function (nums) {
  let res = 0
  for(var i = 0; i < len; i ++) {
    res ^= nums[i]
  }
  return res
}

/**
 * mind
 * 0 1 0 1 3
 * 3
 * set [0,1,3]
 * 默认其他元素会有两个
 * 利用栈
 * [2,2,1]
 * 2 [2]
 * 2 []
 * 3 [3]
 * 1 [3,1]
 * 3 [1]
 * 4 [1,4]
 * 4
 */