/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const len = digits.length
  let dp = []
  const digitsMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j','k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
    0: [''],
    1: ['']
  }
  if (len === 0) return dp
  dp = digitsMap[digits[0]]
  if (len === 1) return dp
  
  const getAllDigitsGroup = (cur, next) => cur.reduce((a, b) => a.concat(next.map(digit => b + digit)), [])
  for(let i = 0; i < len - 1; i ++) {
   dp =  getAllDigitsGroup(dp, digitsMap[digits[i + 1]])
  }
  return dp
};


/**
 * 1不代表任何字符 * 2 abc * 3 def * 4 ghi * 5 jkl * 7 mno * 8 pqrs * 9 tuv * 10 wxyz
 * 2 3
 * a b c d e f
 * let i = 0
 * const a = [a, b, c]
 * const next = [b, c, d]
 * [d, e, f]
 * [ad, ae, af, bd, be, bf, ce, cd, cf]
 * 
 */