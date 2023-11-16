import product from "../product/product.js";

const product1 = new product('apple','green',10,2);
product1.display();
product1.getPriceWithVat();
const product2 = new product('orange','big',8,2);
product2.display();
product2.getPriceWithVat();