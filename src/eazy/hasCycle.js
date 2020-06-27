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
      return true
    } else {
      stack.push(head)
    }
    head = head.next
  }  
  return false
};
// Set
var hasCycle1 = function(head) {
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
// weakMap
var hasCycle = function(head) {
  const treeMap = new WeakMap()
  while(head) {
    if (treeMap.has(head)) {
      return true
    } else {
      treeMap.set(head, true)
    }
    head = head.next
  }
  return false
};
