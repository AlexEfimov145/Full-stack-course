export default class book {
    public constructor(
        public bookName: string,
        public author: string,
        public datePublished: number,
        public price: number
    ){}
    public show() {
        console.log(`bookName = ${this.bookName}, author = ${this.author}, datePublished = ${this.datePublished}, price = ${this.price}`);
    }
    public vat(price:number){
        return console.log(price * 0.17);
    }
}