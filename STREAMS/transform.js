const fs=require('fs');
const { Transform } = require('stream');
const upper=new Transform({
    transform(chunk,encoding,cb){
        const upperChunk=chunk.toString().toUpperCase();
        cb(null,upperChunk);
    }   
});

const readStream=fs.createReadStream('./info.txt')
const writeStream=fs.createWriteStream('./infoOutput.txt');


const removeVowels=new Transform({
    transform(chunk,encoding,cb){
        const noVowelChunk=chunk.toString().replace(/[aeiouAEIOU]/g,'');
        cb(null,noVowelChunk);
    }
});
readStream.pipe(upper).pipe(removeVowels).pipe(writeStream);