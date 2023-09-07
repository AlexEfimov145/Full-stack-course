//CRUD

//create
function addTask(content, date, time) {
  const task = {
    content,
    date,
    time,
  };
  const tasks = getTasks();
  tasks.push(task);

  saveTasks(tasks);
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
//retrieve
function getTasks() {
  const tasks = localStorage.getItem("tasks");
  if (tasks) {
    return JSON.parse(tasks);
  }
  return [];
}

//delete
function deleteTask(index) {
  const tasks = getTasks();
  tasks = newTasks.splice(index, 1);
  saveTasks(tasks);
  
}
