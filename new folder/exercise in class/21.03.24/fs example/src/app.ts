import express, {NextFunction, Request, Response} from "express";
import fs from 'fs/promises'



const server = express();

server.use(express.json());

server.get('/save', async (req: Request, res: Response, next: NextFunction) => {
    await fs.writeFile('./db.txt', req.query.data as string)
    res.send("success")
})


server.get('/saved', async (req: Request, res: Response, next: NextFunction) => {
    const data = await fs.readFile('./db.txt', 'utf8')
    res.send(data);
});
