import express from "express";
import searchRoutes from "./routes/searchRoutes.js";

const app = express();
app.use("/api", searchRoutes);

app.listen(3000, () => console.log("Search API running"));