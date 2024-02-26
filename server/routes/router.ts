import {Router} from "express";
import AuthController from "../controller/auth.controller";
import UserController from "../controller/user.controller";
import { verifyToken } from "../middleware/jwt";
const router= Router();


router.get('',(req,res)=>{ res.status(200).json({'msg':'Anasayfa'})});
router.post('/auth/register',AuthController.register);
router.post('/auth/login',AuthController.login);
router.post('/auth/logout',AuthController.logout);
router.delete('/user/deleteUser/:id',verifyToken,UserController.deleteUser);


export default router;