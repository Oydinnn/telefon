import express from "express";
import Customer from "../models/Customer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  res.json(await Customer.create(req.body));
});

router.get("/", async (req, res) => {
  res.json(await Customer.find());
});

router.get("/:id", async (req, res) => {
  res.json(await Customer.findById(req.params.id));
});

router.put("/:id", async (req, res) => {
  res.json(await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete("/:id", async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.json({ message: "Customer deleted" });
});

export default router;
