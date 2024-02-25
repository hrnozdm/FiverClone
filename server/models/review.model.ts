import mongoose, { Schema } from "mongoose";


const ReviewSchema=new Schema({
  gidId:{
    type:String,
    required:true,
  },
  userId:{
    type:String,
    required:true,
  },
  star:{
    type:Number,
    required:Number,
    enum:[1,2,3,4,5]
  },
  desc:{
    type:String,
    required:true,
  }
    
},{timestamps:true})

export default mongoose.model("Review",ReviewSchema);