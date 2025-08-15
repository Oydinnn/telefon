import express from "express";
import Order from "../models/order.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  res.json(await Order.create(req.body));
});

router.get("/", async (req, res) => {
  res.json(await Order.find().populate("customer_id"));
});

router.get("/:id", async (req, res) => {
  res.json(await Order.findById(req.params.id).populate("customer_id"));
});

router.put("/:id", async (req, res) => {
  res.json(await Order.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete("/:id", async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: "Order deleted" });
});

export default router;
