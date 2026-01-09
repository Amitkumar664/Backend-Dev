//fs module
//import fs module
// const fs = require('fs');

// const read=(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// }
// fs.readFile('./log.txt','utf-8',read);

// console.log("FIRST");
// fs.readFile('./log.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// const data=fs.readFileSync('./log.txt', 'utf-8');
// console.log(data);
// console.log("end of file");

// const data="this is log file";
// fs.writeFile('./output.txt', data, (err) => {
//     if (err) throw err;
//     console.log('File has been saved!');
// }); 

// fs.appendFile('./output.txt', 'this is new file file', (err) => {
//     if (err) throw err;
//     console.log('File has been updated!');
// });

// fs.unlinkSync('./output.txt') //output.txt remove 


// console.log("end of file");


//async
//readfile
//writefile
//appendfile
//unlink(delete)

//sync
//readfilesync
//writefilesync
//appendfilesync
//unlinksync(deleteSync)


//Path module
// const path = require('path');

//absolute path
// const absolutePath = path.resolve("./log.txt");
// console.log(absolutePath);
// console.log(__dirname);
// console.log(path.basename('./notes/log.txt')); //filename-log
// console.log(path.extname('./notes/log.txt')); //.txt


// const joinPath = path.join(__dirname, 'notes', 'log.txt');
// console.log(joinPath);


// const pathParse=path.parse(joinPath);
// console.log(pathParse);

// const filePath=path.join(__dirname,'log','log.txt');

// const data=fs.readFileSync(filePath,'utf-8');
// console.log(data);



//http method
//get-read
//post-create
//put-update
//delete    -delete
//patch-partial updatte
//api

const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req);
    // console.log(req.method); 
    res.end('Hello from the server');
});
server.listen(3000,()=>{
    console.log('server is listening on port 3000',3000);
});

