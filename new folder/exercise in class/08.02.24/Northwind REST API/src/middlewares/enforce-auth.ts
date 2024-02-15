import config from "config";
import { verify } from "jsonwebtoken";
import { NextFunction, Request,Response } from "express";
import createHttpError,{ Unauthorized } from "http-errors";


export default function enforceAuth(req: Request, res: Response, next: NextFunction) {

    const header = req.header('authorization');
    if(!header) return next(createHttpError(Unauthorized('missing authorization')));

    const token = header.split(' ')[1];
    try {
        verify(token, config.get<string>('app.jwt.secret'));
        return next();
    } catch (err) {
        return next(createHttpError(Unauthorized(err.message || err)));
    }
}
