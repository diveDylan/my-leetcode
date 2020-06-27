/**
 * @param {string} s
 * @return {string}
 * 最长回文串
 */
var longestPalindrome = function(s) {
  const len = s.length
  const dp = new Array(len).fill([]).map(n => new Array(len))
  let res = ''
  if (len < 2) return len
  for(var i = len - 1; i >= 0; i --) {
    for(var j = i; j < len; j ++) {
      dp[i][j] = !!(s[i] === s[j] &&( j - i < 2 || dp[i + 1][j-1]))
      if ( dp[i][j] && j + 1 - i < res.length ) res = s.substring(i, j + 1)
    }
  }
  return res
};

/**
 * thinks mind
 * s [0]
 * sb  0-1  l < r [0,1]
 * sbs 0-2  [0,2] [1] && [0] = [2]
 * sbbs 0-3  [0, 3] [1,2] && [0] = [3]
 * sbabs 0-4 [0, 4] [1, 3] && [0] = [4]
 * sbabss 0-5 [0, 5] [1, 4] && [0] = [5]
 * sasssa [1, 5] [1] = [5] && [2, 4]
 * [i, j] [i] = [j] && dp[i + 1][j-1]
 * 
 * i = n -1
 * j = 0                                 
 * dp[n-1][0] = s[n-1] === s[j]      i -j < 2 || dp[n -2][j + 1]
 *                          [n - 2] [1]
 */