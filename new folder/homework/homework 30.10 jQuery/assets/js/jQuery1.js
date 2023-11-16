/// <reference path="jquery.js" />

$(() => {
  const in1 = document.getElementById("in1");
  const in2 = document.getElementById("in2");

  $("#btn1").on("click", () => {
    $("#outPut").append(`<div>${in1.value}</div>`).css("text-align", "center");
    $("#in1").hide();
    $("#btn1").prop("disabled", true);
  });
  $("#btn2").on("click", () => {
    $("#outPut").append(`<div>${in2.value}</div>`).css("text-align", "center");
    $("#in2").hide();
    $("#btn2").prop("disabled", true);
  });
});
