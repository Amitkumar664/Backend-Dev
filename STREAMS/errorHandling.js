// const {error} =require("console");
// console.log("This is a log message.");

// try {
//     throw new Error("This is a custom error message.");
// }catch(error){
//     console.error("Caught an error:", error.message);
// }
const http = require('http');
const server = http.createServer((req, res) => {
    console.log('Received a request.');

    try {
        throw new Error('Something went wrong!');
    } catch (err) {
        console.error('Caught an error:', err.getmessage);
      

    }
      res.end('Hello World!');
})  

   
    server.listen(3000, () => {
        console.log('Server is listening on port 3000');
    });