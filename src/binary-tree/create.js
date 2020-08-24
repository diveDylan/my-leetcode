// 数组方式实现一个二叉树
/**
 *        A0 0 
 *       B1       a2   1  21-1 
 *      C3 b4   c5 d6 3 2
 *     D7 e8 F
 *    E
 * @description 创建满二叉树
 */
function createFullTree() {
  const treeNode = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q']
  let arr = [], index = 0
  while(treeNode.length > 0) {
    arr[index] = treeNode.shift()
    index ++
  }
  return arr
}


/**
 * @description 创建左二叉树
 * 满树每一次的节点树 1: 1 2: 4 -1  3: 4 x 2 
 *  root 0 2* 0 -1 depeth 1 2 ^ 1 - 2
 * left 1:  2^1  -1 right 2: 2^2 - 2      2
 * left: 3: 2* 2  -1 right: 2 ^ 3 - 2      3
 * left: 7: 2^3 - 1                        4
 */
function createLeftTree() {
  const treeNode = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 
  'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z']
  let arr = [], index = 0
  // arr[0] = treeNode[0]
  let depth = 0
  while (index <= treeNode.length) {
    if (index == Math.pow(2, depth) - 1) {
      arr[index] = treeNode[index]
      depth ++
    } else {
      arr[index] = 0 // 0作为空位标记
    }
    index ++
  }
  return arr
}
/**
 * 
 * @param {*} direction 方向 enum: left | right
 */
function createByDirection(direction) {
  const treeNode = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 
  'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z']
  let arr = [], index = 0
  const isLeft = direction === 'left'
  let depth = isLeft ? 0 : 1
  const cutSpace = isLeft ? 1 : 2
  while (index <= treeNode.length) {
    if (index === Math.pow(2, depth) - cutSpace) {
      arr[index] = treeNode[index]
      depth ++
    } else {
      arr[index] = 0 // 0作为空位标记
    }
    index ++
  }
  return arr
}

// 链表方式实现一个树 左右指针和value
class ListNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left 
    this.right = right
  }
}

function createFullTree(tree) {
  const treeNode = tree ||  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 
  'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z']
  const head = new ListNode(treeNode[0])
  let next = 0
  function addNode(arr ) {
    let nextArr = []
    arr.forEach( item => {
    
      item.left = new ListNode(treeNode[++next])
      item.right = new ListNode(treeNode[++next])
      item.left.val ? nextArr.push(item.left) : item.left = null
      item.right.val ? nextArr.push(item.right) : item.right = null
    })
    if (next <treeNode.length) {
      addNode(nextArr)
    }
    
  }

  addNode([head])
  return head
}


// 先序遍历
function preOrder(tree) {
  if(tree === null) return;
  console.log(tree.val)
  preOrder(tree.left)
  preOrder(tree.right)

}