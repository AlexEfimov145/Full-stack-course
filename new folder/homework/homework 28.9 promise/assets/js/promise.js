const generate7BoomAfterDelayAsync = (x) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = Math.floor(Math.random() * x);
      resolve(number);
    }, 1000);
  });
};

const getNum = (x) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve(x)
        },1000)
    })
};

const promise1 = new Promise((resolve, reject) => {
    
});