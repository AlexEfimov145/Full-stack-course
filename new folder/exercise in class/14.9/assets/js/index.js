const myCanvas = document.getElementById("myCanvas");
const painter = myCanvas.getContext("2d");

function drawStuff() {
  const myCanvas = document.getElementById("myCanvas");
  const painter = myCanvas.getContext("2d");

  //rectangle
  painter.strokeStyle = "blue";
  painter.strokeRect(10, 10, 100, 100);

  //circle
  painter.strokeStyle = "red";
  painter.arc(300, 300, 100, 0, 2 * Math.PI);
  painter.stroke();

  //empty text
  painter.strokeStyle = "green";
  painter.font = "40px Ariel";
  painter.strokeText("Hello", 20, 400);

  //line
  painter.strokeStyle = "grey";
  painter.moveTo(500, 400); //place painter in this location
  painter.lineTo(640, 480); //paint line to this location
  painter.stroke();

  //full rectangle
  painter.fillStyle = "yellow";
  painter.fillRect(10, 210, 100, 100);

  //full circle
  painter.fillStyle = "red";
  painter.beginPath(); // stops previous paints
  painter.arc(300, 100, 100, 0, 2 * Math.PI);
  painter.fill();

  //full text
  painter.beginPath();
  painter.strokeStyle = "green";
  painter.font = "50px Ariel";
  painter.fillText("Hello", 20, 200);
}
drawStuff();

//drawing on mouse movement
function mouseDraw(event) {
  painter.lineTo(event.offsetX, event.offsetY);
  painter.stroke();
}
