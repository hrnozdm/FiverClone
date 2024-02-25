import express  from "express";
import dotenv from "dotenv";
import {connecDb} from "./config/config"
import router from "./routes/router";
import cookieParser from "cookie-parser";
import cors from "cors";

const app=express();
dotenv.config();
const PORT=process.env.PORT;
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials:true
}));
app.use(express.json());
app.use(cookieParser());
connecDb();
app.use('/api',router);
app.listen(PORT,()=>{
  console.log(`Proje ${PORT}'portunda çalışıyor`);
});



