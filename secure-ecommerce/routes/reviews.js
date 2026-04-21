const express = require("express");
const router = express.Router();
const xss = require("xss-clean");
const Review = require("../models/Review");

router.post("/", xss(), async (req, res) => {
  const review = new Review({
    text: req.body.text
  });

  await review.save();

  res.json(review);
});