var arr = [];
var item = "";
function add() {
  var name = document.getElementById("itemName").value;
  var quantity = document.getElementById("quantity").value;
  var currentDate = new Date().toLocaleString();

  item = new Object();
  item.name = name;
  item.quantity = quantity;
  item.currentDate = currentDate;

  arr.push(item);
  console.log(arr);

  createTable();
}

function createTable() {
  data = document.getElementById("data");
  var info = "";
  for (i = 0; i < arr.length; i++) {
    info += `
        <tr>
        <td>${arr[i].name}</td>
        <td>${arr[i].quantity}</td>
        <td><input type="checkbox" checked/></td>
        <td>${arr[i].currentDate}</td>
        </tr>
        
        `;
  }
  data.innerHTML = info;
}
