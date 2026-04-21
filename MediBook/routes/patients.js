router.get("/:id", async (req, res) => {
  if (req.session.user.id !== req.params.id) {
    return res.status(403).json({ message: "Access denied" });
  }

  res.json({ data: "Patient record" });
});