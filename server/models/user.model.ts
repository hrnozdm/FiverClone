import mongoose, { Schema } from "mongoose";


const userschema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:false,
    },
    country:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:false,
    },
    desc:{
        type:String,
        required:true,
    },
    isSeller:{
        type:Boolean,
        default:false,
    },
    
},{timestamps:true})

export default mongoose.model("User",userschema);