// const number = Math.random();

// const number2 = number * 31; //0-30

// const number3 = Math.floor(number2); // rational number 0-30

// const number4 = number3 + 20; //rational number between 20 and 50

// console.log(number4);

const myFunc = () => {
  console.log("start1");
  aFunc();
  console.log("finish1");
};

const aFunc = () => {
  console.log("start2");
  let sum = 0;
  for (let i = 0; i < 100000; i++) {
    sum += i;
  }
  console.log(sum);
  console.log("finish2");
};

const myFunc2 = () => {
  display(
    (location) => console.log(`${location.latitude} , ${location.longitude}`),
    (error) => alert(error)
  );
};

const display = (callback1, callback2) => {
  try {
    navigator.geolocation.getCurrentPosition((position) => {
      callback1(position.coords);
    });
  } catch (error) {
    callback2(error);
  }
};
