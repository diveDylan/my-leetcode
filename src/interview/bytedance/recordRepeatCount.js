/**
 * @description
 * source Array: ['aaa', 'bbb', 'aaa', 'aaa',  111, '111', '111', 111]
 * target Array: ['1aaa', 'bbb', '2aaa', 1111, '1111', '2111', 2111]
 */
 const isNumber = obj => Object.prototype.toString.call(obj) === '[object Number]'
 function recordRepeatCount(array) {
   let stack = new Map()
   let len = array.length 
   if (len <= 1) return array
   for(let i = 0; i < len; i ++) {
     if (stack.has(array[i])) {
       const stackHead = stack.get(array[i])
       if (stackHead.count === 1) {
          array[stackHead.start] =  stackHead.isNum
            ? Number('' + 1 + array[stackHead.start])
            : '' + 1 + array[stackHead.start]
            stackHead.count ++
            console.log(array[i], stackHead)
            stack.set(array[i], stackHead)
          array[i] = stackHead.isNum ? Number('' + 2 + array[i]) :  '' + 2 + array[i]
         
       } else {
        stackHead.count ++
        stack.set(array[i], stackHead)
          array[i] = stackHead.isNum ? Number('' + stackHead.count + array[i])
            :  '' + stackHead.count + array[i]
         
       }
     }else {
      const isNum =  isNumber(array[i])
      stack.set(array[i], {
        isNum,
        count: 1,
        start: i
      })
     }
   }
   return array
 }
 recordRepeatCount(['aaa', 'bbb', 'aaa', 'aaa',  111, '111', '111', 111])