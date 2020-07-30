/**
 * @param {number[]} nums
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const len = matrix.length
    if (!len) return 0
    const innerLen = matrix[0].length
    if (!innerLen) return 0
    let dp = Array.from(new Array(len), i => new Array(innerLen).fill(0))
    let max = 0
    for(let i = 0; i < len; i ++) {
      for(let j = 0; j < innerLen; j ++) {
        if (j === 0 || i === 0) {
          dp[i][j] = matrix[i][j]
        } else {
          dp[i][j] = matrix[i][j] === '1' ? Math.min(dp[i -1][j], dp[i-1][j -1], dp[i][j-1]) + 1 : 0
        }
        max = Math.max(max, dp[i][j])
      }
    }
    return max * max
  };
/**
 * @thought
 * [list] <s> --- <e>
 * <s> l     <l-1
 * <e> r     r > [r-1]
 * <s+1> <e-1>也是升序的
 * <s><e>升序的条件 = <s+1><e-1> s < s + 1   <e> > e - 1
 * <s><e>       <s +1 > <e>  s< s +1 || <s> <e-1> e > e -1
 * 
 * i -- j ++
 */