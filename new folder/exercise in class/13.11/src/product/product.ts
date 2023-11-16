export default class product{
    //data
    public name: string;
    public description: string;
    public price: number;
    public discount: number;
    public static readonly vat = 1.17;
    //method
    public constructor(name: string, description: string, price: number, discount:number){
        this.name = name;
        this.description = description;
        this.price = price;
        this.discount = discount;
    }
    public display() {
        console.log(this.name);
        console.log(this.description);
        console.log(this.price);
        console.log(this.discount);
    }
    public getPriceWithVat():void {
        console.log(this.price * product.vat);
    };

}