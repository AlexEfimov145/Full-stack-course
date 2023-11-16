function num(x) {
  if (x === 0) return;
  let sum = (x * (x + 1)) / 2;

  console.log(`Sum of numbers from 1 to ${x}: ${sum}`);

  num(x - 1);
}
