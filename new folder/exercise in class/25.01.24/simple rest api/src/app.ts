import express, {NextFunction, Request, Response} from "express";
import {v4} from "uuid";

const products = [
    {id:"ffe25426-6fe1-4255-bf86-a8c10818a72f", name: "chai",price:6.00,stock:100},
    {id:"ffe25426-6fe1-4255-bf86-a8c10818a72g", name: "coffee",price:5.00,stock:200},
    {id:"ffe25426-6fe1-4255-bf86-a8c10818a72b", name: "chocolate",price:6.00,stock:300}
]

const server = express();

server.use(express.json());

server.get('*', (req:Request,res:Response, next:NextFunction) => {
    console.log('received a GET request');
    next();
});

server.get('/api/products', (req:Request,res:Response, next:NextFunction) => {
    res.json(products);
});

server.get('/api/products/:id', (req:Request,res:Response, next:NextFunction) => {
    const id = req.params.id;
    const product = products.find(p => p.id === id);
    res.json(product);
});

server.post('/api/products', (req:Request, res:Response, next:NextFunction) =>{
    const id = v4();
    const product = {id,...req.body};
    products.push(product);
    res.json(product);
});

server.put('/api/products/:id', (req:Request, res:Response, next:NextFunction) => {
    const index = products.findIndex(p => p.id === req.params.id);
    products[index] = {id:req.params.id, ...req.body};
    res.json(products[index]);
});

server.patch('/api/products/:id', (req:Request, res:Response, next:NextFunction) => {
    const index = products.findIndex(p => p.id === req.params.id);
    const newVProd = {...products[index],...req.body};
    products[index] = newVProd;
    res.json(products[index]);
});

server.delete('/api/products/:id', (req:Request, res:Response, next:NextFunction) => {
    const index = products.findIndex(p => p.id === req.params.id);
    products.splice(index,1);
    res.sendStatus(204);
});

server.listen(8080, () => {
    console.log("server started");
});
