const sortTestHelper = require('./sortTestHelper');

// 选择排序算法
function selectionSort(Arr) {
  for (let i = 0; i < Arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < Arr.length; j++) {
      if (Arr[j] < Arr[minIndex]) {
        minIndex = j;
      }
    }
    [Arr[i], Arr[minIndex]] = [Arr[minIndex], Arr[i]];
  }

  return Arr;
}

const NumArr = sortTestHelper.generateRandomArray(10000, 100000, 200000000);

sortTestHelper.testSort('selectionSort', selectionSort, [NumArr]);

// const NumSort = selectionSort(NumArr);

// console.log(NumSort);