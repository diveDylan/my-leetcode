/**
 * ids [1,23,5,78,10, ...] length 100
 
 * @expect function getList get all data by order ids
 * @description 最多同时三个请求发出，请求完全部数据
 * @return [dataId1, dataId23, ....]
 * @mind 滑块思想
 */
function getData(id) {
  return Promise.resolve(id)
}
function getList(ids) {
  const head = ids.slice(0, 3)
  let start = 3
  let list = []
  async function addNext(fn, index) {
    // 执行完加1就好了
    
    const res = await fn()
    list[index] = res
    if (start < 100) {
      addNext(getData(++ start ), start)
    }
  }
  head.map(i =>getData(i) ).forEach(addNext)
  return list
 }

  