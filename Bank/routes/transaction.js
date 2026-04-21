const speakeasy = require("speakeasy");

router.post("/transfer", async (req, res) => {
  const { amount, token } = req.body;

  // Step 1: Validate amount
  if (amount <= 0 || amount > 100000) {
    return res.status(400).json({ message: "Invalid amount" });
  }

  // Step 2: Require 2FA if > 1000
  if (amount > 1000) {
    const verified = speakeasy.totp.verify({
      secret: req.session.mfaSecret,
      encoding: "base32",
      token
    });

    if (!verified) {
      return res.status(400).json({ message: "2FA required" });
    }
  }

  res.json({ message: "Transaction successful" });
});