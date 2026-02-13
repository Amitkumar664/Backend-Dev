import express from "express";
import { searchBooks } from "../controllers/searchController.js";

const router = express.Router();
router.get("/books/search", searchBooks);

export default router;