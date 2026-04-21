const express = require("express");
const router = express.Router();

router.get("/:userId", async (req, res) => {
  if (req.session.user.id !== req.params.userId) {
    return res.status(403).json({ message: "Forbidden" });
  }

  res.json({ message: "Private messages" });
});

module.exports = router;