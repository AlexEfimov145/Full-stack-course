function divide() {
  try {
    const num = +prompt("how many pi");
    const pi = Math.PI.toFixed(num);
    alert(pi);
  } catch (err) {
    alert(`error: ${err}`);
  }
  alert("done");
}
divide();
