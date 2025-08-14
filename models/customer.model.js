import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  phone_number: { 
    type: String, 
    required: true }
});

const Customer =  mongoose.model("Customer", CustomerSchema);
export default Customer;
