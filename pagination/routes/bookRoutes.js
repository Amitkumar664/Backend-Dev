import express from "express";
import { getPaginatedBooks } from "../controllers/bookController.js";

const router = express.Router();
router.get("/books", getPaginatedBooks);

export default router;