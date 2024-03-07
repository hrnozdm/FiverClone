import {Router} from "express";
import AuthController from "../controller/auth.controller";
import UserController from "../controller/user.controller";
import GigController from "../controller/gig.controller";
import { verifyToken } from "../middleware/jwt";
import ReviewController from "../controller/review.controller";
const router= Router();


router.get('',(req,res)=>{ res.status(200).json({'msg':'Anasayfa'})});
router.post('/auth/register',AuthController.register);
router.post('/auth/login',AuthController.login);
router.post('/auth/logout',AuthController.logout);
router.delete('/user/deleteUser/:id',verifyToken,UserController.deleteUser);
router.post('/gig/createGig',verifyToken,GigController.createGig);
router.delete('/gig/deleteGig/:id',verifyToken,GigController.deleteGig);
router.get('/gig/allGig/',GigController.allGig);
router.get('/gig/allGig/:id',GigController.singleGig);
router.post('/createReview/:gigId',verifyToken,ReviewController.createReview);
router.get('/getReviews/:gigId',ReviewController.getReviews);


export default router;