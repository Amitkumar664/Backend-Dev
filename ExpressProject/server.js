const express = require('express');
const app = express();
const port = 3000;

// ✅ IMPORT CORRECTLY
const { userData } = require('./data');

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/user', (req, res) => {
  res.send('User endpoint');
});

app.get('/home', (req, res) => {
  res.send('Home endpoint');
});

app.get('/about', (req, res) => {
  res.send('About endpoint');
});

app.get('/userdetail', (req, res) => {
  res.status(200).json({
    name: "Amit Kumar",
    age: 30,
    email: "sdjbgjksg@sddgfnfk"
  });
});


app.get('/userData', (req, res) => {
  res.status(200).json(userData);
});


// const adults = userData.filter(user => user.age > 25);
// console.log(adults);
app.get("/userAge",(req,res)=>{
    let userGreaterThan25=userData.filter((user)=>user.age>25);
    res.status(200).json(userGreaterThan25);
    console.log(userGreaterThan25);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
