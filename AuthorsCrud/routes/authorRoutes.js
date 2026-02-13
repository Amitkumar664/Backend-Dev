import express from "express";
import {
  createAuthor,
  getAuthors,
  getAuthorById,
  deleteAuthor
} from "../controllers/authorController.js";

const router = express.Router();

router.post("/authors", createAuthor);
router.get("/authors", getAuthors);
router.get("/authors/:id", getAuthorById);
router.delete("/authors/:id", deleteAuthor);

export default router;