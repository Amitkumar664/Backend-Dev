// import connectDb  from "./config/db.js";
// import dotenv from "dotenv";
// import express from "express";
// import router from "./routes/userRoutes.js";
// import authRouter from "./routes/authRoute.js";
// dotenv.config();
// connectDb();

// //import { getAllUsers } from "./controllers/userController.js";

// const app = express();
// const port=process.env.PORT || 5000;
// // app.use((req, res, next) => {
// //   console.log("Request received:", req.method, req.url);
// //   next();
// // });
// //router.get("/user",getAllUsers);
// app.use(express.json());
// app.use("/api", router);
// app.use("/api/auth", authRouter);

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import express from "express"
import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoutes.js"

dotenv.config();

connectDb();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use("/api", userRoutes)
app.use("/api/auth", authRoutes)

app.listen(port,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})