// let count = document.getElementById("input").value;

const smile = (count) => {
  if (count === 0) return;
  document.write("&#x263A");
  smile(count - 1);
};
