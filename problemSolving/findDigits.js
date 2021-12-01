function findDigits(n) {
  var myArr = String(n)
    .split("")
    .map((num) => {
      return Number(num);
    });

  let counter = 0;

  myArr.forEach((num, i) => {
    if (n % num === 0) {
      counter++;

      console.log(n[i]);
    }
  });

  console.log(counter);
}

let n = 124;

console.log(findDigits(n));
