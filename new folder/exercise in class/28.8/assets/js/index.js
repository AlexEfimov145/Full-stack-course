var myList = [
  "Milk",
  "Eggs",
  "Bread",
  "Salt",
  "Paper",
  "Chocolate",
  "Cheese",
  "apple",
];

//Method I
// var myListHTML = document.getElementById("myList");
// myListHTML.innerHTML = `
//     <li>${myList[0]}</li>
//     <li>${myList[1]}</li>
//     <li>${myList[2]}</li>
//     <li>${myList[3]}</li>
//     <li>${myList[4]}</li>
//     <li>${myList[5]}</li>
// `;

//Method II
// var result = "";
// for (var counter=0;counter<myList.length;counter++){
//     result += `<li>${myList[counter]}</li>`;
// }
// myListHTML.innerHTML = result;

//Method III
// function documentLoaded(){
//     var myListHTML = document.getElementById("myList");
//     makeList(myListHTML);
// }

// function makeList(myListHTML){
//     var result="";
//     for (var counter=0;counter<myList.length;counter++){
//         result+=`<li>${myList[counter]}</li>`;
//     }
//     myListHTML.innerHTML = result;
// }

//Method IV
// var documentLoaded = ()=>{
//     makeList();
// }

// var makeList=()=>{
//     var myListHTML = document.getElementById("myList");
//     var result="";
//     for (var counter=0;counter<myList.length;counter++){
//         result+=`<li>${myList[counter]}</li>`;
//     }
//     myListHTML.innerHTML = result;
// }

//Method V
var documentLoaded = () => {
  makeList();
  random(ggg);
};

var makeList = () => {
  const menu = document.querySelector("#menu");
  for (var counter = 0; counter < myList.length; counter++) {
    menu.appendChild(makeItem(myList[counter]));
  }
  menu.appendChild(makeHR("alex"));
};

var makeItem = (menuItem) => {
  var li = document.createElement("li");
  li.textContent = menuItem;
  return li;
};

var makeHR = (userName) => {
  var myDiv = document.createElement("div");
  var myHR = document.createElement("hr");
  var myName = document.createElement("h1");
  myName.textContent = userName;
  myDiv.appendChild(myHR);
  myDiv.appendChild(myName);
  myDiv.appendChild(myHR);
  return myDiv;
};

function random() {
  var random = Math.floor(Math.random(myList));
  random = document.createElement("div");
  random.textContent = ggg;
  myList.appendChild(random);
}
