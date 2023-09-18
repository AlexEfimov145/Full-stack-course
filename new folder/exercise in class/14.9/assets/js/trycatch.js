function divide() {
  try {
    const num = +prompt("how many pi");
    const pi = Math.PI.toFixed(num);
    alert(pi);
  } catch (err) {
    alert(`error: ${err}`);
  } finally {
    alert("finally");
  }
  alert("done");
}
divide();
