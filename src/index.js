// 导入插入排序
const insertionSort = require('./insertionSort');

const selectSort = require('./selectionSort');

// 导入测试方法
const sortTestHelper = require('./sortTestHelper');

const randomArr = sortTestHelper.generateRandomArray(10000, 10000, 1000000);

const randomArr2 = JSON.parse(JSON.stringify(randomArr));

sortTestHelper.testSort('insertionSort', insertionSort.insertionSort, [randomArr]);
sortTestHelper.testSort('selectSort',selectSort.selectionSort, [randomArr2]);