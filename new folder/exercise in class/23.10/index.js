// const displayUserLocation = () => {
//   getUserLocationWithPromise()
//     .then((data) => {
//       console.log(data);
//       console.log(Promise);
//     })
//     .catch((err) => console.log(err));
// };

// const getUserLocationWithPromise = () => {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       (data) => resolve(data),
//       (err) => reject(err)
//     );
//   });
// };

///////////////////////////////

const displayNum = () => {
  randomNumber()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

const randomNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const Num = Math.random();
      if (Num < 0.5) reject("smaller then 0.5");
      resolve(Num);
    }, 1000);
  });
};

////////////////////////////////async

const displayUserLocation = async () => {
  try {
    const loc = await getUserLocationWithPromise();
    console.log(loc);
  } catch (e) {
    console.error(e);
  }

  //   .then((data) => {
  //     console.log(data);
  //     console.log(Promise);
  //   })
  //   .catch((err) => console.log(err));
};

const getUserLocationWithPromise = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (data) => resolve(data),
      (err) => reject(err)
    );
  });
};
