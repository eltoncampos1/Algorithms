/*
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

const houseArea = (start, end) => {
  let counter = [];
  while (start <= end) {
    counter.push(start);
    start++;
  }

  return counter;
};

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesCounter = 0;
  let orangesCounter = 0;

  for (let i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
      applesCounter++;
    }
  }

  for (let j = 0; j < oranges.length; j++) {
    if (b + oranges[j] <= t && b + oranges[j] >= s) {
      orangesCounter++;
    }
  }

  console.log(applesCounter);
  console.log(orangesCounter);
}

let apples = [2, 3, -4];
let oranges = [3, -2, 3];

countApplesAndOranges(7, 10, 4, 7, apples, oranges);
