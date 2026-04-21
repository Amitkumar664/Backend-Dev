const validator = require("validator");

exports.validateUser = (req, res, next) => {
  const { email, username } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  if (!validator.isAlphanumeric(username)) {
    return res.status(400).json({ message: "Invalid username" });
  }

  next();
};