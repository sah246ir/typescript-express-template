import { NextFunction,Response,Request } from "express";
import { clients } from "..";

export function corsHeaders(req:Request, res:Response, next:NextFunction){
    res.header('Access-Control-Allow-Origin', ...clients);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}
