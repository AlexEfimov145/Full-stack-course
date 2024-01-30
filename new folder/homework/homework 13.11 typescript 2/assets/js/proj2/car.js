export default class car {
    constructor(carNumber, manufacturer, model, color, engine) {
        this.carNumber = carNumber;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.engine = engine;
    }
    ;
    display() {
        console.log(this.carNumber, this.manufacturer, this.model, this.color, this.engine);
    }
}
