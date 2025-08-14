import mongoose from "mongoose";

const ModelSchema = new mongoose.Schema({
  brand_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    required: true,
  },
  name: { 
    type: String, 
    required: true 
  },
});
const Model = mongoose.model("Model", ModelSchema);
export default Model;
