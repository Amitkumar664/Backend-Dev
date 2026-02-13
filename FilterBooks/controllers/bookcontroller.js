import books from "../Data/data.js";

export const getFilteredBooks = (req, res) => {
  let { author, year } = req.query;
  let result = books;

  if (author) {
    result = result.filter(b =>
      b.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  if (year) {
    result = result.filter(b => b.year == parseInt(year));
  }

  res.json(result);
};