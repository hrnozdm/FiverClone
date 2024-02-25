import {NextFunction, Request,Response} from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request{
    userId?:string,
    isSeller?:boolean,
}

export const verifyToken=(req:AuthRequest,res:Response,next:NextFunction)=>{
    const token=req.cookies.accessToken;
    if (!token){
        return res.status(401).json({'msg':'Oturum açılmadı'});
    }

    const jwtKey:any=process.env.JWT_KEY;
    

    jwt.verify(token,jwtKey, async(err:any,payload:any)=>{
         if (err){
            return res.status(403).json({'msg':'Token uyuşmuyor'});
         }

         req.userId=payload._id;
         req.isSeller=payload.isSeller;

         next();
    })
}