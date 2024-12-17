import express, { NextFunction, Request, Response } from "express";
const app = express();

interface ExtendedRequest extends Request {
    token: string
}


export const authMiddleware: any = (req: ExtendedRequest, res: Response, next: NextFunction) =>  {
    const token: string | undefined = req.headers['authorization'] || 'chetan';
    // if(!token || token !== "") {
    //     return res.status(403).send('Invalid token');
    // }
    req.token = token;
    next();
}

