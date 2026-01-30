//make post request and create validation
// server.js
import express from "express";
import logfun from "./middleware.js";

const app = express();

// use middleware
app.use(logfun);

// routes
app.get("/", (req, res) => {
  res.send("Home Route");
});

app.get("/user", (req, res) => {
  res.json({
    name: "Amit",
    role: "Student"
  });
});

// start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
