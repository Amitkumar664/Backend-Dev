import express from "express";
import bookRoutes from "./route/bookRoutes.js";

const app = express();
app.use("/api", bookRoutes);

app.listen(3000, () => console.log("Server running on 3000"));