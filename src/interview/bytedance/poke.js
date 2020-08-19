/**
 * 魔术师手中有一堆扑克牌，观众不知道它的顺序，接下来魔术师：

  从牌顶拿出一张牌， 放到桌子上
  再从牌顶拿一张牌， 放在手上牌的底部
  如此往复（不断重复以上两步），直到魔术师手上的牌全部都放到了桌子上。

  此时，桌子上的牌顺序为： (牌底) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌顶)。

  问：原来魔术师手上牌的顺序，用函数实现。

 */
/**
 * 
 * @param {array} result 
 */
function orderPoke(result) {
  const arr = new Array(result.length).fill(1).map((i, index) => index)
  const len = result.length
  for(var i = 0; i < arr.length; i++) {
    if (i % 2 === 0 || i === arr.length -1) arr[arr[i]] = result.shift()
    else {
      arr.push(arr[i])
    }
  }
  return arr.slice(0, len)
  
}

orderPoke([1,2,3,4,5,6,7,8,9,10,11,12,13 ])

/**
 * top: 1
 * top2: 
 */