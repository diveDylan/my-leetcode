/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let result = new ListNode(null)
  let res = result.next
  let pre = 0
  while(l1 || l2 ) {
    const p1 = l1 && l1.val || 0
    const p2 = l2 && l2.val || 0
    const val = p1 + p2 + pre
    let pre  = Math.floor(val / 10)
    res.val = val %  10
    res.next = new ListNode()
    res = res.next
  }
  if (pre) res.next = new ListNode(pre)
  return result.next
};