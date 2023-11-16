$(() => {
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
  };

  $("#btn").on("click", () => {
    $("#wrapper")
      .children()
      .each(function () {
        const math = Math.floor(Math.random() * 100);
        $(this).text(math);
        const randomColor = getRandomColor();
        $(this).css("background-color", randomColor);
      });
  });
});
