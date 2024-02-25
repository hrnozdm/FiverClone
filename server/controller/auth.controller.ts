import { Request,Response } from "express";
import User from "../models/user.model";

class AuthController{
     
        public static async register(req:Request,res:Response){
              try {
                 const newUser=new User(req.body);
                 await newUser.save();
                 res.status(201).json({'msg':'Yeni kişi kaydı başarılı'});
              } catch (error) {
                res.status(500).json(error);
              }
        }


}


export default AuthController;