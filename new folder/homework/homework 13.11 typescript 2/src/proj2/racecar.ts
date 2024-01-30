import car from "./car.js";

export default class raceCar extends car {
    public maxSpeed: number;
    public numberOfRacesDone: number;

    public constructor(carNumber: number,
         manufacturer: string,
         model: string,
         color: string,
         engine: number,
         maxSpeed: number,
         numberOfRacesDone: number){
            super(carNumber,
                manufacturer,
                model,
                color,
                engine,)
this.maxSpeed = maxSpeed,
this.numberOfRacesDone = numberOfRacesDone;
    }
    public display(): void {
        super.display()
        console.log(this.maxSpeed, this.numberOfRacesDone);
    }
}