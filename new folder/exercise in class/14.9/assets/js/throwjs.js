function divide(a, b) {
  if (b === 0) {
    throw new Error("cannot devide ");
  }

  return a / b;
}

function userDivide() {
  const a = +prompt("divide what?");
  const b = +prompt("divide in?");
  try {
    const result = divide(a, b);
    console.log(`${a} / ${b} = ${result}`);
  } catch (err) {
    console.log(err.message);
  }
}
