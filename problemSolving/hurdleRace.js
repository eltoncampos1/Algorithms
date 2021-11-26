function hurdleRace(k, height) {
  let potion = 0;
  const sortArr = height.sort((a, b) => a - b);
  let maxHeight = sortArr[height.length - 1];

  while (k < maxHeight) {
    potion++;
    k++;
  }

  return potion;
}
