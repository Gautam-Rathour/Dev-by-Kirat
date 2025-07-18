

import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";




export const userMeddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string, JWT_SECRET);


    
    if(decoded) { 
        if (typeof decoded === "string") {
            res.status(403).json({
                message: "You are not logged in"
            })
            return;
        }
        // @ts-ignore
        req.userId = (decoded as JwtPayload).id;
        next();
    } else {
        res.status(403).json({
            message: "You are not logged in"
        })
    }
}