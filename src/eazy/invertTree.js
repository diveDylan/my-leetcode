/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  return revertLeftRight(root)
};

function revertLeftRight(tree) {
  if (!tree) return 
  const { left, right } = tree
  tree.left = right ? revertLeftRight(right) : right
  tree.right = left ? revertLeftRight(left) : left
  return tree
}