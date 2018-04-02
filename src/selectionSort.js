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

const NumArr = [10,9,8,7,6,5,4,3,2,1];

const NumSort = selectionSort(NumArr);

console.log(NumSort);