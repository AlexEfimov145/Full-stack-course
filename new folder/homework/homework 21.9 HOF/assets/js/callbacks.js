// functions for callbacks
function cool(callback) {
  callback();
}
function nice(callback) {
  callback(42);
}
// function amazing(callback) {
//   const num = callback(42, 128, 37, 81, 66);
//   document.write("Num:" + num);
// }

//outPut
const outPut = document.getElementById("outPut");
// callbacks
function allFunc() {
  cool(function () {
    console.log("Alexander");
  });
  nice(function (x) {
    console.log(x);
  });
  //   amazing(function (x, y, z, k, l) {
  //     const random = Math.random(x, y, z, k, l);
  //     outPut.innerHTML = random;
  //     return num;
  //   });
}

function cool(paintCallback) {
  paintCallback();
}

function x() {
  const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
  document.body.style.backgroundColor = randomColor;
}

function nice(paintCallback) {
  paintCallback("Green");
}

function y(color) {
  document.body.style.backgroundColor = color;
}
