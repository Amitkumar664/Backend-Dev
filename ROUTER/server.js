import express from 'express';
import userRoute from "./router/userRoute.js"
import registrationRoute from "./router/registrationRoute.js"
import dashboardRoute from "./router/dashboardRoute.js"
const port=3000;
const app=express();

// app.get("/",(req,res)=>{
//     res.send("server is running")
// });

// app.get("/user",(req,res)=>{
//     res.send("user route")
// });

//middleware
app.use("/api",userRoute)
app.use("/reg",registrationRoute)
app.use("/dh",dashboardRoute)
app.listen(port,()=>{
    console.log("server is running");
})