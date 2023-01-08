//快速排序
// 时间复杂度，O(nlogn)，不稳定

function quickSort(arr) {
  if (arr.length <= 1) return arr
  let mid = arr[0]
  let left = []
  let right = []
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i]
    if (cur > mid) {
      right.push(cur)
    } else {
      left.push(cur)
    }
  }
  return [].concat(quickSort(left), [mid], quickSort(right))
}

console.log(quickSort([5, 4, 2, 3, 1]))
