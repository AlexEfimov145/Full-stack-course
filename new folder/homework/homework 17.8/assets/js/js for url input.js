console.log("lllll");
function loadImage() {
  try {
    var img = document.getElementById("imageURL").value;
    var friendName = document.getElementById("friendName").value;
    var friendTel = document.getElementById("friendTel").value;

    document.getElementById("friendList").innerHTML += `
    <tr>
      <td class = "ggg">
         <img src="${img}" width="50"/>
      </td>
      <td>
        ${friendName}
      </td>
      <td>
        ${friendTel}
      </td>`;
  } catch (error) {
    throw new Error("Couldn't load image");
  }
}
//     var img = document.getElementById("imageURL").value;
//     var friendName = document.getElementById("friendName").value;
//     var friendTel = document.getElementById("friendTel").value;

//     document.getElementById("friendList").innerHTML+=`
//     <tr>
//       <td class = "ggg">
//          <img src="${img}" width="50"/>
//       </td>
//       <td>
//         ${friendName}
//       </td>
//       <td>
//         ${friendTel}
//       </td>`;
//       console.log(Math.random());
// }
// var click = document.getElementById("click");
