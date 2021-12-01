function bonAppetit(bill, k, b) {
  let total = 0;

  for (let i = 0; i < bill.length; i++) {
    total += bill[i];
  }
  const result = (total - bill[k]) / 2;

  if (b - result === 0) console.log("Bon Appetit");
  else console.log(b - result);
}
