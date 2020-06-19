/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root || root.val === null ) return 0
    function addDep(root, dep) {
      if ( !root || root.val === null || (root.left === null && root.right === null)) return dep
      else {
           dep++
          return  Math.max(addDep(root.left, dep),addDep(root.right, dep) )
      }
    }
    return addDep(root, 1)
  };