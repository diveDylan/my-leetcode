/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const stack = []
  let length = 0
  const len = s.length
  if (len < 2) return 0
  for(let i =0; i < len; i ++) {
    switch(s[i]) {
      case '(':
        stack.push('(')
        break
      case ')': 
        const last = stack.pop()
        if (lase === '(') length = length + 2
        break

    }
  }
  return length
};

/**
 * @thought
 * (() 2
 * (()) 4
 * (()()) 6
 * ()(() 
 */