exports.isInstructor = (req, res, next) => {
  if (req.session.user.role !== "instructor") {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
};