function runUserCode() {
  const code = prompt("enter code");
  console.log(code);
  try {
    eval(code);
  } catch (err) {
    console.log(err);
  }
}

