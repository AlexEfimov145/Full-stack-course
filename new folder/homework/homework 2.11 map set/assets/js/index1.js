const button = document.getElementById("button");
button.addEventListener("click", () => {
  const client = new Map();

  client.set(1, { id: 1, firstName: "alex", lastName: "Efimov" });
  client.set(2, { id: 2, firstName: "ssss", lastName: "2" });
  client.set(3, { id: 3, firstName: "ddd", lastName: "3" });
  client.set(4, { id: 4, firstName: "gggg", lastName: "4" });
  client.set(5, { id: 5, firstName: "hhhhh", lastName: "5" });

  for (const key of client.keys()) {
    console.log(key);
  }
  for (const value of client.values()) {
    console.log(value);
  }
  const id = document.getElementById("id").value;
  if (id <= 5 && id != 0) {
    console.log(client.get(parseInt(id)));
  } else {
    console.log("no id in the data base");
  }
});
//////O(n^2)