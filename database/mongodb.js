import mongoose from "mongoose";
import { MONGO_URI } from "../config/dotenv.config.js";

const connectDB = async () =>{
  try{
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected succesfully");
  }catch(e){
    console.log(`MongoDB connected failed: ${e}`);
    process.exit(1);
  }
};
export default connectDB;