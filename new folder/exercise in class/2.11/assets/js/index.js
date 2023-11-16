function o1() {
  const arr = [12, 50, 80, 60, 15, 38];
  const randomItem = getRandomItem(arr);
  console.log(`random is ${randomItem}`);
}

function getRandomItem(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function random() {
  let arr = [];
  let complete = false;
  while (!complete) {
    let num = Math.floor(Math.random() * 10000);
    let found = false;
    for (let z = 0; z < arr.length; z++) {
      if (num == arr[z]) {
        found = true;
        break;
      }
    }
    if (!found) {
      arr.push(num);
    }
    complete = arr.length === 100;
  }
  console.log(arr);
}

function random2() {
  let arr = new Set();
  let complete = false;
  while (!complete) {
    const num = Math.floor(Math.random() * 10000);
    arr.add(num);
    complete = arr.size === 100;
  }
  console.log(arr);
}


