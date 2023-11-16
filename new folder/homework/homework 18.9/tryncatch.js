// const numbers = [];

// function avg(){
//     for (let i = 0; i < numbers.length; i++) {
//         let num = +prompt('insert array into ');
//         numbers.push(num);
//     }

// }

function getAverage(numbers) {
  if (numbers === null) {
    throw new Error("please send not null");
  }
  if (typeof numbers === "undefined") {
    throw new Error("please send not undefined");
  }
  if (typeof numbers !== "array") {
    throw new Error("expecting array");
  }
}

function invoker() {
  try {
    getAverage(null);
  } catch (error) {
    console.log(error);
  }
}
