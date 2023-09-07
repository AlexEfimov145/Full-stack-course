function submitForm(event) {
  event.preventDefault();
  const theContent = document.getElementById("content").value;
  addTask(theContent, "2023-09-30", "18:00");
}
