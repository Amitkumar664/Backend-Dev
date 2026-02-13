import express from "express";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();
app.use("/api", bookRoutes);

app.listen(3000, () => console.log("Pagination server running"));