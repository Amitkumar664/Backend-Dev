const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/user',(req,res)=>{
    res.send('User endpoint');  
})
app.get('/home',(req,res)=>{
    res.send('Home endpoint');
})
app.get('/about',(req,res)=>{
    res.send('About endpoint');
})
app.get('/userdetail',(req,res)=>{
    let user={
        name:"Amit Kumar",
        age:30,
        email:" sdjbgjksg@sddgfnfk"}
     res.status(200).json(user);
})
app.get('/homedetail',(req,res)=>{
    let user={
        name:"vasudhaera",
        add:" mathira"}
     res.status(200).json(user);
})
app.get('/aboutdetail',(req,res)=>{
    let user={
        name:"amit",
        age:20,
        email:" amitkumar4102004b@gmail.com"}
     res.status(200).json(user);
})



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});