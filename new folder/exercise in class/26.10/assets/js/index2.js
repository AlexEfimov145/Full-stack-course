(() => {
  const usersButton = document.getElementById("usersButton");
  usersButton.addEventListener("click", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    const reduced = users
      .map(
        (user) => `
    <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
    </tr>
    `
      )
      .reduce((acc, tr) => acc + tr, "");
    const usersData = document.getElementById("usersData");
    usersData.innerHTML = reduced;
  });
})();
