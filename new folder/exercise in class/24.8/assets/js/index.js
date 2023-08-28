var userData = new Object();
loadData();

function makeLogin() {
  var uName = document.getElementById("uName").value;
  var uPass = document.getElementById("uPass").value;
  var saveMe = document.getElementById("saveMe").checked;

  saveData(uName, uPass, saveMe);
}

function saveData(uName, uPass, saveMe) {
  console.log(uName, uPass, saveMe);

  userData.uName = uName;
  userData.uPass = uPass;
  userData.saveMe = saveMe ? 1 : 0;

  localStorage.setItem("user", JSON.stringify(userData));
}

function loadData() {
  userData = JSON.parse(localStorage.getItem("user"));
  userData.saveMe = userData.saveMe == 1;
  console.log(userData);
}

function saveData_db(uName, uPass, saveMe) {}
