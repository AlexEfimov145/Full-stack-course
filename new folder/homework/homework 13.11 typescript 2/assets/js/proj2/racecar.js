import car from "./car.js";
export default class raceCar extends car {
    constructor(carNumber, manufacturer, model, color, engine, maxSpeed, numberOfRacesDone) {
        super(carNumber, manufacturer, model, color, engine);
        this.maxSpeed = maxSpeed,
            this.numberOfRacesDone = numberOfRacesDone;
    }
    display() {
        super.display();
        console.log(this.maxSpeed, this.numberOfRacesDone);
    }
}
