/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
  if (!k) return []
  if( shorter === longer ) return [k * shorter]
  const arr = []

  for (let i = k; i >=0; i --) {
    arr.push( i * shorter + (k - i) * longer)
  }
  return arr
};