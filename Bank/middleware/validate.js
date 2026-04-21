module.exports = (req, res, next) => {
  for (let key in req.body) {
    if (typeof req.body[key] === "object") {
      return res.status(400).json({ message: "Invalid input" });
    }
  }
  next();
};