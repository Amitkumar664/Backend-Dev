const validator = require("validator");

module.exports = (req, res, next) => {
  const { email, phone } = req.body;

  if (email && !validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  if (phone && !validator.isMobilePhone(phone + "", "en-IN")) {
    return res.status(400).json({ message: "Invalid phone" });
  }

  next();
};