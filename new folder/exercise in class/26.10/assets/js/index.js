// const paintMe = () => {
//   document.body.style.backgroundColor = "green";
//   setTimeout(() => {
//     alert("screen now green");
//   }, 0);
// };

const paintMe = () => {
  document.body.style.backgroundColor = "green";
};

const x = document.getElementById("paint");
x.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});

const button1 = document.getElementById("button1");
button1.addEventListener("click", () => {
    
  button1.style.backgroundColor = "green";
});
