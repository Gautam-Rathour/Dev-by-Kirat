import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";

export const userMeddleware = (req: Request, res: Response, next: NextFunction): void => {
    const header = req.headers["authorization"];

    if (!header) {
        res.status(403).json({ message: "No token provided" });
        return;
    }

    try {
        const decoded = jwt.verify(header, JWT_SECRET);

        if (typeof decoded !== "string") {
            // @ts-ignore
            req.userId = decoded.id;
            next();
        } else {
            res.status(403).json({ message: "Invalid token" });
        }
    } catch (err) {
        res.status(403).json({ message: "Invalid token", error: err });
    }
};








