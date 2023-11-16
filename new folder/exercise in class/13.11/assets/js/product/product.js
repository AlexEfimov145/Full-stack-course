class product {
    //method
    constructor(name, description, price, discount) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.discount = discount;
    }
    display() {
        console.log(this.name);
        console.log(this.description);
        console.log(this.price);
        console.log(this.discount);
    }
    getPriceWithVat() {
        console.log(this.price * product.vat);
    }
    ;
}
product.vat = 1.17;
export default product;
