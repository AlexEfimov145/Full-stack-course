function num(x) {
  if (x === 0) return;
  console.log(x);
  num(x - 1);
}
