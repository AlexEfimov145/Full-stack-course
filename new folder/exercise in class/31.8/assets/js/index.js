//variables
const manuFacturer = document.getElementById("manufacturer");
const carType = document.getElementById("carType");
const carYear = document.getElementById("carYear");
const urlLink = document.getElementById("urlLink");
const owner = document.getElementById("previousOwnership");
const corvet = document.getElementById("corvet");
const price = document.getElementById("price");
//output
const output = document.getElementById("output");
//local
const todoRef = "gallery";
//carObject
var car = new Object();
car.manuFacturer = manuFacturer;
car.carType = carType;
car.carYear = carYear;
car.urlLink = urlLink;
car.owner = owner;
car.corvet = corvet;
car.price = price;

//local storage
//1 get local storage
const getLocalStorage = () => {
  var ls = localStorage.getItem(todoRef);
  if (!ls) {
    ls = [];
    return ls;
  }
  return JSON.parse(ls);
};
//2 set local storage
const setLocalStorage = (arr) => {
  var stingified = JSON.stringify(arr);
  localStorage.setItem(todoRef, stingified);
};
//3 add to local storage
const addLocalStorage = (newItem) => {
  const currentState = getLocalStorage();
  var parsed = currentState;
  parsed.push(newItem);
  setLocalStorage(parsed);
};
//4 update local storage
setLocalStorage(["a", "b", "c", "d"]);
addLocalStorage("e");

//functions
//init -this will pull local storage and apply current state
function init() {
  //debugger;
  let col = "";
  const currentState = getLocalStorage();
  for (let i = 0; i < currentState.length; i++) {
    col += `
          <div class="todo-instance" data-index=${i}>
             <p> ${currentState[i].output} </p>
              <p> ${currentState[i].date}</p>
              <input type="checkbox" name=""" checked="${currentState[i].isChecked}" onClick="setState()"/>
          </div>
      `;
  }
  output.innerHTML = col;
}
//add item function
const addCar = () => {
  let newTodoInstance = {
    output: "",
    date: new Date(),
    isChecked: false,
  };
  newTodoInstance.output = car.value;
  if (newTodoInstance.output.length > 0) {
    car.value = "";
    addLocalStorage(newTodoInstance);
    init();
  }
};
const setState = () => {};
//clear all item function
const clearAll = () => {
  setLocalStorage([]);
  init();
};

init();
