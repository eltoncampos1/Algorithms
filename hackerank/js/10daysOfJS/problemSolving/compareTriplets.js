let a = [1, 2, 3];
let b = [3, 2, 1];

function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  let draw = 0;
  let result = [];

  for (let i = 0; i < a.length; i++) {
    // console.log(a[i], b[i]);

    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    } else {
      draw++;
    }
  }

  result[0] = alice;
  result[1] = bob;

  return result;
}

console.log(compareTriplets(a, b));
