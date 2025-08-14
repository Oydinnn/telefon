import mongoose from "mongoose";

const OrderDetailSchema = new mongoose.Schema({
  order_id: { 
    type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  phone_id: { 
    type: mongoose.Schema.Types.ObjectId, ref: "Phone" },
  quantity: { 
    type: Number, 
    default: 1 }
});

const OrderDetail = mongoose.model("OrderDetail", OrderDetailSchema);

export default OrderDetail;
