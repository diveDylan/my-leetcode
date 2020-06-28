var convertBiNode = function(root) {
  if (!root) return null
  let preNode = new TreeNode(0)
  let res = preNode
  const dps = root => {
      if (!root) return null
      dps(root.left)
      root.left = null
      preNode.right = root
      preNode = root
      dps(root.right)
  }
  dps(root)
  return res.right
}