import { NextFunction, Request, Response } from "express";
import Logging from "../utils/Logging";

export async function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
        Logging.info(`Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req
            .socket.remoteAddress}] - Status: [${res.statusCode}]`);
    });

    next();
};