const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

let posts = [
  { id: 1, title: "First Post", content: "Hello World" }
];

// List posts
app.get("/", (req, res) => {
  res.render("index", { posts });
});

// New post form
app.get("/new", (req, res) => {
  res.render("new");
});

// Create post
app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  posts.push({ id: Date.now(), title, content });
  res.redirect("/");
});

// View single post
app.get("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (!post) return res.send("Post not found");
  res.render("show", { post });
});

app.listen(3000, () => console.log("Server running"));
