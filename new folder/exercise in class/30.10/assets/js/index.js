/// <reference path = "jquery.js"/>

$(() => {
  $("#animationButton").on("click", () => $("div").fadeOut(2000));
  //   $("div").fadeOut(2000);
  $("#toggle").on("click", () => $(".red").toggle(2000));
  $("#createButton").on("click", () =>
    $("#container").append("<button>click me</button>")
  );

  $("#container").on("click", "button", () => console.log("new click"));

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  };

  $("#color").on("click", () => {
    $("div").each(function () {
      const RandomColor = getRandomColor();
      $(this).css("background-color", RandomColor);
    });

    $("#DomButton").on("click", () => {
      $("#secondDiv").css("background-color", "green");
    });
  });
});
