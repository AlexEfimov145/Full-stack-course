function loadImage() {
  var img = document.getElementById("imageURL").value;
  var friendName = document.getElementById("friendName").value;
  var friendTel = document.getElementById("friendTel").value;

  document.getElementById("friendList").innerHTML += `
     <tr>
       <td class = "ggg">
          <img src="${img}" width="100"/>
       </td>
       <td>
         ${friendName}
       </td>
       <td>
         ${friendTel}
       </td>`;
}
