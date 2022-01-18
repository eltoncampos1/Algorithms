function utopianTree(n) {
  let cycle = 1;
  let growth = 1;

  for (cycle; cycle <= n; cycle++) {
    if (cycle % 2 !== 0) {
      growth *= 2;
    }

    if (cycle % 2 === 0) {
      growth++;
    }
  }

  return growth;
}

console.log(utopianTree(2));
