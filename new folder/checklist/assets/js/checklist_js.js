//variables
var tasksArr = [];
var input = document.getElementById("inputTask");
var data = document.getElementById("data");

//functions
function addTask() {
  var task = input.value;
  if (task.trim() === "") {
    // Handle empty task input
    return;
  }
  tasksArr.push(task);
  // checking if task in array
  console.log(tasksArr, tasksArr.length);
  table();
  input.value = "";
}

function table() {
  data.innerHTML = "";
  for (let i = 0; i < tasksArr.length; i++) {
    // const currentDate = new Date(); if i need to add a date
    // const dateTimeString = currentDate.toLocaleString();
    // <td>${tasksArr[i]}${dateTimeString}</td>
    data.innerHTML += `
    <tr>
        <td>
            ${i + 1}.${tasksArr[i]}
        </td>
        <td><input type = "checkbox"/></td>
        <td><button onclick = "deleteTask(${i})">Delete</button></td>
    </tr>
    `;
  }
}

function deleteAllTasks() {
  data.innerHTML = "";
  tasksArr = [];
}

function deleteTask(index) {
  if (index >= 0 && index < tasksArr.length) {
    tasksArr.splice(index, 1);
    table();
  }
}
