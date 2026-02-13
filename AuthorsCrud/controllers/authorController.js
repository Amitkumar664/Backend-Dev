import { authors } from "../data/data.js";

let nextId = 3;

export const createAuthor = (req, res) => {
  const { name, country } = req.body;
  const newAuthor = { id: nextId++, name, country };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
};

export const getAuthors = (req, res) => res.json(authors);

export const getAuthorById = (req, res) => {
  const author = authors.find(a => a.id == req.params.id);
  if (!author) return res.status(404).json({ error: "Not found" });
  res.json(author);
};

export const deleteAuthor = (req, res) => {
  const index = authors.findIndex(a => a.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Not found" });

  const deleted = authors.splice(index, 1);
  res.json(deleted);
};