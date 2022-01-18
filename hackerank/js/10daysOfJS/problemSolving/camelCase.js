function camelcase(s) {
  let counter = 0;

  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      counter++;
    }
  }

  return counter + 1;
}
