function foodSelect() {
  var food = document.getElementById("food").value;
  var price = document.getElementById("price");

  switch (food) {
    case "vegan option":
      price.innerHTML = "1000 nis";
      break;
    case "vegetarian option":
      price.innerHTML = "500 nis";
      break;
    case "meat option":
      price.innerHTML = "100 nis";
      break;
    case "derry option":
      price.innerHTML = "50 nis";
      break;

    default:
      console.log("no option");
  }
}
/*
function option(food) {
  switch (food) {
    case "vegan option":
      price.innerHTML = "vegan";
      break;
    case "vegetarian option":
      price.innerHTML = "vegetarian";
      break;
    case "meat option":
      price.innerHTML = "meat";
      break;
    case "derry option":
      price.innerHTML = "derry";
      break;

    default:
      console.log("WTF?!?!?!?");
  }
}
*/
