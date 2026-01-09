const log = require('./app.js');

console.log(log.writeLogFile("Server started"));
console.log(log.appendLogFile("User logged in"));
console.log(log.readLogFile());
console.log(log.deleteLogFile());
