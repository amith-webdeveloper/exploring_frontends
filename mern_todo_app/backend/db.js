import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()


const mongodb_uri = process.env.MONGODB_URI

export const connectDB = async function(){
   try {
     const conn = await mongoose.connect(mongodb_uri)
     console.log(`connect Db : ${conn.connection.host}`);
   } catch (error) {
    console.log(error.message);
    
    
   }
    
}
