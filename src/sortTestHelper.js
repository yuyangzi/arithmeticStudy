
// 生成有n个元素的随机数组,每个元素的随机范围为[rangeL, rangeR]
const generateRandomArray = (n, rangeL, rangeR) => {
  let randomArr = [];

  for (let i = 0; i < n; i++) {
    const randomNum = Math.floor(Math.random() * (rangeR - rangeL + 1)) + rangeL;
    randomArr.push(randomNum);
  }

  return randomArr
};


// 测试算法执行时间
const testSort = (fnNname, fn, argument) => {
  const startTime = Date.now();
  const resultArr = fn(...argument);
  const endTime = Date.now();
  console.log(isSort(resultArr));
  console.log(fnNname, (endTime - startTime)/1000);
}

// 测试算法的正确xing
const isSort = (Arr) => {
  for (let i = 0; i < Arr.length - 1; i++) {
    if (Arr[i] > Arr[i + 1]) {
      return false
    }
  }

  return true;
}

module.exports = {
  generateRandomArray,
  testSort,
}