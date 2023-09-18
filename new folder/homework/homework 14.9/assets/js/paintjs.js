const canvas = document.getElementById("paint");
const paint = canvas.getContext("2d");

function setColor(color) {
  paint.beginPath();
  paint.strokeStyle = color;
}

function setSize(size) {
  paint.beginPath();
  paint.lineWidth = size;
}

function mouseDraw(event) {
  if (event.buttons === 1) {
    paint.lineTo(event.offsetX, event.offsetY);
    paint.stroke();
  }
}

function newPosition(event) {
  paint.moveTo(event.offsetX, event.offsetY);
}

function randomCircle() {
  for (let i = 0; i < 100; i++) {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const centerX = Math.random() * canvasWidth;
    const centerY = Math.random() * canvasHeight;
    const radius = Math.random() * 50;

    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;

    const fontSize = Math.floor(Math.random() * 30) + 10;

    paint.beginPath();
    paint.strokeStyle = randomColor;
    paint.lineWidth = fontSize;
    paint.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    paint.stroke() * 100;
  }
}
