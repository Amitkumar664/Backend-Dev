import express from "express";
import { books } from "./data/data.js";
import { validateYear } from "./middleware/validateYear.js";

const app = express();
app.use(express.json());

let nextId = 1;

app.post("/api/books", validateYear, (req, res) => {
  const { title, author, year } = req.body;

  if (!title || !author || !year)
    return res.status(400).json({ error: "All fields required" });

  const newBook = { id: nextId++, title, author, year };
  books.push(newBook);

  res.status(201).json(newBook);
});

app.listen(3000, () => console.log("Server running on 3000"));