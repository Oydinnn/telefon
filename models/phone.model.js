import mongoose from "mongoose";

const PhoneSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  brand_id: { 
    type: mongoose.Schema.Types.ObjectId, ref: "Brand" 
  },
  model_id: { 
    type: mongoose.Schema.Types.ObjectId, ref: "Model" 
  },
  color: { 
    type: String, 
    enum: ["black", "white", "gold", "blue"] 
  },
  display: Number,
  ram: String,
  memory: String,
});
const Phone = mongoose.model("Phone", PhoneSchema);
export default Phone;
