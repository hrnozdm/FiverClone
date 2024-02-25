import { Request,Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from  "jsonwebtoken";

class AuthController{
     
        public static async register(req:Request,res:Response){
              try {
                 const hashPass=bcrypt.hashSync(req.body.password,10);
                 const newUser=new User({...req.body,password:hashPass});
                 await newUser.save();
                 res.status(201).json({'msg':'Yeni kişi kaydı başarılı',newUser});
              } catch (error) {
                res.status(500).json(error);
              }
        }

        public static async login(req:Request,res:Response){
            try {
              const user=await User.findOne({username:req.body.username});
              
              if (!user){
                return res.status(404).json({'msg':'Böyle bir kişi bulunamadı'});
              }
              
              const jwtKey:any=process.env.JWT_KEY;
              const token =jwt.sign({_id:user.id,isSeller:user.isSeller},jwtKey,{expiresIn:'1h'});
              
              if (user){
                    const matchPass=await bcrypt.compare(req.body.password,user.password);
                    if (matchPass){
                        res.cookie("accessToken",token,{httpOnly:true}).status(200).json({'msg':'Giriş başarılı'});
                    }
                    else{
                      res.status(401).json({'msg':'Hatalı şifre'});
                    }
              }
            

            } catch (error) {
              res.status(500).json(error);
            }
        }


        public static async logout(req:Request,res:Response){
           res.clearCookie("accessToken",{sameSite:'none',secure:true}).status(200).json({'msg':'Çıkış yapıldı'});
           
        }


}


export default AuthController;