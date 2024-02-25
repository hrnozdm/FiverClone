import express  from "express";
import dotenv from "dotenv";
import {connecDb} from "./config/config"
import router from "./routes/router";

const app=express();
dotenv.config();
const PORT=process.env.PORT;
app.use(express.json());
connecDb();
app.use('/api',router);
app.listen(PORT,()=>{
  console.log(`Proje ${PORT}'portunda çalışıyor`);
});



