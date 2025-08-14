import express from "express";
import Model from "../models/model.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  res.json(await Model.create(req.body));
});

router.get("/", async (req, res) => {
  res.json(await Model.find().populate("brand_id"));
});

router.get("/:id", async (req, res) => {
  res.json(await Model.findById(req.params.id).populate("brand_id"));
});

router.put("/:id", async (req, res) => {
  res.json(await Model.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete("/:id", async (req, res) => {
  await Model.findByIdAndDelete(req.params.id);
  res.json({ message: "Model deleted" });
});

export default router;
