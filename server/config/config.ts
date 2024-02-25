import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoUrl:any=process.env.mongoUrl;


const mongooseOptions: any = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

export const connecDb=()=>{
    try {
        mongoose.connect(mongoUrl,mongooseOptions);
        //console.log("db bağlantısı başarılı");
        
     } catch (error) {
         console.log(error);
         throw error;
         
     }
}

