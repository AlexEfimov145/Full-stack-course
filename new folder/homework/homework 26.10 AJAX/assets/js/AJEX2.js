(() => {
  document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const reduced = users
      .map(
        (user) => `
    <tr>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.address.city}</td>
        <td>${user.address.street}</td>
        <td>${user.address.zipcode}</td>
        <td>${user.company.name}</td>
    </tr>
    `
      )
      .reduce((acc, tr) => acc + tr, "");
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = reduced;
  });
})();
