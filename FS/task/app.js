const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'log.txt');
function readLogFile() {
  if (!fs.existsSync(filePath)) {
    return "Log file does not exist";
  }
  return fs.readFileSync(filePath, 'utf-8');
}


function writeLogFile(content) {
  fs.writeFileSync(filePath, content);
  return "Log file written successfully";
}
function appendLogFile(content) {
  fs.appendFileSync(filePath, content + '\n');
  return "Log appended successfully";
}
function deleteLogFile() {
  if (!fs.existsSync(filePath)) {
    return "Log file does not exist";
  }
  fs.unlinkSync(filePath);
  return "Log file deleted successfully";
}

module.exports = {
  readLogFile,
  writeLogFile,
  appendLogFile,
  deleteLogFile
};
