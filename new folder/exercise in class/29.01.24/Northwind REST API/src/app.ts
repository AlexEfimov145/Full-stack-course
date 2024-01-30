process.env['NODE_CONFIG_DIR'] = __dirname + '/config/';
import express from "express";
import productsRouter from './routers/products';
import config from 'config';

const server = express();
server.use(express.json());

server.use('/api/products', productsRouter)

server.listen(config.get<number>('app.port'), () => {
    console.log('server is running on localhost:8080')
})
