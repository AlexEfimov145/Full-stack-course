(() => {
  const button = document.getElementById("button");
  button.addEventListener("click", async () => {
    const response = await fetch(`https://reqres.in/api/users`);
    // const users = await response.json();
    const { data: users } = await response.json();

    const output = document.getElementById("output");

    users.forEach((user) => {
      output.innerHTML += `
         <p>First Name: ${user.first_name}</p>
         <p>Last Name: ${user.last_name}</p>
         <p>Email: ${user.email}</p>
         <img src = "${user.avatar}">
         <hr>
       `;
    });
  });
})();
