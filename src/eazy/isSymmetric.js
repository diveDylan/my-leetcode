/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true
  function compareTreeNode(left, right) {
      
      if (!left || !right) return left === right
     return left && right && left.val === right.val
      && compareTreeNode(left.left, right.right)
      && compareTreeNode(left.right, right.left)
  }
      
  return  compareTreeNode(root.left, root.right)
  
};