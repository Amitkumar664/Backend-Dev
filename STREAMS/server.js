const fs=require('fs');
const http=require('http');

// fs.readFile('./log.txt',"utf-8",(err,data)=>{
   
//     console.log(data);

// });

const readStream=fs.createReadStream('./log.txt',{
    highWaterMark:16*1024
});

readStream.on('data',(chunk)=>{
    console.log(chunk.toString( ) );
});

