import { Request,Response } from 'express';
import User from '../models/user.model';
import {AuthRequest} from "../middleware/jwt"
class UserController{
    public static async deleteUser(req:AuthRequest,res:Response){
        const user= await User.findById(req.params.id);
        if (req.userId !==user?.id.toString()){
           return res.status(403).json({'msg':'Kullanıcı sadece kendini silebilir'});
         }
         await User.findByIdAndDelete(req.params.id);
         res.status(200).json({'msg':'Silme işlemi başarılı'})
        

    }

    public static async getUser(req:AuthRequest,res:Response){
        try {
            const user=await User.findById(req.params.userId);
            if (user){
              return res.status(200).json({'msg':'Kullanıcı bulundu',user});
            }
        } catch (error) {
            return res.status(500).json(error);
        }
      
    }
}

export default UserController;