import express from "express";
import Brand from "../models/brand.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  res.json(await Brand.create(req.body));
});

router.get("/", async (req, res) => {
  res.json(await Brand.find());
});

router.get("/:id", async (req, res) => {
  res.json(await Brand.findById(req.params.id));
});

router.patch("/:id", async (req, res) => {
  res.json(await Brand.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete("/:id", async (req, res) => {
  await Brand.findByIdAndDelete(req.params.id);
  res.json({ message: "Brand deleted" });
});

export default router;
