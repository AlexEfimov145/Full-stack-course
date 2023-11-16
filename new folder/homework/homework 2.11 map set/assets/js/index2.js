const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let set = new Set();

  while (set.size <= 1000) {
    let num = Math.floor(Math.random() * 20) + 1;
    set.add({});
  }
  console.log(set);
});
