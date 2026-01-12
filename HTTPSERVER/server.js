//creating server using http module


// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log("url" + req.url);
//     console.log("http method" + req.method);
//     res.writeHead(200,{'Content-Type':'text/html',userinfo:'myname'});
//     res.end("hello");
// });

// server.listen(3000, () => {
//     console.log("server is listening on port 3000");
// }); 



// json data on server
// const server=http.createServer((req,res)=>{
//     let user={
//         username:"john_doe",
//         email:"sdjfbjsd@gmail.com"
//     }
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.end(JSON.stringify({
//         success:"true",
//         user
//     }));
// });
// server.listen(3000, () => {
//     console.log("server is listening on port 3000");
// }); 

//sending json file data on specific route
// let user={
//         username:"john_doe",
//         email:"sdjfbjsd@gmail.com"
//     }
// const http = require('http');

// const server=http.createServer((req,res)=>{
//     if(req.url==="/home" && req.method==="GET"){
    
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.end(JSON.stringify({
//         success:"true",
//         user
//     }));}else{
//         res.end("<h1>page not found</h1>");
//     }
// });
// server.listen(3000, () => {
//     console.log("server is listening on port 3000");
// }); 


//different     routes in server
// const http = require('http');
// const server=http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.writeHead(200,{
//         'Content-Type':'text/html'});

//         res.end("<h1>Welcome to Home Page</h1>");
//     }else if(req.url==="/about"){
//         res.writeHead(200,{
//             'Content-Type':'text/html'});
//             res.end("<h1>Welcome to About Page</h1>");
//     }else if(req.url==="/contact"){
//         res.writeHead(200,{
//             'Content-Type':'text/html'});
//             res.end("<h1>Welcome to Contact Page</h1>");
//     }else{
//         res.writeHead(200,{
//             'Content-Type':'text/html'});
//             res.end("<h1> Page Not Found</h1>");
//     }
// });
// server.listen(3000, () => {
//     console.log("server is listening on port 3000");
// });       

//serving html file using http module
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{

    if(req.url==="/"){
        fs.readFile("./public/index.html",'utf-8',(err,data)=>{
        if(err){
            res.end("server error");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });
    }else if(req.url==="/about"){
         fs.readFile("./public/about.html",'utf-8',(err,data)=>{
        if(err){
            res.end("server error");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });}else if(req.url==="/task"){
          fs.readFile("./public/task.html",'utf-8',(err,data)=>{
        if(err){
            res.end("server error");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });
    }else{
        res.end("<h1>Page not found</h1>");
    }


    
});
server.listen(3000, () => {
    console.log("server is listening on port 3000");
});
