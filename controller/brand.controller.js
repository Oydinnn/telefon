import Brand from "../models/brand.model.js";



app.post("/brands", async (req, res) => {
  const brand = new Brand(req.body);
  await brand.save();
  res.json(brand);
});

app.get("/brands", async (req, res) => {
  const brands = await Brand.find();
  res.json(brands);
});

app.put("/brands/:id", async (req, res) => {
  const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(brand);
});

app.delete("/brands/:id", async (req, res) => {
  await Brand.findByIdAndDelete(req.params.id);
  res.json({ message: "Brand deleted" });
});