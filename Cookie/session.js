import express from 'express';
import session from 'express-session';
const app=express();
const PORT =process.env.PORT || 3000;

app.use(express.json());


//middleware
app.use(
    session({
        secret:"mysecretkey",
        resave:false,
        saveUninitialized:false,
        cookie:{
            maxAge:1000*60*1//1 minute
        }
    })
);

//enable session
app.get('/login',(req,res)=>{
    //after successful login
   let userInfo={
    id:1,
    name:"Amit"
    };
    req.session.user=userInfo;
    res.send('User logged in and session created!');
});
app.get('/profile',(req,res)=>{
    if(req.session.user){
        res.send(`Welcome ${req.session.user.name}! `);
    }else{
        res.send('Please log in to view your profile.');
    }   
});

app.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            return res.status(500).send('Error logging out');
        }
        res.send('User logged out and session destroyed!');
    });  
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});