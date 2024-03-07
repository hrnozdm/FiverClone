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

    public static async deleteGig(req:AuthRequest,res:Response){
        try {
            const gig=await Gig.findById(req.params.id);

            if (gig?.userId !== req.userId){
                return res.status(403).json({'msg':'Yetkisiz işlem'});
            }
            
            await Gig.findByIdAndDelete(req.params.id);
            res.status(200).json({'msg':'Silme işlemi başarılı',gig});
            
        } catch (error) {
            res.status(500).json(error);
        }
       
    }

    public static async singleGig(req:AuthRequest,res:Response){

        try {
            const gig=await Gig.findById(req.params.id);
            if (!gig){
                return res.status(404).json({'msg':'Aradığınız iş bulunmamaktadır'});
            }
    
            res.status(200).json(gig);
        } catch (error) {
            res.status(500).json(error);
        }
       
    } 

    public static async allGig(req: AuthRequest, res: Response) {
        try {
            const q = req.query;
    
            const filter = {
                ...(q.userId && { userId: q.userId }),
                ...(q.cat && { cat: q.cat }),
                ...(q.maxprice && { price: { $gt: q.maxprice } }),
                ...(q.minprice && { price: { $lt: q.minprice } }),
                ...(q.title && { title: { $regex: q.title, $options: "i" } }),
            };
    
           const gig=await Gig.find(filter);
    
            if (!gig) {
                return res.status(404).json({ msg: 'Aradığınız iş bulunmamaktadır' });
            }
    
            res.status(200).json(gig);
        } catch (error) {
            console.error('Hata oluştu:', error);
            res.status(500).json({ msg: 'Sunucu hatası oluştu' });
        }
    }
    


}


export default GigController;