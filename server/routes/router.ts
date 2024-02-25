import {Router} from "express";
import AuthController from "../controller/auth.controller";

const router= Router();


router.get('',(req,res)=>{ res.status(200).json({'msg':'Anasayfa'})});
router.post('/auth/register',AuthController.register);


export default router;