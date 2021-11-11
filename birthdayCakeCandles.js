function birthdayCakeCandles(candles) {
  let maxCandles = 0;

  const sortedArr = candles.sort((a, b) => a - b);

  const maxvalue = sortedArr[sortedArr.length - 1];
  sortedArr.forEach((candle) => {
    if (candle === maxvalue) {
      maxCandles++;
    }
  });

  return maxCandles;
}

let candles = [3, 2, 1, 3];

console.log(birthdayCakeCandles(candles));
