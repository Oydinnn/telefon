import express from "express";
import Phone from "../models/phone.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  res.json(await Phone.create(req.body));
});

router.get("/", async (req, res) => {
  res.json(await Phone.find().populate("brand_id model_id"));
});

router.get("/:id", async (req, res) => {
  res.json(await Phone.findById(req.params.id).populate("brand_id model_id"));
});

router.put("/:id", async (req, res) => {
  res.json(await Phone.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete("/:id", async (req, res) => {
  await Phone.findByIdAndDelete(req.params.id);
  res.json({ message: "Phone deleted" });
});

export default router;
