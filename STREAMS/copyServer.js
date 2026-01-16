const fs=require('fs');

const readStream=fs.createReadStream('./log.txt')

const writeStream=fs.createWriteStream('./copyLog.txt');

// readStream.on('data',(chunk)=>{
//     let data=chunk.toString();
//     writeStream.write(data);
// });

// readStream.on('end',()=>{
//     writeStream.end();
//     console.log('Copy completed');
// });

//pipeline
readStream.pipe(writeStream);