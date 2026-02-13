import express from "express";
import { getFilteredBooks } from "../controllers/bookcontroller.js";

const router = express.Router();
router.get("/books", getFilteredBooks);

export default router;