/**
 * @param {number} k
 * @param {number[]} nums
 * 你可以假设 nums 的长度≥ k-1 且k ≥ 1。
 */

var KthLargest = function(k, nums) {
  this.nums = nums.flat(Infinity).sort((a, b) => a - b).slice(0, k)
  this.index = k - 1

};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
  this.pushWithSort(val)
  return this.nums[this.index]
};

KthLargest.prototype.pushWithSort = function (val) {
  if (val <= this.nums[this.index]) return
  // 二分法
  compareMean(this.nums, val)
  
}

function compareMean(arr, val) {
  let r = arr.length - 1
  let l = 0
  let mean = Math.floor((r + l) / 2)
  while (r - l > 1) {
    if (arr[mean] === val) {
      arr.splice(mean + 1, 0, val)
      return
    }
    else if (arr[mean] > val) {
      l = mean
    } else {
      r = mean
    }
    mean = Math.floor((l + r) / 2)
  }
  arr.splice(r, 0, val)
}

/**
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/