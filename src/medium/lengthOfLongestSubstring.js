/**
 * @test "abcabcbb" abc
 * @test "pwwkew"  wke
 * @param {string} s
 * @return {number}
 * 看了题解 滑块思想
 */
var lengthOfLongestSubstring = function(s) {
  const len = s.length
  let idx = 0, max = 0
  for(let i = 0; i < len; i ++) {
    while(s.indexOf(s[idx], i) === idx ) {
      idx ++
    }
    max = Math.max(max, idx - i)
  }
  return max
}
/**
 * thinks:
 * const t
 * a: 0 [a] 1
 * b: 1 [ab] 2 3
 * c: 2 [abc] length = 3 []
 * a: 3 [a]
 * b: 4 [ab]
 * c: 5 [abc] length = 3 []
 * pwwkew: 
 * p [p]
 * w [pw] 2 []
 * w [w] 
 * k [wk]
 * e [wke] 3 []
 * dvdf
 * d [d]
 * v [dv] max 2
 * d [vd]
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
