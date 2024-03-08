import {Response } from 'express';
import { AuthRequest } from '../middleware/jwt';
import Review from '../models/review.model';
import Gig from '../models/gig.model';
import User from '../models/user.model';
class ReviewController{
   public static async createReview(req:AuthRequest,res:Response){
    if (req.isSeller){
        res.status(403).json({'msg':'Satıcılar yorum yapamaz'});
    }

    const newReview=new Review({
        userId:req.userId,
        gidId:req.params.gigId,
        desc:req.body.desc,
        star:req.body.star,
    });

      try {
         const review=await Review.findOne({userId:req.userId,gidId:req.params.gigId});
         if (review){
            return res.status(403).json({'msg':'Bu işe bir yorumunuz bulunmaktadır zaten'});
         }

         const savedReview=await newReview.save();
         await Gig.findByIdAndUpdate(req.params.gigId,{$inc:{totalStars:req.body.star,starNumber:1}});
         res.status(201).json({'msg':'Yorum kaydı başarılı',savedReview});
      }catch (error) {
          res.status(500).json(error);
      }
   }

   public static async getReviews(req:AuthRequest,res:Response){
    try {

        const reviews=await Review.find({
            gidId:req.params.gigId,
           
         })

         if (reviews){
             return res.status(200).json({'msg':'Yorumlar getirildi',reviews});
         }
        
    } catch (error) {
        res.status(500).json(error)
    }
     
     


   }
}

export default  ReviewController;