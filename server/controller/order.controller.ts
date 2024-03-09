import { Request, Response } from "express";
import Order from "../models/order.model";
import Gig from "../models/gig.model";
import { AuthRequest } from "../middleware/jwt";

interface OrderDocument{
    gigId: string;
    img: string;
    title: string;
    buyerId: string;
    sellerId: string;
    price: number;
    payment_intent: string;
}

class OrderController {
    public static async createOrder(req: AuthRequest, res: Response) {
        try {
            const gigId = req.params.gigId;

            
            const gig = await Gig.findById(gigId);
            if (!gig) {
                return res.status(404).json({ msg: 'Gig bulunamadı' });
            }

            const newOrder: OrderDocument = {
                gigId: gig?._id.toString() || '',
                img: gig?.cover || '',
                title: gig?.title || '',
                buyerId: req.userId || '',
                sellerId: gig?.userId || '',
                price: gig?.price || 0,
                payment_intent: "temp" || '',
            };

           
            const savedOrder = await Order.create(newOrder);

           
            res.status(201).json({ 'msg': 'Sipariş kaydı başarılı', savedOrder });
        } catch (error) {
            
            res.status(500).json(error);
        }
    }

    public static async getOrders(req:AuthRequest,res:Response){
      try {
        const order=await Order.find({...(req.isSeller ? {sellerId:req.userId} : {buyerId:req.userId}),isCompleted:true});
        if (order){
            return res.status(200).json({'msg':'Siparişler başarılı bir şekilde çekildi',order});
        }
        
      } catch (error) {
        res.status(500).json(error);
      }
    }
}


export default OrderController;
