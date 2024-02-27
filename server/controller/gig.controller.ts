import { Request,Response } from "express";
import { AuthRequest } from "../middleware/jwt";
import Gig from "../models/gig.model";

class GigController{
   
    public static async createGig(req:AuthRequest,res:Response){
       if (!req.isSeller){
          return res.status(403).json({'msg':'Yalnızca satıcılar ilan  oluşturabilir'});
       }

       const newGig=new Gig({
        userId:req.userId,
        ...req.body
       }); 

       try {
           const savedGig=await newGig.save();
           res.status(201).json({'msg':'Yeni iş kaydı başarılı',savedGig}); 
       }catch (error) {
          console.log(error);
          res.status(500).json({'msg':'Kayıt Başarısız'});
       }
    }

    public static async deleteGig(){
    }

    public static async singleGig(){
    }

    public static async allGig(){

    }

}


export default GigController;