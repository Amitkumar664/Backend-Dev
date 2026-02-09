const express = require("express");
const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Ankit" },
  { id: 4, name: "Riya" }
];

// http://localhost:3000/users?name=am
app.get("/users", (req, res) => {
  const name = req.query.name?.toLowerCase();

  if (!name) return res.json(users);

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(name)
  );

  res.json(filtered);
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
