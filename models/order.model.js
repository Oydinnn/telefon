import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  customer_id: { 
    type: mongoose.Schema.Types.ObjectId, ref: "Customer" 
  },
  total_price: Number,
  order_date: { 
    type: Date, 
    default: Date.now 
  },
  order_status: { 
    type: String, 
    enum: ["pending", "shipped", "delivered", "cancelled"], 
    default: "pending" }
});

const Order = mongoose.model("Order", OrderSchema);
export default Order;
