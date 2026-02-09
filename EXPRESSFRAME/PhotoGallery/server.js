const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const images = fs.readdirSync("./public/images");
  res.render("gallery", { images });
});

app.listen(3000, () => console.log("Server running"));
