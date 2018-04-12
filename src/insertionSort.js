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

// 优化后的插入排序,对于近乎排序的数组排序.十分快速
const insertionSort2 = (Arr) => {
  for (let i = 1; i < Arr.length; i++) {
    const e = Arr[i];
    let j;
    for (j = i; j > 0; j--) {
      if (Arr[j - 1] > e) {
        Arr[j] = Arr[j - 1];
      } else {
        break
      }
    }
    Arr[j] = e;
  }
  return Arr;
}

module.exports = {
  insertionSort,
  insertionSort2
}