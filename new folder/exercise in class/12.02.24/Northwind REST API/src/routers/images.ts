import { NextFunction, Request, Response,Router } from "express";
import path from "path";


const router = Router();


router.get('/AE.jpg', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname, '../assets/images/AE.jpg'));
});



export default router
