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
 let userData=[{
        id:1,
        name:"amit",
        age:"23"
    },{  id:2,
        name:"Sumit",
        age:"23"

    }]
app.get("/user",(req,res)=>{
   
    res.render("user",{userData})
})

app.get("/list",(req,res)=>{
    //let arr=["A","B","C","D"]
    let arr=[]

    res.render("list",{arr})
})
app.use(express.urlencoded({extended:true}));
app.post("/api/user",(req,res)=>{
    const{name,age}=req.body;
    let newUserData={
        id:userData.length,
        name,
        age
    }
    userData.push(newUserData);
    res.redirect('/user')
})
app.get("/user/user/:id/",(req,res)=>{
    const userid=req.params.id;
    const useridx=userData.findIndex((ele)=>ele.id==userid);
    if (userid==-1){
        return res.send("user not found") 
    }
    userData.splicce(useridx,1);
    res.redirect("/user")
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