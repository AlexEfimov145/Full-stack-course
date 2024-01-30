process.env['NODE_CONFIG_DIR'] = __dirname + '/config/';
import express from "express";
import productsRouter from './routers/employees';
import config from 'config';

const server = express();
server.use(express.json());

server.use('/api/employees', productsRouter)

server.listen(config.get<number>('app.port'), () => {
    console.log('server is running on localhost:8080')
})
