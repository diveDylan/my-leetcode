/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * Array Stack
 */
var hasCycle = function(head) {
  const stack = []
  while(head) {
    if (stack.includes(stack)) {
      return false
    } else {
      stack.push(head)
    }
    head = head.next
  }  
};
// Set
var hasCycle1 = function(head) {
  if (!head || !head.next) return false
  const treeSet = new Set()
  while(head) {
    if (treeSet.has(head)) {
      return true
    } else {
      treeSet.add(head)
    }
    head = head.next
  }
  return false
};