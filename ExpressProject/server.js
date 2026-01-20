const express = require('express');
const app = express();
const port = 3000;

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
app.get('/username',(req,res)=>{
  let modifiedName=userData.map((ele)=>{
    if(ele.gender==="Male"){
      return "Mr"+ele.name
    }else{
      return "Mrs"+ele.name
    }
  }) 
  console.log(modifiedName);
  res.status(200).json(modifiedName);


});
app.get("/user/:id",(req,res)=>{
  const id=parseInt(req.params.id);
  let user=userData.find((ele)=>ele.id===id)
  res.json(user);
});  

let userInfo={
  username:"Query",
  password:"pass123"

}
// let name=userInfo.username;
// let pass=userInfo.password;
//destructuring
const{name,pass}=userInfo;   //object destructuring

let arr=[1,2,3];
const [a,b,c]=arr;   //array destructuring


//async programming
//eventLoop
//streams
//server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
