
const log = log => {
  console.log(log, Date.now())
}
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const subFlow = createFlow([() => delay(1000).then(() => log("c"))]);


createFlow([
  () => log("a"),
  () => log("b"),
  subFlow,
  [() => delay(1000).then(() => log("d")), () => log("e")],
]).run(() => {
  log('done')
})
/**
 * 
 * @param {array} arr flow list
 * @return {object} [props] run function
 */
function createFlow(arr) {
  let flow = arr.map(i => {
    if (i.flow) {
      i = i.flow
    }
    return i
  })
  return {
    flow,
    run: function(fn) {
      fn && flow.push(fn)
      task(flow)
    }
  }
}

function task(arr) {
  return new Promise(async(resolve, reject) => {
   if (Array.isArray(arr)) {
     for(let i = 0; i < arr.length; i ++) {
       console.log(arr[i])
       if (Array.isArray(arr[i])) await task(arr[i])
       else await arr[i]()
     }
   }else {
     await arr()
   }
   resolve()
   })
}


// 需要按照 a,b,延迟1秒,c,延迟1秒,d,e, done 的顺序打印

// flow 是指一系列 effects 组成的逻辑片段。
// flow 支持嵌套。
// effects 的执行只需要支持串行
