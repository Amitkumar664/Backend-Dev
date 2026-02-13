export const validateYear = (req, res, next) => {
  const { year } = req.body;

  if (year === undefined) return next();

  if (isNaN(year)) {
    return res.status(400).json({ error: "Year must be number" });
  }

  const currentYear = new Date().getFullYear();
  if (year < 1000 || year > currentYear) {
    return res.status(400).json({ error: "Invalid year range" });
  }

  next();
};