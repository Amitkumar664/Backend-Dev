//fs module
//import fs module
const fs = require('fs');

// const read=(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// }
// fs.readFile('./log.txt','utf-8',read);

console.log("FIRST");
// fs.readFile('./log.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

const data=fs.readFileSync('./log.txt', 'utf-8');
console.log(data);
console.log("end of file");
