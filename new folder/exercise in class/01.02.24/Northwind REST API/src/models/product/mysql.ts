import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import DTO from "./dto";
import Model from "./model";

class Product implements Model {
    public async getAll(): Promise<DTO[]> {
        const products = await query(`
        SELECT ProductID as id,
                ProductName as name,
                UnitPrice as price,
                UnitsInStock as stock
        FROM products
        `)
        return products;
    }

    public async getOne(id:number): Promise<DTO> {
        const products = await query(`
        SELECT ProductID as id,
                ProductName as name,
                UnitPrice as price,
                UnitsInStock as stock
        FROM products
        WHERE ProductID = ?
        `, [id]);
        return products[0];
    }

    public async add(product: DTO): Promise<DTO> {
        const {name, price, stock} = product;
        const result: OkPacketParams = await query(`
            INSERT INTO products (ProductName, UnitPrice, UnitsInStock)
            VALUES (?,?,?)
        `,[name,price,stock]);
        return this.getOne(result.insertId);   
    }

}

const product = new Product();
export default product;