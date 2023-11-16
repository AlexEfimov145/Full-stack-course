function num(x) {
  if (x === 0) return;
  if (x % 7 === 0 || x % 10 === 7) console.log(x);
  num(x - 1);
}
