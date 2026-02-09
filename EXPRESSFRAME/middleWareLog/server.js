const express = require("express");
const app = express();
const PORT = 3000;

// Response Time Middleware
app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const time = Date.now() - start;
    console.log(`${req.method} ${req.url} - ${time}ms`);
  });

  next();
});

app.get("/", (req, res) => {
  setTimeout(() => {
    res.send("Home Page");
  }, 500);
});

app.listen(PORT, () => console.log("Server running"));
