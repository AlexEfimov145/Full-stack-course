const uName = "alex"
const uPass = "1234"

function power2(userNumber){
    return userNumber*userNumber;
}
function checkLogin(){
   // console.log("login system crushed");
   var userName = document.getElementById("userName").value;
   var userPass = document.getElementById("userPassword").value;
    document.getElementById("result").innerHTML = uName==userName && uPass == userPass?"hello master":"why who are you?";
   
}
console.log("hello");