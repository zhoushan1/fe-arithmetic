// 冒泡排序
// 时间复杂度o(n²)

function bubbleSort(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    // 注意j的长度范围
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 交换位置
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

console.log(bubbleSort([4, 3, 5, 2, 1]))
