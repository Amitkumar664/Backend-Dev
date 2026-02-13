import books from "../data/data.js";

export const getPaginatedBooks = (req, res) => {
  let { page = 1, limit = 2 } = req.query;

  page = parseInt(page);
  limit = parseInt(limit);

  const start = (page - 1) * limit;
  const data = books.slice(start, start + limit);

  res.json({
    total: books.length,
    page,
    limit,
    data
  });
};