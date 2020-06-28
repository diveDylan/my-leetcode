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