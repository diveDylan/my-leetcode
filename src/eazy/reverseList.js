/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let pre = null
  while(head) {
    let cur = head
    cur.val = head.val
    head = head.next
    cur.next = pre
    pre = cur
  }
  return pre
};