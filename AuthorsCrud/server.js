import express from "express";
import authorRoutes from "./routes/authorRoutes.js";

const app = express();
app.use(express.json());
app.use("/api", authorRoutes);

app.listen(3000, () => console.log("Authors CRUD running"));