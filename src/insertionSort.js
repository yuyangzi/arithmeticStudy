// 插入排序算法
const insertionSort = (Arr) => {
  for (let i = 1; i < Arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (Arr[j] < Arr[j - 1]) {
        [Arr[j], Arr[j - 1]] = [Arr[j - 1], Arr[j]];
      } else {
        break;
      }
    }
  }
  return Arr;
}

module.exports = {
  insertionSort,
}