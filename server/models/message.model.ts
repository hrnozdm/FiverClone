import mongoose, { Schema } from "mongoose";


const MessageSchema=new Schema({
  conversationId:{
    type:String,
    required:true,
  },
  userId:{
    type:String,
    required:true,
  },
  desc:{
    type:String,
    required:true,
  }
    
},{timestamps:true})

export default mongoose.model("Message",MessageSchema);