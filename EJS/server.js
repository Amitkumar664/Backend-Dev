import express from "express";
import methodOverride from "method-override";

const app = express();

app.set("view engine", "ejs");

// Parse form data FIRST
app.use(express.urlencoded({ extended: true }));

// Method override for PUT & DELETE
app.use(methodOverride("_method"));

let userData = [
  { id: 1, name: "amit", age: 23 },
];

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// Get all users
app.get("/user", (req, res) => {
  res.render("user", { userData });
});

// Render edit page
app.get("/editpage/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = userData.find((ele) => ele.id === id);

  if (!user) {
    return res.send("User not found");
  }

  res.render("edit", { user });
});

// Create user
app.post("/api/user", (req, res) => {
  const { name, age } = req.body;

  const newUser = {
    id: userData.length + 1,
    name,
    age,
  };

  userData.push(newUser);

  res.redirect("/user");
});

// Delete user
app.delete("/api/user/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = userData.findIndex((ele) => ele.id === id);

  if (index === -1) {
    return res.send("User not found");
  }

  userData.splice(index, 1);

  res.redirect("/user");
});

// Update user
app.put("/api/user/:id", (req, res) => {
  const { name, age } = req.body;
  const id = parseInt(req.params.id);

  const index = userData.findIndex((ele) => ele.id === id);

  if (index === -1) {
    return res.send("User not found");
  }

  userData[index] = { id, name, age };

  res.redirect("/user");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
