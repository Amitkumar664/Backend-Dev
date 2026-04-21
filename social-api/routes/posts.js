const express = require("express");
const router = express.Router();
const sanitize = require("../utils/sanitizeHTML");

router.post("/", async (req, res) => {
  const cleanContent = sanitize(req.body.content);

  // Save to DB (example)
  res.json({ content: cleanContent });
});

module.exports = router;