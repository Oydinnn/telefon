import express from "express";
import OrderDetail from "../models/OrderDetail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  res.json(await OrderDetail.create(req.body));
});

router.get("/", async (req, res) => {
  res.json(await OrderDetail.find().populate("order_id phone_id"));
});

router.get("/:id", async (req, res) => {
  res.json(await OrderDetail.findById(req.params.id).populate("order_id phone_id"));
});

router.put("/:id", async (req, res) => {
  res.json(await OrderDetail.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete("/:id", async (req, res) => {
  await OrderDetail.findByIdAndDelete(req.params.id);
  res.json({ message: "Order detail deleted" });
});

export default router;
