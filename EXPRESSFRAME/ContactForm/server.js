const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("contact");
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  res.send(`Thanks ${name}, we received your message!`);
});

app.listen(3000, () => console.log("Server running"));
