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

// const data=fs.readFileSync('./log.txt', 'utf-8');
// console.log(data);
// console.log("end of file");

const data="this is log file";
fs.writeFile('./output.txt', data, (err) => {
    if (err) throw err;
    console.log('File has been saved!');
}); 

console.log("end of file");