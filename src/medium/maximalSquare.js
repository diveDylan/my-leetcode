/**
 * @description 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * 4
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const len = matrix.length
  let dp = new Array(len).fill(new Array(len).fill(0))
  let max = 0
  for(let i = 0; i < len; i ++) {
    for(let j = 0; j < len; j ++) {
      if (j === 0 || i === 0) {
        dp[i][j] = matrix[i][j]
      } else {
        dp[i][j] = Math.min(dp[i -1] [j], dp[i-1][j -1], dp[i][j-1]) + 1
      }
      max = Math.max(max, dp[i][j])
    }
  }
  return max
};
/**
 * @mind
 * 1 1       dp[i][j] = dp[i][j+1]    2 * 2
 * 1 1       dp[i+1][j] = dp[i+1][j+1]
 * 3 * 3   1 1 1 1dp[i][j+1] dp[i+1][j+1] leng - 2 4-2
 *         1 1 1 1
 *         1 1 1 1 dp[i][j+1] dp[i+2][j+1]
 *         1 1 1 1
 *  dp[i][j] = Math.min(dp[i -1] [j], dp[i-1][j -1], dp[i][j-1]) + 1
 */    