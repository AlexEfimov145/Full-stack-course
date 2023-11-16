(() => {
  const button = document.getElementById("button");
  const pElements = document.getElementsByTagName("p");
  button.addEventListener("click", () => {
    setTimeout(() => {
      for (const p of pElements) {
        p.style.backgroundColor = "red";
      }
    }, 1000);
  });
})();
