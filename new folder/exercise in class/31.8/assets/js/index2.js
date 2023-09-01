// Variables
const manufacturer = document.getElementById("carManufacturer");
const carType = document.getElementById("carType");
const carYear = document.getElementById("carYear");
const urlLink = document.getElementById("urlInput");
const owner = document.getElementById("previousOwnership");
const corvet = document.getElementById("corvet");
const price = document.getElementById("price");
const output = document.getElementById("output");

// Local storage key
const carListKey = "carList";

// Local storage functions
const getCarListFromLocalStorage = () => {
  const carListJSON = localStorage.getItem(carListKey);
  return carListJSON ? JSON.parse(carListJSON) : [];
};

const setCarListToLocalStorage = (carList) => {
  localStorage.setItem(carListKey, JSON.stringify(carList));
};

// Add car function
const addCar = () => {
  const newCar = {
    manufacturer: manufacturer.value,
    carType: carType.value,
    carYear: carYear.value,
    urlLink: urlLink.value,
    owner: owner.value,
    corvet: corvet.value,
    price: price.value,
  };

  const carList = getCarListFromLocalStorage();
  carList.push(newCar);
  setCarListToLocalStorage(carList);

  updateOutput();
};

// Clear all cars function
const clearAll = () => {
  setCarListToLocalStorage([]);
  updateOutput();
};

// Update the output div with car list
const updateOutput = () => {
  const carList = getCarListFromLocalStorage();
  let outputHTML = "";

  carList.forEach((car, index) => {
    outputHTML += `
      <div class="car-instance">
        <p>Manufacturer: ${car.manufacturer}</p>
        <p>Type: ${car.carType}</p>
        <p>Year: ${car.carYear}</p>
        <p>URL: <a href="${car.urlLink}" target="_blank">Link</a></p>
        <img src="${car.urlLink}" alt="Car Image">
        <p>URL: <a href="${car.urlLink}" target="_blank">Link</a></p>
        <img src="${car.urlLink}" alt="Car Image">
        <p>URL: <a href="${car.urlLink}" target="_blank">Link</a></p>
        <img src="${car.urlLink}" alt="Car Image">
        <p>Ownership: ${car.owner}</p>
        <p>Corvet: ${car.corvet}</p>
        <p>Price: ${car.price}</p>
      </div>
    `;
  });

  output.innerHTML = outputHTML;
};

// Initial setup
updateOutput();
