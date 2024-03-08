import { Request,Response } from "express";
import Order from "../models/order.model";

interface OrderDocument{
    gigId:string,
    img?:string,
    title:string,
    buyerId:string,
    sellerId:string,
    price:Number,
    payment_intent:string,
}

class  OrderController{


     public static async createOrder(req:Request,res:Response){

         try {
            const gig=await Order.findById(req.params.gigId);
                if (!gig) {
                    
                    return res.status(404).json({ msg: 'Gig bulunamadı' });
                }
            const newOrder:OrderDocument={
                gigId: gig?._id.toString(),
                img: gig?.img || '', 
                title: gig.title || '',
                buyerId: gig.buyerId || '',
                sellerId: gig.sellerId || '',
                price: gig.price || 0, // varsayılan değeri belirle
                payment_intent: gig.payment_intent || '',
            }

            const newOrder2=new Order({});
         } catch (error) {
            
         }
     }
}

export default OrderController;