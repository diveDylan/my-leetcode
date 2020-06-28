/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const arr = nums1.concat(nums2)
  arr.sort((a, b) => a -b )
  const len = arr.length
  return len % 2 === 0 ? (arr[len /2 ] + arr[len/2 -1]) / 2 : arr[(len - 1 )/ 2]
};
/**
 * 充分利用有序数组减少排序耗时
 * @param {*} nums1 
 * @param {*} nums2 
 */
var findMedianSortedArraysV2 = function(nums1, nums2) {
 
  let m = nums1.length - 1
  let n = nums2.length - 1
  const len = m + n + 2
  let p = len - 1
  while(m >= 0 && n >= 0) {
    nums1[p --] = nums1[m] > nums2[n] ? nums1[m --] : nums2[n --]
  }
  if (n >= 0) {
    nums1.splice(0, n + 1, ...nums2.splice(0, n +1))
  }
  return len % 2 === 0 ? (nums1[len /2 ] + nums1[len/2 -1]) / 2 : nums1[(len - 1 )/ 2]
}
/** TODO: 二分法(Dylan)
 * nums1: [2,3] nums[1]
 * 从nums1遍历
 * i = 0
 */