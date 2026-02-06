// app.js
const express = require('express');
const app = express();

const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Aman" },
  { id: 4, name: "Riya" }
];

// Filter by name -> /users?name=am
app.get('/users', (req, res) => {
  const nameQuery = req.query.name;

  if (!nameQuery) return res.json(users);

  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(nameQuery.toLowerCase())
  );

  res.json(filtered);
});
//404 error
app.use((req, res) => {
  res.status(404).render('404');
});


app.listen(3000, () => console.log("Server running"));
