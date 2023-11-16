const numbers = [
  30, 50, 90, 70, 20, 30, 11, 50, 70, 40, 60, 99, 23, 66, 44, 10, 55, 88, 11,
];

let x = numbers.map((number) => {
  console.log(number);
});

console.log("--------------------------------");

x = numbers.find((number) => number % 2 == 0);
console.log(x);

console.log("--------------------------------");

x = numbers.find((number) => number > 50);
console.log(x);

console.log("--------------------------------");

x = numbers.filter((number) => number % 2 !== 0);
console.log(x);

console.log("--------------------------------");

x = numbers.filter((number) => number > 50);
console.log(x);

console.log("--------------------------------");

x = numbers.findIndex((number) => number > 50);
console.log(x);

console.log("--------------------------------");

x = numbers.filter((number) => number % 2 !== 0);
console.log(`all odd grades ${x}`);
x = numbers.filter((number) => number % 2 == 0);
console.log(`all even grades ${x}`);

console.log("--------------------------------");

x = numbers.reduce(
  (min, current) => (current < min ? current : min),
  numbers[0]
);
console.log(x);

console.log("--------------------------------");

x = numbers.reduce(
  (max, current) => (current > max ? current : max),
  numbers[0]
);
console.log(x);

console.log("---------------number func-----------------");

objArr = [];

const randomNum = () => {
  while (objArr.length < 20) {
    let numX = Math.floor(Math.random() * 101);

    let numY = Math.floor(Math.random() * 101);

    // console.log(numX);
    // console.log(numY);

    let obj = {
      numX: numX,
      numY: numY,
    };

    objArr.push(obj);

    // console.log(obj);
  }

  // console.log(objArr);
  console.log("--------------------------------");

  objArr.map((obj) => {
    console.log(obj);
  });
  console.log("---------------first obj were x bigger than y-----------------");

  objArr.find((obj) =>
    obj.numX > obj.numY ? (console.log(obj), true) : false
  );
  console.log(
    "---------------first obj were y bigger than 50-----------------"
  );

  objArr.find((obj) => (obj.numY > 50 ? (console.log(obj), true) : false));

  console.log("---------------all obj were x is odd-----------------");

  objArr.filter((obj) =>
    obj.numX % 2 == 0 ? (console.log(obj), true) : false
  );

  console.log("---------------all obj were y bigger than 50-----------------");

  objArr.filter((obj) => (obj.numY > 50 ? (console.log(obj), true) : false));

  console.log(
    "---------------indexOf obj were numX is bigger than 50-----------------"
  );

  objArr.findIndex((obj) =>
    obj.numX > 50 ? (console.log(objArr.indexOf(obj)), true) : false
  );

  console.log(
    "---------------for all points, distance from start of the axels-----------------"
  );

  objArr.map((obj) => {
    const x = Math.sqrt(obj.numX * 2 + obj.numY * 2);
    console.log(x);
  });

  console.log("---------------minimal x-----------------");

  const minObj = objArr.reduce((min, obj) => {
    return obj.numX < min.numX ? obj : min;
  }, objArr[0]);

  console.log(minObj);
};

console.log("---------------pizza func-----------------");

const pizzaArr = [];

const randomPizza = () => {
  while (pizzaArr.length < 20) {
    let randomDiameter = Math.floor(Math.random() * 61);
    let randomSlices = Math.floor(Math.random() * 9);
    let randomToppings = Math.floor(Math.random() * 7);
    let randomPrice = Math.floor(Math.random() * 91) + 10;

    const objPizza = {
      randomDiameter: randomDiameter,
      randomSlices: randomSlices,
      randomToppings: randomToppings,
      randomPrice: randomPrice,
    };
    pizzaArr.push(objPizza);
  }

  pizzaArr.forEach((objPizza) => {
    console.log(objPizza);
  });

  console.log("---------------first pizza without toppings-----------------");

  const firstPizzaWithoutToppings = pizzaArr.find(
    (objPizza) => objPizza.randomToppings === 0
  );
  if (firstPizzaWithoutToppings) {
    console.log(firstPizzaWithoutToppings);
  }

  console.log("---------------first pizza under 30 nis-----------------");
  pizzaArr.find((objPizza) =>
    objPizza.randomPrice < 30 ? (console.log(objPizza), true) : false
  );

  console.log(
    "---------------all pizzas, diameter under 20 or equal-----------------"
  );
  pizzaArr.filter((objPizza) =>
    objPizza.randomDiameter <= 30 ? (console.log(objPizza), true) : false
  );

  console.log("---------------all pizzas, price above 80 nis-----------------");
  pizzaArr.filter((objPizza) =>
    objPizza.randomPrice > 80 ? (console.log(objPizza), true) : false
  );
  console.log("---------------all pizzas, without toppings-----------------");

  pizzaArr.filter((objPizza) =>
    objPizza.randomToppings == 0 ? (console.log(objPizza), true) : false
  );
  console.log(
    "---------------index of first pizza under 6 slices-----------------"
  );

  pizzaArr.findIndex((objPizza) =>
    objPizza.randomSlices <= 6
      ? (console.log(pizzaArr.indexOf(objPizza)), true)
      : false
  );

  console.log("---------------radius of all the pizzas-----------------");

  pizzaArr.filter((objPizza) => {
    const radius = objPizza.randomDiameter / 2;
    console.log(radius);
  });

  console.log("---------------vat-----------------");
  pizzaArr.map((objPizza) => {
    const vat = Math.floor(objPizza.randomPrice * 0.17);
    console.log(vat);
  });

  console.log("---------------sum of all pizza prices-----------------");

  const sum = pizzaArr.reduce((acc, objPizza) => {
    return acc + objPizza.randomPrice;
  }, 0);
  console.log(sum);

  console.log("---------------highest pizza price-----------------");

  const highestPricePizza = pizzaArr.reduce((highest, objPizza) => {
    return objPizza.randomPrice > highest ? objPizza.randomPrice : highest;
  }, -Infinity);

  console.log(highestPricePizza);

  console.log("---------------highest pizza price object-----------------");

  const highestPricePizzaObject = pizzaArr.reduce(
    (highest, objPizza) => {
      return objPizza.randomPrice > highest.price ? objPizza : highest;
    },
    { price: -Infinity }
  );
  console.log(highestPricePizzaObject);
};
