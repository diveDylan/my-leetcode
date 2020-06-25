/**
 * @param {string} s
 * @return {string}
 * 最长回文串
 */
var longestPalindrome = function(s) {
  const len = s.length
  if (len < 2) return s
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
 */