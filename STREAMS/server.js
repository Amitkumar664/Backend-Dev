const fs=require('fs');
const http=require('http');

// fs.readFile('./log.txt',"utf-8",(err,data)=>{
   
//     console.log(data);

// });

// const readStream=fs.createReadStream('./log.txt',{
//     highWaterMark:16*1024
// });

// readStream.on('data',(chunk)=>{
//     console.log(chunk.toString( ) );
// });

//this is used to create a new file and write data into it
const writeStream=fs.createWriteStream('./info.txt',{
    flags:"a" //for end
})
writeStream.write('\nHello World\n');
writeStream.write('\nThis is a test file\n');
writeStream.end('\nThis is the end of the file\n');
writeStream.end();
writeStream.on('finish',()=>{
    console.log('Write completed');
});