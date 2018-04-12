// 导入插入排序
const insertionSort = require('./insertionSort');

const selectSort = require('./selectionSort');

// 导入测试方法
const sortTestHelper = require('./sortTestHelper');

const randomArr = sortTestHelper.generateNearlyOrderedArray(100000, 10);
// console.log(randomArr);

const randomArr2 = JSON.parse(JSON.stringify(randomArr));

sortTestHelper.testSort('insertionSort2', insertionSort.insertionSort2, [randomArr]);
sortTestHelper.testSort('selectSort',selectSort.selectionSort, [randomArr2]);

// const Arr = [2, 4, 6, 1, 8, 9, 5, 6, 3,7, 8];

// const a = insertionSort.insertionSort2(Arr);

// console.log(a);