import express from 'express';
const app=express();
//set configuration to tell express that we are using ejs
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")

})
app.get("/me",(req,res)=>{
    res.send("its me")
})

app.get("/user",(req,res)=>{
    let userData={
        name:"amit",
        age:"23"
    }
    res.render("user",{userData})
})

app.get("/list",(req,res)=>{
    //let arr=["A","B","C","D"]
    let arr=[]

    res.render("list",{arr})
})
app.listen(3000,(req,res)=>{
    console.log("server is running")
})




//static server
//csr
//ssr
//template engine
//ejs,pug,hbs
//seo friendly
//ejs is template engine with the help of express we can render dynamic pages// enbedded java script