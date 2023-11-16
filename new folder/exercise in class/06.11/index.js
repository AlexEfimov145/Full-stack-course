function x() {
  const n = +prompt("to which number to count?");
  const result = recursion(n);
  console.log(result);
}

function y() {
  const arr = [1, 2, 3, 4];
  const result = recursion(arr, 0, 3);
  console.log(result);
}
function recursion(arr, startIndex, endIndex) {
  if (startIndex === endIndex) return arr[startIndex];
  return arr[startIndex] + recursion(arr, startIndex + 1, endIndex);
}

function z() {
  const client = {
    id: "fjgguity87t8t87yi",
    names: {
      first: "alex",
      middle: "",
      last: "efimov",
    },
    phone: {
      home: "0644545464",
      mobile: "46546464654",
    },
    address: {
      country: "israel",
      city: "haifa",
      geo: {
        latitude: 32.15,
        longitude: 34.4,
      },
    },
    email: "israel@gmail.com",
  };
  flatten(client);
}

function flatten(obj) {
  for (const property in obj) {
    if (typeof obj[property] !== "object") {
      console.log(`${property} => ${obj[property]}`);
    } else {
      flatten(obj[property]);
    }
  }
}

//1
// function recursion(n) {
//   if (n <= 0) {
//     return;
//   }
//   console.log(n);
//   recursion(n - 1);
// }
//2
// function recursion(n) {
//   if (n <= 0) return;
//   if (n % 2 == 0) console.log(n);
//   recursion(n - 1);
// }
//3
// function recursion(n) {
//   if (n <= 0) return;
//   console.log(Math.random());
//   recursion(n - 1);
// }
//4
// function recursion(n) {
//   if (n <= 0) {
//     return;
//   }
//   recursion(n - 1);
//   console.log(n);
// }
//5
// function recursion(n) {
//   if (n <= 1) return 1;
//   return n * recursion(n - 1);
// }
