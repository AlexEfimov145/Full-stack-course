function num(x) {
  if (x === 0 || x === 1) {
    return 1; // Base case: factorial of 0 and 1 is 1
  } else {
    let result = x * num(x - 1);
    console.log(result);
    return result;
  }
}
