router.post("/submit", async (req, res) => {
  const { answers } = req.body;

  // Validate on server (NOT trust client)
  const correctAnswers = await getCorrectAnswers();

  if (JSON.stringify(answers) !== JSON.stringify(correctAnswers)) {
    return res.status(400).json({ message: "Tampering detected" });
  }

  res.json({ result: "Valid submission" });
});