import mongoose from "mongoose";

export const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.DB)
        console.log("Database connected");
    }catch(error){
        console.log(error);
    }
}