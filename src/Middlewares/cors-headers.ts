import { NextFunction,Response,Request } from "express";

export function corsHeaders(req:Request, res:Response, next:NextFunction){
    res.header('Access-Control-Allow-Origin','http://url1, http://url2');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}