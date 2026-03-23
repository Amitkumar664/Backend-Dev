import connectDb  from "./config/db.js";
import dotenv from "dotenv";
import express from "express";
import router from "./routes/userRoutes.js";
dotenv.config();
connectDb();

// import { getAllUsers } from "./controllers/userController.js";

const app = express();
const port=process.env.PORT || 5000;
// app.use((req, res, next) => {
//   console.log("Request received:", req.method, req.url);
//   next();
// });
//router.get("/user",getAllUsers);
app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});