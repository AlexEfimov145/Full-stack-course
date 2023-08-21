var imageURL = [];
var friendTel = [];
var friendName = [];

function loadImage() {
  var urlData = document.getElementById("imageURL").value;
  var telData = document.getElementById("friendName").value;
  var nameData = document.getElementById("friendTel").value;

  imageURL.push(urlData);
  friendTel.push(telData);
  friendName.push(nameData);

  var data = document.getElementById("data");

  var info = "";

  for (var index = 0; index < imageURL.length; index++) {
    info += `
  <tr>
    <td>
       <img src="${imageURL[index]}"/>
    </td>
    <td>
      ${friendName[index]}
    </td>
    <td>
      ${friendTel[index]}
    </td>
    </tr>`;
  }

  data.innerHTML = info;
  urlData = "";
  telData = "";
  nameData = "";
}
