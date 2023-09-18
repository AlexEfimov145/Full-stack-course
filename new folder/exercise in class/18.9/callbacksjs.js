function doSomething() {
  func1(function () {
    alert("hi");
  });
  func2(function () {
    alert("hi");
    return "hello";
  });
  func3(function (x) {
    alert(x);
  });
  func4(function (x, y) {
    alert(x + y);
  });
  func5(function (x, y, z) {
    alert(x * y * z);
  });
  func6(function () {
    return 42;
  });
  func7(function (a, b) {
    return a + b;
  });
  func8(function (a, b) {
    return a > b ? a : b;
  });
  func9(function (x, y, z) {
    alert(x);
    alert(y);
    alert(z);
  });
  func10(function () {
    return { name: "betty", age: 1.5, color: "gray" };
  });
}

function func1(callback) {
  callback();
}
function func2(callback) {
  console.log(callback());
}
function func3(callback) {
  callback(5);
}
function func4(callback) {
  callback(10, 20);
}
function func5(callback) {
  callback(10 * 5 * 8);
}
function func6(callback) {
  console.log(callback());
}
function func7(callback) {
  console.log(callback(10 + 5));
}
function func8(callback) {
  console.log(callback(100, 200));
}
function func9(callback) {
  callback(1, 2, 3);
}
function func10(callback) {
  const dog = callback();
  console.log(dog.name);
  console.log(callback());
}

/*
-------------------------------------------
 */

function doSomething2() {
  func11(function () {
    alert("Hello!");
  });
  func12(function (a, b) {
    console.log(a + b);
  });
  func13(function (a, b) {
    return a > b ? a : b;
  });
  func14(function () {
    return { name: "stick", price: "20" };
  });
  func15(
    function () {
      return 100;
    },
    function () {
      return 1;
    }
  );
}

function func11(callback) {
  callback();
}

function func12(callback) {
  callback(10, 20);
}

function func13(callback) {
  const max = callback(100, 200);
  console.log(max);
}

function func14(callback) {
  const product = callback();
  console.log(
    `product name is ${product.name} and product price is ${product.price}`
  );
}

function func15(callback1, callback2) {
  const rabbitSpeed = callback1();
  const turtleSpeed = callback2();
  if (rabbitSpeed > turtleSpeed) {
    console.log("rabbit is faster");
  } else {
    console.log("turtle is faster");
  }
}
