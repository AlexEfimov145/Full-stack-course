import server from "../app";
import request from "supertest";
import { pool } from "../db/mysql";

describe("test production router", () =>{
    afterAll(() =>{
        pool.end();
    })
    describe('test /api/production endpoints', () =>{
        test('it should return array of products', async () =>{
            const result = await request(server).get('/api/products')
            expect(result.statusCode).toBe(200);
            expect(Array.isArray(result.body)).toBeTruthy();
            expect(result.body[0]).toHaveProperty('id')
            expect(result.body[0]).toHaveProperty('name')
            expect(result.body[0]).toHaveProperty('price')
            expect(result.body[0]).toHaveProperty('stock')
            expect(result.body[0]).toHaveProperty('imageUrl')
        })
        
    })
});
