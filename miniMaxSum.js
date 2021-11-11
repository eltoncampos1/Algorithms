function miniMaxSum(arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  const minSum = sortedArr
    .slice(0, sortedArr.length - 1)
    .reduce((acc, val) => acc + val);

  const maxSum = sortedArr
    .slice(1, sortedArr.length)
    .reduce((acc, val) => acc + val);

  console.log(minSum + " " + maxSum);
}

let arr = [1, 3, 5, 7, 9];

console.log(miniMaxSum(arr));
