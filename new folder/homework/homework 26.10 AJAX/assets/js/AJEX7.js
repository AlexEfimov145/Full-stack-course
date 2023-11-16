(() => {
  select.addEventListener("change", async () => {
    const select = document.getElementById("select");
    const selectedOption = select.options[select.selectedIndex];
    const userId = selectedOption.value;

    const responseData = await fetch(
      `https://api.weatherstack.com/current?access_key=351f05a0aa43f6c5499d1696f63262c4&query=${userId}`
    );
    const city = await responseData.json();
    const output = document.getElementById("output");
    output.innerHTML = `
           <p>${city.current}</p>
          `;
  });
})();
