(() => {
  const button = document.getElementById("button");
  button.addEventListener("click", async () => {
    const input = document.getElementById("input").value;
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${input}`
      );
      const user = await response.json();
      const output = document.getElementById("output");
      output.innerHTML = `
            <h3>User</h3>
            <p>${user.name}</p>
            <p>${user.username}</p>
            <p>${user.email}</p>
            <p>${user.phone}</p>
            <p>${user.address.city}</p>
            <p>${user.address.street}</p>
            <p>${user.address.zipcode}</p>
            <p>${user.company.name}</p>
          `;
    } catch (error) {
      alert(error.message);
    }
  });
})();
