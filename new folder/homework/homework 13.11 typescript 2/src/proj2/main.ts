import car from "./car.js";
import raceCar from "./racecar.js";

const Car = new car(555,'skoda','octavia','metal',1200);
Car.display();
const RaceCar = new raceCar(666,'toyota','corolla','white',1600,300,5);
RaceCar.display();