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
 */
var isPalindrome = function(head) {
     const cur = head
     const stack = []
     while(cur) {
       stack.push(cur)
       cur = cur.next
     }
     while(stack.length > 0) {
       if (stack.pop().val !== head.val) return false
       head = head.next
     }
     return true
};