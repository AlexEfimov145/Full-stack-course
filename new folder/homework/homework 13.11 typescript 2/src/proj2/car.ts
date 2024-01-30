export default class car{
    public constructor(
        public carNumber: number,
        public manufacturer: string,
        public model: string,
        public color: string,
        public engine: number,
    ){};
    public display():void{
        console.log(this.carNumber,this.manufacturer,this.model,this.color,this.engine);
    }
}