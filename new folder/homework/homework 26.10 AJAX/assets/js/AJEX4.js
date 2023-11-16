(() => {
    //user options push to html
  document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const select = document.getElementById("select");

    users.forEach((user) => {
      const option = document.createElement("option");
      option.value = user.id;
      option.textContent = user.name;
      select.appendChild(option);
    });
    //selected user data push to html
    select.addEventListener("change", async () => {
      const selectedOption = select.options[select.selectedIndex];
      const userId = selectedOption.value;

      if (userId) {
        const responseData = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const user = await responseData.json();
        const output = document.getElementById("output");
        output.innerHTML = `
            <h3>${user.id}</h3>
            <p>${user.name}</p>
            <p>${user.username}</p>
            <p>${user.email}</p>
            <p>${user.phone}</p>
            <p>${user.address.city}</p>
            <p>${user.address.street}</p>
            <p>${user.address.zipcode}</p>
            <p>${user.company.name}</p>
          `;
      }
    });
  });
})();
