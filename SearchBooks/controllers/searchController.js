import books from "../data/data.js";

export const searchBooks = (req, res) => {
  const { title } = req.query;

  if (!title) return res.status(400).json({ error: "Title required" });

  const result = books.filter(b =>
    b.title.toLowerCase().includes(title.toLowerCase())
  );

  res.json(result);
};