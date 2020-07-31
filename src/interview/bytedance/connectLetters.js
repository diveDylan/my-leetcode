/**
 * ['a', 'b'],
 * ['0', '1']
 * ['A', 'B']
 * 
 * => ['a0A', 'a0B', 'a1A', 'a1B', 'b0A', 'b0B', 'b1A', 'b1B']
 */

 function connectLetter(nums) {
    if (nums.length === 1 ) return nums[0]
    const len = nums.length
    let res = nums[len - 1]
    for(let index= len - 2; index >= 0; index --) {
       res = nums[index].map(i => {
        return res.map(item => '' + i + item)
      }).reduce((a, b) => a.concat(b))
    }
    return res
 }
 connectLetter([['a', 'b'],[0,1], ['A', 'B']])