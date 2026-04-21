const bcrypt = require("bcryptjs");

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  const match = await bcrypt.compare(req.body.password, user.password);

  if (!match) return res.status(400).json({ message: "Invalid credentials" });

  req.session.user = {
    id: user._id,
    device: req.headers["user-agent"]
  };

  res.json({ message: "Login success" });
});