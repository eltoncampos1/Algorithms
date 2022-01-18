function plusMinus(arr) {
  let positive = [];
  let negative = [];
  let zeros = [];

  arr.forEach((int) => {
    if (int > 0) {
      positive.push(int);
    } else if (int === 0) {
      zeros.push(int);
    } else {
      negative.push(int);
    }
  });

  const toFixed = (num) => {
    return parseFloat(num).toFixed(6);
  };

  const positiveRatios = toFixed(positive.length / arr.length);
  const negativeRatios = toFixed(negative.length / arr.length);
  const zerosRatios = toFixed(zeros.length / arr.length);

  console.log(positiveRatios);
  console.log(negativeRatios);
  console.log(zerosRatios);
}

let arr = [1, 1, 0, -1, -1];

plusMinus(arr);
