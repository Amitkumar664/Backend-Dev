import express from 'express'
const app=express();
const port=3000;
import path from 'path';
import {fileURLToPath} from 'url';

const _filename=fileURLToPath(import.meta.url)
const _dirname=path.dirname(_filename);

const filepath=path.join(_dirname,"public")
//middleware
// app.use(express.static('public')); //it will get image from public as /img1.png   always use static if not express will not understand
app.use("/static",express.static('public'));   ///static/img1.png
app.get("/",(req,res)=>{
    res.send("home page")
})
app.listen(port,(req,res)=>{
    console.log("server is listening")
});