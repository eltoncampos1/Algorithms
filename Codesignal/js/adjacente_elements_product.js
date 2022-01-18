function solution(inputArray) {
    const multiply = (a, b) => a * b;
    
  let biggest = multiply(inputArray[0], inputArray[1]);

  for (let i = 0; i < inputArray.length; i++) {
    let next = inputArray[i + 1];

    if (multiply(inputArray[i], next) > biggest) {
      biggest = multiply(inputArray[i], next);
    }
  }
  return biggest;
}