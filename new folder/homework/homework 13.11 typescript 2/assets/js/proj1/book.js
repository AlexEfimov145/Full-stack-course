export default class book {
    constructor(bookName, author, datePublished, price) {
        this.bookName = bookName;
        this.author = author;
        this.datePublished = datePublished;
        this.price = price;
    }
    show() {
        console.log(`bookName = ${this.bookName}, author = ${this.author}, datePublished = ${this.datePublished}, price = ${this.price}`);
    }
    vat(price) {
        return console.log(price * 0.17);
    }
}
