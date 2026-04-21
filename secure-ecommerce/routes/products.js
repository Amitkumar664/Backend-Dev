const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  const search = req.query.name;

  if (typeof search !== "string") {
    return res.status(400).json({ message: "Invalid input" });
  }

  const products = await Product.find({
    name: { $regex: search, $options: "i" }
  });

  res.json(products);
});